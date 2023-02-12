/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import './App.scss';

let isSideBarCheck: undefined | boolean;

export const App: React.FC = () => {
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

    if (isSideBarCheck === undefined) {
      deleteSideBar();
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
    if (window.innerWidth >= 700) {
      displaySideBar();
    }

    if (window.innerWidth < 700) {
      hideSideBar();
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
    isSideBarCheck === undefined
      ? null
      : (
        <div className="app">
          <main className="app__markup markup">
            <header className="markup__header"></header>
            <div className="markup__middle_container">
              <main className={cn(
                'markup__main',
                { 'markup__main--fullWidth': !isSBDisplayed },
              )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nemo! At blanditiis, sint suscipit non laboriosam tempore nobis nisi inventore eveniet dolor voluptates provident hic aspernatur accusamus quam quibusdam, et cumque, quod quia totam laudantium officia error eaque neque! In laboriosam soluta facilis totam nesciunt magnam maxime, optio cumque molestiae repudiandae, dicta similique ab, blanditiis cupiditate fugiat. Enim inventore fugit molestiae deserunt doloribus totam fuga. Quibusdam corporis iste repudiandae facilis eaque, consequatur suscipit voluptatem dolor quod, fugiat at nobis deleniti odit aut voluptates assumenda similique ducimus nam unde rerum temporibus? Voluptatem explicabo officia optio unde adipisci ipsa officiis laboriosam amet perspiciatis, obcaecati, tempora laborum nam tenetur aperiam ex iusto rerum ratione. Repellat atque iste similique officia aliquid maiores necessitatibus, impedit inventore obcaecati, ut ea rem perspiciatis libero animi, repudiandae eum sint. Excepturi rem harum possimus veniam atque cum tenetur illo eum, delectus cupiditate nesciunt voluptatibus dignissimos iusto est blanditiis ut consequuntur libero deserunt! Modi eos placeat reiciendis neque error tenetur aliquid pariatur aut aspernatur quisquam quo eius impedit ab enim debitis provident eum eligendi similique molestiae quod cum deserunt, dignissimos perspiciatis. Ut sint quam vero quibusdam! Nobis delectus reprehenderit hic sed deleniti nihil quis consequatur fugit dolor cum, quod, a veniam? Magni doloremque, dicta error doloribus ducimus nulla est nostrum nobis harum velit id pariatur alias voluptatem, vitae nemo, perspiciatis similique iure dolorum laborum esse quaerat placeat incidunt eveniet quidem? Voluptatem amet ipsum quis laborum qui voluptas repudiandae quibusdam nulla numquam consectetur expedita sit odio debitis, libero distinctio natus ex aperiam minus aut. Sunt est, delectus optio dolore iusto placeat quis at inventore fugit in rem non sapiente ullam sint laudantium modi eveniet aperiam cum rerum excepturi totam? Asperiores facere deserunt similique culpa nam fugiat earum repellendus labore, sunt obcaecati, consequatur ex tenetur architecto aliquam ut praesentium natus. Excepturi non commodi recusandae nemo! Sed distinctio mollitia voluptas illum unde deleniti voluptates doloremque ipsa! Neque ipsum nostrum corporis vel modi consequuntur rerum laborum enim beatae, explicabo esse necessitatibus consectetur molestias labore soluta temporibus praesentium! Rem modi, ad dicta eos perspiciatis sunt assumenda doloribus adipisci ab velit in corrupti libero, delectus mollitia, est sequi illo eligendi repellat corporis maxime excepturi. Praesentium incidunt maiores quisquam rerum. Iste, reprehenderit saepe explicabo rem consequatur ex, doloribus eos debitis fuga quasi nam quaerat voluptate perferendis porro ad dolorem atque neque. Corrupti debitis suscipit quaerat, expedita accusamus sint reprehenderit fugit, quidem dicta molestiae nulla, quas ex facilis aspernatur similique veritatis minus aliquam ducimus laudantium minima pariatur. Reiciendis fuga porro corporis neque architecto, deserunt, quas dolore dolores accusantium beatae ea quaerat dignissimos eum consectetur fugit odit unde perferendis sequi ducimus. Culpa accusamus illo ipsa cumque unde deleniti, itaque tempore ab nulla quis! Facilis placeat nam aut necessitatibus in dolores laudantium dolorum, corporis odit tempora hic cupiditate temporibus dignissimos tempore officia dolorem nisi esse veritatis explicabo, deserunt, cumque recusandae ea consectetur! Ipsum ducimus debitis, velit tempora obcaecati similique assumenda nobis quis provident, fuga ut odit? Veritatis dolor quasi at quam commodi fuga! Corrupti, quidem? Alias, voluptatem similique maxime debitis doloremque deleniti rerum harum, voluptate animi eius nobis cupiditate quidem earum nihil? Corporis perferendis laudantium, blanditiis eligendi quidem, voluptas unde harum pariatur in voluptatem accusamus, ea neque dicta sint beatae. Soluta quam architecto accusantium incidunt delectus ipsum quasi dolore quae. Mollitia, similique nisi cupiditate eaque, doloremque natus magnam, maxime totam facere iure suscipit! Deleniti inventore ducimus eveniet. Porro eos quia iusto dolorem, nam odit ea, atque assumenda soluta recusandae officiis ullam error voluptate molestiae sunt, veniam amet. Dolorem consequuntur dignissimos accusamus eum eius sed, ut ad voluptas error fugiat? Autem similique necessitatibus corrupti hic fugit iusto ad? Odit culpa minima omnis enim provident hic nihil quasi cupiditate ipsa quae mollitia corrupti itaque, officia pariatur expedita beatae eum, sed, quas exercitationem. Recusandae corrupti ut quisquam, vitae ex quaerat fugit reiciendis quo voluptatem in vero, eius deserunt consequuntur doloribus cupiditate, dolorum odit reprehenderit dicta praesentium quidem ipsam. Atque consequuntur quo tempore odit illum non consequatur aliquam libero hic soluta, unde, repellat delectus officiis molestias facere doloribus laborum veniam? Tenetur, adipisci magnam autem velit earum in eligendi, nostrum sequi at totam labore doloremque illum mollitia soluta nulla! Commodi nihil recusandae dolore asperiores maiores consectetur suscipit! Voluptatibus architecto dicta provident expedita nesciunt omnis deleniti ducimus veniam dolores amet rerum perspiciatis quae dignissimos laudantium adipisci officia quod sint enim fugit rem iure blanditiis repellendus, et qui. Fugit harum saepe sunt? Eligendi, alias minima? Eos nihil non amet, voluptatibus quaerat at inventore esse minus ullam provident dolorum id culpa veniam sint temporibus corporis iusto? Veritatis asperiores sint id, nobis iusto eius, ipsum impedit dignissimos, voluptatibus quo est. Necessitatibus iusto voluptates minus! Quos iusto fugit non ab similique! Obcaecati illo esse itaque deserunt voluptate totam quas adipisci repellat, excepturi minus doloribus harum nam aliquam deleniti doloremque! Architecto, tenetur alias numquam id, aperiam animi quo deserunt vitae vel sequi, voluptates ipsa earum saepe deleniti aliquam ullam distinctio a at praesentium harum est illum exercitationem expedita laudantium! Corporis, fugit a laboriosam expedita eveniet asperiores incidunt hic quas nobis voluptatem laborum minus ipsum, fugiat labore sit dicta dolore dignissimos aliquam molestias ratione repudiandae inventore iusto. Vero culpa odit voluptates est quos amet unde! Ut laborum, eius facilis aliquam minus repellendus dolorum impedit, ducimus nam fugit vel qui maiores adipisci mollitia, accusamus sit nesciunt aut atque inventore molestiae est quod non beatae. Id sed itaque nostrum fugit, accusantium quisquam dolorum laboriosam veritatis aliquid dolor eveniet facere at eaque incidunt corporis laudantium sapiente ex, officiis harum ducimus vel ullam, possimus quibusdam. Sit explicabo voluptatem perferendis aut, veniam deleniti ratione impedit est voluptate reiciendis dolorem omnis numquam ullam architecto nam, soluta hic. Dolorum quod omnis dolorem numquam, eos et ullam! Quos, consequuntur. Error nemo soluta similique doloribus cumque ad voluptate deleniti distinctio adipisci dolor ipsam nesciunt tenetur sit obcaecati debitis officia eos quod officiis a perspiciatis tempore ex, et porro cupiditate. Amet, nisi quas? Id fuga harum, laborum iste sapiente libero, expedita recusandae hic incidunt excepturi veniam. Cupiditate commodi corrupti aperiam ex quibusdam, laborum voluptatem aliquid sint, aliquam dolore nihil cumque temporibus alias.
              </main>
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
            </div>
            <footer className="markup__footer"></footer>
          </main>
        </div>
      )
  );
};
