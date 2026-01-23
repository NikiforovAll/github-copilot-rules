---
description: "This file provides guidelines for writing effective, maintainable tests using xUnit and related tools"
applyTo: "tests/**/*.cs"
---

## Role Definition:
- Test Engineer
- Quality Assurance Specialist

## General:

**Description:**
Tests should be reliable, maintainable, and provide meaningful coverage. Use xUnit as the primary testing framework, with proper isolation and clear patterns for test organization and execution.

**Requirements:**
- Use xUnit as the testing framework
- Ensure test isolation
- Follow consistent patterns
- Maintain high code coverage

## Test Class Structure:

- Use ITestOutputHelper for logging:
    ```csharp
    public class OrderProcessingTests(ITestOutputHelper output)
    {
        
        [Fact]
        public async Task ProcessOrder_ValidOrder_Succeeds()
        {
            output.WriteLine("Starting test with valid order");
            // Test implementation
        }
    }
    ```
- Use fixtures for shared state:
    ```csharp
    public class DatabaseFixture : IAsyncLifetime
    {
        public DbConnection Connection { get; private set; }
        
        public async Task InitializeAsync()
        {
            Connection = new SqlConnection("connection-string");
            await Connection.OpenAsync();
        }
        
        public async Task DisposeAsync()
        {
            await Connection.DisposeAsync();
        }
    }
    
    public class OrderTests : IClassFixture<DatabaseFixture>
    {
        private readonly DatabaseFixture _fixture;
        private readonly ITestOutputHelper _output;
        
        public OrderTests(DatabaseFixture fixture, ITestOutputHelper output)
        {
            _fixture = fixture;
            _output = output;
        }
    }
    ```

## Test Methods:

- Prefer Theory over multiple Facts:
    ```csharp
    public class DiscountCalculatorTests
    {
        public static TheoryData<decimal, int, decimal> DiscountTestData => 
            new()
            {
                { 100m, 1, 0m },      // No discount for single item
                { 100m, 5, 5m },      // 5% for 5 items
                { 100m, 10, 10m },    // 10% for 10 items
            };
        
        [Theory]
        [MemberData(nameof(DiscountTestData))]
        public void CalculateDiscount_ReturnsCorrectAmount(
            decimal price,
            int quantity,
            decimal expectedDiscount)
        {
            // Arrange
            var calculator = new DiscountCalculator();
            
            // Act
            var discount = calculator.Calculate(price, quantity);
            
            // Assert
            Assert.Equal(expectedDiscount, discount);
        }
    }
    ```
- Follow Arrange-Act-Assert pattern:
    ```csharp
    [Fact]
    public async Task ProcessOrder_ValidOrder_UpdatesInventory()
    {
        // Arrange
        var order = new Order(
            OrderId.New(),
            new[] { new OrderLine("SKU123", 5) });
        var processor = new OrderProcessor(_mockRepository.Object);
        
        // Act
        var result = await processor.ProcessAsync(order);
        
        // Assert
        Assert.True(result.IsSuccess);
        _mockRepository.Verify(
            r => r.UpdateInventoryAsync(
                It.IsAny<string>(),
                It.IsAny<int>()),
            Times.Once);
    }
    ```

## Test Isolation:

- Use fresh data for each test:
    ```csharp
    public class OrderTests
    {
        private static Order CreateTestOrder() =>
            new(OrderId.New(), TestData.CreateOrderLines());
            
        [Fact]
        public async Task ProcessOrder_Success()
        {
            var order = CreateTestOrder();
            // Test implementation
        }
    }
    ```
- Clean up resources:
    ```csharp
    public class IntegrationTests : IAsyncDisposable
    {
        private readonly TestServer _server;
        private readonly HttpClient _client;
        
        public IntegrationTests()
        {
            _server = new TestServer(CreateHostBuilder());
            _client = _server.CreateClient();
        }
        
        public async ValueTask DisposeAsync()
        {
            _client.Dispose();
            await _server.DisposeAsync();
        }
    }
    ```

## Best Practices:

- Name tests clearly:
    ```csharp
    // Good: Clear test names
    [Fact]
    public async Task ProcessOrder_WhenInventoryAvailable_UpdatesStockAndReturnsSuccess()
    
    // Avoid: Unclear names
    [Fact]
    public async Task TestProcessOrder()
    ```
- Use meaningful assertions:
    ```csharp
    // Good: Clear assertions
    Assert.Equal(expected, actual);
    Assert.Contains(expectedItem, collection);
    Assert.Throws<OrderException>(() => processor.Process(invalidOrder));
    
    // Avoid: Multiple assertions without context
    Assert.NotNull(result);
    Assert.True(result.Success);
    Assert.Equal(0, result.Errors.Count);
    ```
- Handle async operations properly:
    ```csharp
    // Good: Async test method
    [Fact]
    public async Task ProcessOrder_ValidOrder_Succeeds()
    {
        await using var processor = new OrderProcessor();
        var result = await processor.ProcessAsync(order);
        Assert.True(result.IsSuccess);
    }
    
    // Avoid: Sync over async
    [Fact]
    public void ProcessOrder_ValidOrder_Succeeds()
    {
        using var processor = new OrderProcessor();
        var result = processor.ProcessAsync(order).Result;  // Can deadlock
        Assert.True(result.IsSuccess);
    }
    ```
- Use `TestContext.Current.CancellationToken` for cancellation:
    ```csharp
    // Good:
    [Fact]
    public async Task ProcessOrder_CancellationRequested()
    {
        await using var processor = new OrderProcessor();
        var result = await processor.ProcessAsync(order, TestContext.Current.CancellationToken);
        Assert.True(result.IsSuccess);
    }
    // Avoid:
    [Fact]
    public async Task ProcessOrder_CancellationRequested()
    {
        await using var processor = new OrderProcessor();
        var result = await processor.ProcessAsync(order, CancellationToken.None);
        Assert.False(result.IsSuccess);
    }
    ```

## Assertions:

- Use xUnit's built-in assertions:
    ```csharp
    // Good: Using xUnit's built-in assertions
    public class OrderTests
    {
        [Fact]
        public void CalculateTotal_WithValidLines_ReturnsCorrectSum()
        {
            // Arrange
            var order = new Order(
                OrderId.New(),
                new[]
                {
                    new OrderLine("SKU1", 2, 10.0m),
                    new OrderLine("SKU2", 1, 20.0m)
                });
            
            // Act
            var total = order.CalculateTotal();
            
            // Assert
            Assert.Equal(40.0m, total);
        }
        
        [Fact]
        public void Order_WithInvalidLines_ThrowsException()
        {
            // Arrange
            var invalidLines = new OrderLine[] { };
            
            // Act & Assert
            var ex = Assert.Throws<ArgumentException>(() =>
                new Order(OrderId.New(), invalidLines));
            Assert.Equal("Order must have at least one line", ex.Message);
        }
        
        [Fact]
        public void Order_WithValidData_HasExpectedProperties()
        {
            // Arrange
            var id = OrderId.New();
            var lines = new[] { new OrderLine("SKU1", 1, 10.0m) };
            
            // Act
            var order = new Order(id, lines);
            
            // Assert
            Assert.NotNull(order);
            Assert.Equal(id, order.Id);
            Assert.Single(order.Lines);
            Assert.Collection(order.Lines,
                line =>
                {
                    Assert.Equal("SKU1", line.Sku);
                    Assert.Equal(1, line.Quantity);
                    Assert.Equal(10.0m, line.Price);
                });
        }
    }
    ```
    
- Avoid third-party assertion libraries:
    ```csharp
    // Avoid: Using FluentAssertions or similar libraries
    public class OrderTests
    {
        [Fact]
        public void CalculateTotal_WithValidLines_ReturnsCorrectSum()
        {
            var order = new Order(
                OrderId.New(),
                new[]
                {
                    new OrderLine("SKU1", 2, 10.0m),
                    new OrderLine("SKU2", 1, 20.0m)
                });
            
            // Avoid: Using FluentAssertions
            order.CalculateTotal().Should().Be(40.0m);
            order.Lines.Should().HaveCount(2);
            order.Should().NotBeNull();
        }
    }
    ```
    
- Use proper assertion types:
    ```csharp
    public class CustomerTests
    {
        [Fact]
        public void Customer_WithValidEmail_IsCreated()
        {
            // Boolean assertions
            Assert.True(customer.IsActive);
            Assert.False(customer.IsDeleted);
            
            // Equality assertions
            Assert.Equal("john@example.com", customer.Email);
            Assert.NotEqual(Guid.Empty, customer.Id);
            
            // Collection assertions
            Assert.Empty(customer.Orders);
            Assert.Contains("Admin", customer.Roles);
            Assert.DoesNotContain("Guest", customer.Roles);
            Assert.All(customer.Orders, o => Assert.NotNull(o.Id));
            
            // Type assertions
            Assert.IsType<PremiumCustomer>(customer);
            Assert.IsAssignableFrom<ICustomer>(customer);
            
            // String assertions
            Assert.StartsWith("CUST", customer.Reference);
            Assert.Contains("Premium", customer.Description);
            Assert.Matches("^CUST\\d{6}$", customer.Reference);
            
            // Range assertions
            Assert.InRange(customer.Age, 18, 100);
            
            // Reference assertions
            Assert.Same(expectedCustomer, actualCustomer);
            Assert.NotSame(differentCustomer, actualCustomer);
        }
    }
    ```
    
- Use Assert.Collection for complex collections:
    ```csharp
    [Fact]
    public void ProcessOrder_CreatesExpectedEvents()
    {
        // Arrange
        var processor = new OrderProcessor();
        var order = CreateTestOrder();
        
        // Act
        var events = processor.Process(order);
        
        // Assert
        Assert.Collection(events,
            evt =>
            {
                Assert.IsType<OrderReceivedEvent>(evt);
                var received = Assert.IsType<OrderReceivedEvent>(evt);
                Assert.Equal(order.Id, received.OrderId);
            },
            evt =>
            {
                Assert.IsType<InventoryReservedEvent>(evt);
                var reserved = Assert.IsType<InventoryReservedEvent>(evt);
                Assert.Equal(order.Id, reserved.OrderId);
                Assert.NotEmpty(reserved.ReservedItems);
            },
            evt =>
            {
                Assert.IsType<OrderConfirmedEvent>(evt);
                var confirmed = Assert.IsType<OrderConfirmedEvent>(evt);
                Assert.Equal(order.Id, confirmed.OrderId);
                Assert.True(confirmed.IsSuccess);
            });
    }
    ```