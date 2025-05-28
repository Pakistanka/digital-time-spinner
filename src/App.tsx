// import { Home } from './pages';

import { Home } from 'pages';
import styles from './app.module.scss';


const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <Home />
    </main>
  );
};

export default App;
