import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="p-10 laptop:p-20">
      <div className="py-60 laptop:pb-40 min-h-[740px] desktop:min-h-[920px] flex flex-col justify-end bg-[url('/src/assets/img/banner-mobile.webp')] tablet:bg-[url('/src/assets/img/banner-desktop.webp')] bg-cover bg-center bg-no-repeat rounded-big text-white-milky">
        <div className="container">
          <h1 className="font-transforma-mix text-48 desktop:text-120 leading-10 font-semibold">
            Сайти, що втілюють ваші ідеї
          </h1>
          <div className="mt-24 desktop:mt-28 laptop:w-3/4">
            <h3 className="font-mustica-pro text-22 desktop:text-40 leading-125 desktop:leading-12 font-semibold">
              Ми спеціалізуємося на розробці, що поєднує передові технології та експертизи
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
