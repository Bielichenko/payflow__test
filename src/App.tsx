/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './App.scss';

let isSideBarCheck: undefined | boolean;

export const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSBDisplayed, setIsSBDisplayed] = useState<undefined | boolean>(undefined);
  const [isHiding, setIsHiding] = useState<boolean>(false);
  const [isAppearing, setIsAppearing] = useState<boolean>(false);

  const deleteSideBar = () => {
    setIsSBDisplayed(false);
    isSideBarCheck = false;
  };

  const recoverSideBar = () => {
    setIsSBDisplayed(true);
    isSideBarCheck = true;
  };

  const hideSideBar = () => {
    if (isSideBarCheck) {
      setTimeout(deleteSideBar, 250, false);
      setIsHiding(true);
      setTimeout(setIsHiding, 250, false);
    }
  };

  const displaySideBar = () => {
    if (isSideBarCheck === false) {
      recoverSideBar();
      setIsAppearing(true);
      setTimeout(setIsAppearing, 250, false);
    }

    if (isSideBarCheck === undefined) {
      recoverSideBar();
    }
  };

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};

    if (clientWidth) {
      if (clientWidth >= 700) {
        displaySideBar();
      }

      if (clientWidth < 700) {
        hideSideBar();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="app" ref={ref}>
      <main className="app__markup markup">
        <header className="markup__header"></header>
        <main className="markup__main">
          <section className="markup__section">
          </section>
          {isSBDisplayed && (
            <div className={cn(
              'markup__sidebar_container',
              {
                'markup__sidebar_container--hiding': isHiding,
                'markup__sidebar_container--appearing': isAppearing,
              },
            )}
            >
              <aside className="markup__sidebar">
              </aside>
            </div>
          )}
        </main>
        <footer className="markup__footer"></footer>
      </main>
    </div>
  );
};
