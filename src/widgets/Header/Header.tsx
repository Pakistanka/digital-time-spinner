import { H1 } from 'shared/ui';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.border} />
      <H1>
        Исторические <br /> даты
      </H1>
    </header>
  );
};
