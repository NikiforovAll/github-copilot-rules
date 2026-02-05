import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function HeroBanner(): ReactNode {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>GitHub Copilot Handbook</h1>
      <p className={styles.heroSubtitle}>
        Your guide to customizing and getting the most out of GitHub Copilot
      </p>
      <div className={styles.heroButtons}>
        <a className={styles.heroPrimary} href="#study-guide">
          Study Guide
        </a>
        <a
          className={styles.heroSecondary}
          href="/github-copilot-rules/category/customizations">
          Explore Customizations
        </a>
      </div>
    </div>
  );
}
