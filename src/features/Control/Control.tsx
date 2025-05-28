import { Span } from 'shared/ui';
import { SVGLeftArrow, SVGRightArrow } from 'shared/assets';

import styles from './styles.module.scss';

interface Props {
  currentValue: number;
  maxValue: number;
  changePage: (i: number) => void
}

export const Control: React.FC<Props> = ({ currentValue, maxValue, changePage }) => {

  return (
    <section className={styles.container}>
      <Span>Progress: 0{currentValue} / 0{maxValue}</Span>
      <div className={styles.actions}>
        <button onClick={() => changePage(currentValue - 2)} disabled={currentValue - 1 === 0}>
          <SVGLeftArrow />
        </button>
        <button onClick={() => changePage(currentValue)} disabled={currentValue === maxValue}>
          <SVGRightArrow />
        </button>
      </div>
    </section>
  );
};
