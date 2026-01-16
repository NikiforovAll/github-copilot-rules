import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Custom Instructions',
    description: (
      <>
        Define project-specific coding guidelines, style preferences, and
        conventions that Copilot follows consistently across your codebase.
      </>
    ),
  },
  {
    title: 'Patterns & Templates',
    description: (
      <>
        Create reusable patterns and templates that Copilot can use to generate
        consistent, high-quality code matching your team's standards.
      </>
    ),
  },
  {
    title: 'Custom Rules',
    description: (
      <>
        Set up custom rules to enforce best practices, security guidelines, and
        code quality standards automatically.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
