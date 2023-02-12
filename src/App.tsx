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
            <header className="markup__header">header</header>
            <div className="markup__middle_container">
              <main className={cn(
                'markup__main',
                { 'markup__main--fullWidth': !isSBDisplayed },
              )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam iusto veniam. Vero quas similique odio totam velit voluptatem, odit praesentium iste laboriosam qui exercitationem porro obcaecati, deleniti mollitia sunt aut consequuntur placeat corrupti minus aliquam? Inventore fugiat praesentium optio nemo quia error? Odit rerum, natus vitae veritatis doloremque quasi eos eveniet ab quae, saepe, soluta magni in pariatur dignissimos labore molestiae eaque aperiam facilis aut. Tempora quo exercitationem magnam eum suscipit similique consequuntur sed eius nobis, autem animi quia dignissimos incidunt ea unde cumque excepturi odio reprehenderit voluptatibus reiciendis voluptate id cupiditate! Ullam voluptatem asperiores doloribus delectus dolorum accusamus quibusdam tenetur dolorem consequuntur provident reiciendis sunt inventore, ad atque similique tempora rerum veniam nemo non. Autem perspiciatis vero delectus quasi atque aliquid sapiente accusamus! Nisi molestias, corporis, asperiores voluptate eligendi eos necessitatibus quasi sunt beatae soluta fugiat voluptates a suscipit, quam assumenda nesciunt delectus? Minus illum ratione quidem inventore! Rem aperiam quae ullam eveniet. Nulla fuga dolorem eveniet ea hic ut facere dolores voluptates in. Molestiae ullam nam laboriosam? Quia temporibus dolorem non aut sed, dolore aspernatur et iure voluptates eos fugit. Facilis, repellendus totam. Nesciunt aut assumenda impedit, placeat accusamus quam ex sed. Soluta fugit ipsum dolores corporis dignissimos aliquam corrupti facere sed voluptatem sunt perferendis non eos eaque, vitae consectetur quae et amet illum. Perspiciatis quas repellendus neque? Aut ipsa consequatur amet, ab aliquid dolor repudiandae esse cupiditate dignissimos, distinctio nostrum ullam illo. Dolor, veritatis. Aliquam perferendis non at optio, magnam ipsum dolorem corrupti dolor id deleniti nobis quo alias sint porro eius consequatur quisquam sequi accusamus magni? Accusantium dolor laboriosam quibusdam numquam et ipsa vel distinctio architecto fugiat ex? Totam, saepe. Odit magni repudiandae dolores quibusdam voluptate ratione ut est maxime eum nobis itaque ullam voluptates recusandae beatae, doloribus qui ad quos quam dolorum, quia ipsa adipisci. Ipsum, ad veniam non dicta minus sunt a! Assumenda consequatur quidem magnam consectetur vero voluptatibus doloribus praesentium. Excepturi doloremque voluptatum veritatis ab, at tempora quo quas officia eos itaque, non amet quos odit laboriosam ea facilis minus aliquam modi aliquid, eveniet quaerat corporis nesciunt harum! Earum harum quam maxime? Vel sunt minus atque cum excepturi cumque exercitationem, beatae delectus qui optio aliquid sapiente ipsam similique facilis dolorum facere? Non aperiam temporibus soluta doloribus officiis eligendi tenetur enim ea. Inventore accusamus eligendi quidem, nemo a magni ad voluptatum doloribus ratione esse excepturi sunt saepe quod atque unde quisquam adipisci laboriosam fugiat tempore deleniti itaque amet. Optio dolores iusto odit, illo maiores nisi fugiat culpa amet deleniti nesciunt sint voluptatum quos laudantium? Sunt repellat assumenda nulla perspiciatis odit cupiditate nisi laboriosam adipisci. Id ut sapiente qui voluptate assumenda a? Sequi officiis sapiente maxime omnis dolores non aperiam eaque, error incidunt excepturi vitae est minus odit esse debitis, quaerat aut recusandae natus, perferendis accusamus earum dicta iure. Voluptatibus, veniam. Quos eum perspiciatis natus, non rerum, vitae consequuntur eveniet eius repudiandae sint voluptas nisi, dolorum quibusdam debitis neque quod reprehenderit fuga reiciendis! Perspiciatis odio impedit ipsum, quaerat non sit eum laboriosam corporis suscipit esse amet! Exercitationem fugiat, ducimus laborum velit, nisi est similique inventore natus soluta hic error, ab veritatis. Labore, aperiam quam. Repellat illo sint odio vel. Impedit, rem. Placeat ea assumenda cum asperiores sit vel pariatur eaque veniam possimus rem iure illo minima quo dolor exercitationem aliquid velit ipsum est atque nostrum dolore, nemo eveniet qui. Rerum ut suscipit fuga obcaecati reiciendis, sint ducimus dolor cum minima saepe ea ipsum odit ab molestias laboriosam minus voluptate. Recusandae qui aspernatur voluptatum minima fuga odio laudantium voluptatem laboriosam quibusdam blanditiis sunt similique molestias obcaecati ipsam expedita quo omnis nobis, facere iure molestiae dolores cumque. Suscipit, ut. Veniam quaerat nobis provident distinctio dolorum quia eligendi consequuntur nihil qui hic libero, quos eius error architecto optio, exercitationem dolor numquam! Architecto maxime soluta adipisci quae deserunt libero iure, nam necessitatibus temporibus illum pariatur porro vero est fugiat laborum voluptas doloribus amet ad voluptatibus iste numquam iusto. Necessitatibus id deserunt omnis dolores natus eius aperiam iure sequi, quod enim dolore perferendis voluptatem voluptatum. Soluta voluptates architecto repudiandae molestiae maxime quasi odio consectetur tenetur! Ex rerum, voluptatem sunt ipsum id praesentium voluptatum eius quasi, suscipit sit asperiores illo possimus facere nostrum quis ab porro impedit maxime, eveniet provident culpa vel expedita! Beatae sapiente omnis est eligendi quam, earum libero facilis saepe maxime accusamus voluptatibus natus pariatur odit provident dignissimos. Magnam aliquid iste consectetur explicabo, voluptatibus quas inventore? Dolorem soluta provident accusantium debitis deserunt ullam nihil accusamus ipsum. Velit odio repudiandae illo eius aspernatur dolore nobis tempore commodi alias at blanditiis asperiores ipsam tenetur assumenda, adipisci aliquid tempora, reprehenderit consequatur nulla saepe autem libero culpa vel porro! Quaerat rerum, quos, cum id voluptatem doloremque vel placeat eligendi alias, molestias dolore. Reiciendis inventore impedit quam ea, cupiditate nulla aut omnis vel tempore nisi iste, corporis eligendi voluptates. Perspiciatis dignissimos, sed voluptatum at quos nostrum in rem voluptas soluta! Quo dolor, doloribus eius architecto perspiciatis delectus magni consectetur quidem, vero, temporibus facere perferendis qui tenetur iure quae earum mollitia cumque accusantium quisquam voluptas. Deleniti quod tempore molestias laborum quis, quos voluptates fugit ab, fuga reprehenderit vel magni non! Quibusdam ducimus molestias facilis voluptatem illum expedita natus magni, minima quae, enim sed cumque eum nostrum qui nobis officia pariatur? Aspernatur nam pariatur sint, alias temporibus aperiam officia consequatur molestias magni similique harum doloribus quas ipsa officiis deleniti repellendus dolores! Qui asperiores vitae autem magni dolores tenetur sapiente iusto quidem ex, ipsum magnam aperiam nostrum, beatae esse fuga quibusdam expedita voluptas! Maiores ad animi saepe aspernatur veritatis, voluptatibus reiciendis inventore. Voluptates maiores cum nesciunt ab modi eveniet? In rem quos magnam temporibus? Consectetur facere numquam iusto a veniam eum blanditiis labore cumque commodi totam! Recusandae, repellendus deleniti quos inventore consectetur voluptatum labore placeat! Consequuntur, distinctio magni pariatur facilis nihil officia facere provident totam voluptate beatae quisquam, sint deserunt fuga. Autem, maxime fugit? Accusantium doloremque nostrum saepe repudiandae mollitia, rerum laboriosam ipsa error ducimus, expedita odio explicabo, aspernatur dicta? Neque voluptates, molestias accusantium voluptatum molestiae reprehenderit qui, harum laborum vitae earum, asperiores tempore et!
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis numquam iusto veniam. Vero quas similique odio totam velit voluptatem, odit praesentium iste laboriosam qui exercitationem porro obcaecati, deleniti mollitia sunt aut consequuntur placeat corrupti minus aliquam? Inventore fugiat praesentium optio nemo quia error? Odit rerum, natus vitae veritatis doloremque quasi eos eveniet ab quae, saepe, soluta magni in pariatur dignissimos labore molestiae eaque aperiam facilis aut. Tempora quo exercitationem magnam eum suscipit similique consequuntur sed eius nobis, autem animi quia dignissimos incidunt ea unde cumque excepturi odio reprehenderit voluptatibus reiciendis voluptate id cupiditate! Ullam voluptatem asperiores doloribus delectus dolorum accusamus quibusdam tenetur dolorem consequuntur provident reiciendis sunt inventore, ad atque similique tempora rerum veniam nemo non. Autem perspiciatis vero delectus quasi atque aliquid sapiente accusamus! Nisi molestias, corporis, asperiores voluptate eligendi eos necessitatibus quasi sunt beatae soluta fugiat voluptates a suscipit, quam assumenda nesciunt delectus? Minus illum ratione quidem inventore! Rem aperiam quae ullam eveniet. Nulla fuga dolorem eveniet ea hic ut facere dolores voluptates in. Molestiae ullam nam laboriosam? Quia temporibus dolorem non aut sed, dolore aspernatur et iure voluptates eos fugit. Facilis, repellendus totam. Nesciunt aut assumenda impedit, placeat accusamus quam ex sed. Soluta fugit ipsum dolores corporis dignissimos aliquam corrupti facere sed voluptatem sunt perferendis non eos eaque, vitae consectetur quae et amet illum. Perspiciatis quas repellendus neque? Aut ipsa consequatur amet, ab aliquid dolor repudiandae esse cupiditate dignissimos, distinctio nostrum ullam illo. Dolor, veritatis. Aliquam perferendis non at optio, magnam ipsum dolorem corrupti dolor id deleniti nobis quo alias sint porro eius consequatur quisquam sequi accusamus magni? Accusantium dolor laboriosam quibusdam numquam et ipsa vel distinctio architecto fugiat ex? Totam, saepe. Odit magni repudiandae dolores quibusdam voluptate ratione ut est maxime eum nobis itaque ullam voluptates recusandae beatae, doloribus qui ad quos quam dolorum, quia ipsa adipisci. Ipsum, ad veniam non dicta minus sunt a! Assumenda consequatur quidem magnam consectetur vero voluptatibus doloribus praesentium. Excepturi doloremque voluptatum veritatis ab, at tempora quo quas officia eos itaque, non amet quos odit laboriosam ea facilis minus aliquam modi aliquid, eveniet quaerat corporis nesciunt harum! Earum harum quam maxime? Vel sunt minus atque cum excepturi cumque exercitationem, beatae delectus qui optio aliquid sapiente ipsam similique facilis dolorum facere? Non aperiam temporibus soluta doloribus officiis eligendi tenetur enim ea. Inventore accusamus eligendi quidem, nemo a magni ad voluptatum doloribus ratione esse excepturi sunt saepe quod atque unde quisquam adipisci laboriosam fugiat tempore deleniti itaque amet. Optio dolores iusto odit, illo maiores nisi fugiat culpa amet deleniti nesciunt sint voluptatum quos laudantium? Sunt repellat assumenda nulla perspiciatis odit cupiditate nisi laboriosam adipisci. Id ut sapiente qui voluptate assumenda a? Sequi officiis sapiente maxime omnis dolores non aperiam eaque, error incidunt excepturi vitae est minus odit esse debitis, quaerat aut recusandae natus, perferendis accusamus earum dicta iure. Voluptatibus, veniam. Quos eum perspiciatis natus, non rerum, vitae consequuntur eveniet eius repudiandae sint voluptas nisi, dolorum quibusdam debitis neque quod reprehenderit fuga reiciendis! Perspiciatis odio impedit ipsum, quaerat non sit eum laboriosam corporis suscipit esse amet! Exercitationem fugiat, ducimus laborum velit, nisi est similique inventore natus soluta hic error, ab veritatis. Labore, aperiam quam. Repellat illo sint odio vel. Impedit, rem. Placeat ea assumenda cum asperiores sit vel pariatur eaque veniam possimus rem iure illo minima quo dolor exercitationem aliquid velit ipsum est atque nostrum dolore, nemo eveniet qui. Rerum ut suscipit fuga obcaecati reiciendis, sint ducimus dolor cum minima saepe ea ipsum odit ab molestias laboriosam minus voluptate. Recusandae qui aspernatur voluptatum minima fuga odio laudantium voluptatem laboriosam quibusdam blanditiis sunt similique molestias obcaecati ipsam expedita quo omnis nobis, facere iure molestiae dolores cumque. Suscipit, ut. Veniam quaerat nobis provident distinctio dolorum quia eligendi consequuntur nihil qui hic libero, quos eius error architecto optio, exercitationem dolor numquam! Architecto maxime soluta adipisci quae deserunt libero iure, nam necessitatibus temporibus illum pariatur porro vero est fugiat laborum voluptas doloribus amet ad voluptatibus iste numquam iusto. Necessitatibus id deserunt omnis dolores natus eius aperiam iure sequi, quod enim dolore perferendis voluptatem voluptatum. Soluta voluptates architecto repudiandae molestiae maxime quasi odio consectetur tenetur! Ex rerum, voluptatem sunt ipsum id praesentium voluptatum eius quasi, suscipit sit asperiores illo possimus facere nostrum quis ab porro impedit maxime, eveniet provident culpa vel expedita! Beatae sapiente omnis est eligendi quam, earum libero facilis saepe maxime accusamus voluptatibus natus pariatur odit provident dignissimos. Magnam aliquid iste consectetur explicabo, voluptatibus quas inventore? Dolorem soluta provident accusantium debitis deserunt ullam nihil accusamus ipsum. Velit odio repudiandae illo eius aspernatur dolore nobis tempore commodi alias at blanditiis asperiores ipsam tenetur assumenda, adipisci aliquid tempora, reprehenderit consequatur nulla saepe autem libero culpa vel porro! Quaerat rerum, quos, cum id voluptatem doloremque vel placeat eligendi alias, molestias dolore. Reiciendis inventore impedit quam ea, cupiditate nulla aut omnis vel tempore nisi iste, corporis eligendi voluptates. Perspiciatis dignissimos, sed voluptatum at quos nostrum in rem voluptas soluta! Quo dolor, doloribus eius architecto perspiciatis delectus magni consectetur quidem, vero, temporibus facere perferendis qui tenetur iure quae earum mollitia cumque accusantium quisquam voluptas. Deleniti quod tempore molestias laborum quis, quos voluptates fugit ab, fuga reprehenderit vel magni non! Quibusdam ducimus molestias facilis voluptatem illum expedita natus magni, minima quae, enim sed cumque eum nostrum qui nobis officia pariatur? Aspernatur nam pariatur sint, alias temporibus aperiam officia consequatur molestias magni similique harum doloribus quas ipsa officiis deleniti repellendus dolores! Qui asperiores vitae autem magni dolores tenetur sapiente iusto quidem ex, ipsum magnam aperiam nostrum, beatae esse fuga quibusdam expedita voluptas! Maiores ad animi saepe aspernatur veritatis, voluptatibus reiciendis inventore. Voluptates maiores cum nesciunt ab modi eveniet? In rem quos magnam temporibus? Consectetur facere numquam iusto a veniam eum blanditiis labore cumque commodi totam! Recusandae, repellendus deleniti quos inventore consectetur voluptatum labore placeat! Consequuntur, distinctio magni pariatur facilis nihil officia facere provident totam voluptate beatae quisquam, sint deserunt fuga. Autem, maxime fugit? Accusantium doloremque nostrum saepe repudiandae mollitia, rerum laboriosam ipsa error ducimus, expedita odio explicabo, aspernatur dicta? Neque voluptates, molestias accusantium voluptatum molestiae reprehenderit qui, harum laborum vitae earum, asperiores tempore et!
                  </aside>
                </div>
              )}
            </div>
            <footer className="markup__footer">footer</footer>
          </main>
        </div>
      )
  );
};
