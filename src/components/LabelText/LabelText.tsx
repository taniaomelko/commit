import React from 'react';
import { ChevronIcon } from '../icons';

type LabelTextProps = {
  wideTitle: boolean;
  label: string;
  title: string;
  description: string;
}

export const LabelText: React.FC<LabelTextProps> = ({ wideTitle, label, title, description }) => {  
  return (
    <section className="pt-60 pb-24 laptop:py-80">
      <div className="container">
        <div className="laptop:px-20 flex flex-col laptop:flex-row gap-24 laptop:gap-80 items-start tablet:w-5/5 laptop:w-full">
          <div className="laptop:w-[1/13] flex-shrink-0 flex items-center gap-24 text-red">
            <ChevronIcon className="flex-shrink-0" />
            <p className="font-transforma-mix text-24 leading-15 font-semibold --tracking-[0.5px] uppercase">
              {label}
            </p>
          </div>

          <div className={wideTitle ? 'laptop:w-[calc(100%_*_7_/_13)]' : 'laptop:w-[calc(100%_*_5_/_13)]'}>
            <h3 className="font-mustica-pro text-28 desktop:text-48 leading-10 font-bold">
              {title}
            </h3>
          </div>

          <div className={wideTitle ? 'laptop:w-[calc(100%_*_5_/_13)]' : 'laptop:w-[calc(100%_*_7_/_13)]'}>
            <p className="font-darker-grotesque text-16 desktop:text-20 leading-14 font-medium text-grey">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
