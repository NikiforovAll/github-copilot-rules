import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GitHub Copilot Handbook',
  tagline: 'Best practices and customizations for GitHub Copilot',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://nikiforovall.github.io',
  baseUrl: '/github-copilot-rules/',

  organizationName: 'nikiforovall',
  projectName: 'github-copilot-rules',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/nikiforovall/github-copilot-rules/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    mermaid: {
      theme: {light: 'base', dark: 'dark'},
      options: {
        themeVariables: {
          primaryColor: '#dbeafe',
          primaryTextColor: '#1e3a5f',
          primaryBorderColor: '#0969da',
          lineColor: '#0969da',
          secondaryColor: '#f0f7ff',
          tertiaryColor: '#e8f0fe',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        },
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'GitHub Copilot Handbook',
      logo: {
        alt: 'GitHub Copilot Handbook Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        {
          to: '/category/fundamentals',
          label: 'Fundamentals',
          position: 'left',
        },
        {
          to: '/category/guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/category/customizations',
          label: 'Customizations',
          position: 'left',
        },
        {
          href: 'https://github.com/nikiforovall/github-copilot-rules',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    announcementBar: {
      id: 'handbook_announcement',
      content:
        '⭐ If you find this handbook useful, give it a <a target="_blank" rel="noopener noreferrer" href="https://github.com/nikiforovall/github-copilot-rules">star on GitHub</a>!',
      backgroundColor: '#0969da',
      textColor: '#ffffff',
      isCloseable: true,
    },
    footer: undefined,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'markdown', 'csharp', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
