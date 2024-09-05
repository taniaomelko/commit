import React from 'react';

type SlideProps = {
  image: string;
  title: string;
  list: string[];
}

export const Slide: React.FC<SlideProps> = ({ image, title, list}) => {  
  return (
    <div className="relative h-full bg-dark-red rounded-medium text-white-milky
      before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/20 before:rounded-medium
    ">
      <div className="relative z-10">
        <img className="w-full aspect-square laptop:aspect-[2.25] object-cover object-center rounded-t-medium" src={new URL(`../../assets/img/${image}`, import.meta.url).href} alt="" />

        <div className="px-20 py-24 laptop:p-40">
          <div className="">
            <h4 className="font-mustica-pro text-40 laptop:text-64 leading-12 font-semibold">
              {title}
            </h4>

            {list.length > 0 && (
              <ul className="mt-20 laptop:mt-24 space-y-8">
                {list.map((item) => (
                  <li 
                    key={String(Symbol(item))}
                    className="tablet:mr-20 flex items-center gap-12 tablet:inline-flex font-darker-grotesque text-20 laptop:text-30 leading-11 font-medium"
                  >
                    <div className="w-10 h-10 bg-white-milky rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
