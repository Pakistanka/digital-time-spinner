import React, { useState } from 'react';
import gsap from 'gsap';

import { Control, Dates } from 'features';
import { Header, Slider } from 'widgets';
import { MOCK_DATA } from 'shared/constants';
import { IPage } from 'shared/types';
import { HR } from 'shared/ui';

import styles from './styles.module.scss';

export const Home: React.FC = () => {
  const defaultIndex = MOCK_DATA.findIndex(page => page.id === 6);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(defaultIndex >= 0 ? defaultIndex : 0);

  const currentPage: IPage = MOCK_DATA[currentPageIndex] ?? MOCK_DATA[0];

  const handleChangePage = (i: number) => {
    const index = i > 0 && i < MOCK_DATA.length ? i : 0;

    gsap.to('#time_spinner', {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setCurrentPageIndex(index);
        gsap.to('#time_spinner', {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Dates
          totalValues={MOCK_DATA.length}
          startDate={currentPage.startDate}
          endDate={currentPage.endDate}
          name={currentPage.name}
          activePage={currentPage.id}
          changePage={handleChangePage}
        />

        <div className={styles.controlContainer}>
          <Control currentValue={currentPage.id} maxValue={MOCK_DATA.length} changePage={handleChangePage} />
          <Slider slides={currentPage.items} />
        </div>
      </div>

      <HR className={styles.borderX} />
      <HR className={styles.borderY} />
    </div>
  );
};
