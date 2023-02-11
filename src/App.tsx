/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './App.scss';

let isSB: undefined | boolean;

export const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSBDisplayed, setIsSBDisplayed] = useState<undefined | boolean>(
    undefined,
  );
  const [isHiding, setIsHiding] = useState<boolean>(false);
  const [isAppearing, setIsAppearing] = useState<boolean>(false);

  const deleteSideBar = () => {
    console.log('deleteSideBar');

    setIsSBDisplayed(false);
    isSB = false;
  };

  const recoverSideBar = () => {
    setIsSBDisplayed(true);
    isSB = true;
  };

  const hideSideBar = () => {
    if (isSB) {
      console.log('hiding now');
      setTimeout(deleteSideBar, 250, false);

      setIsHiding(true);

      // setTimeout(setIsHiding, 250, false);
    }
  };

  const displaySideBar = () => {
    if (!isSB) {
    // setTimeout(setIsSBDisplayed, 250, true);
      recoverSideBar();
      setIsAppearing(true);
      setTimeout(setIsAppearing, 250, false);
    }

    console.log('isAppearing now');
  };

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};

    if (clientWidth) {
      console.log(clientWidth, 'clientWidthResizeHandler2');

      if (clientWidth >= 700) {
        displaySideBar();
      }

      if (clientWidth < 700) {
        hideSideBar();
      }
    }
  };

  // useEffect(() => {
  //   console.log(isSBDisplayed, 'isSBDisplayed');

  //   const { clientWidth } = ref.current || {};

  //   console.log(clientWidth);

  //   if (clientWidth) {
  //     if (clientWidth >= 700) {
  //       displaySideBar();
  //     }

  //     if (clientWidth < 700) {
  //       hideSideBar();
  //     }
  //   }
  // }, [windowSize]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  // useEffect(() => {
  //   resizeHandler();
  // });

  return (
    <div className="app" ref={ref}>
      <main className="app__markup markup">
        <header className="markup__header">header</header>
        <main className="markup__main">
          <section className="markup__section">section</section>
          {
            isSBDisplayed && (
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
            )
          }
        </main>
        <footer className="markup__footer">footer</footer>
      </main>
    </div>
  );
};
