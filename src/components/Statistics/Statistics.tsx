import React from 'react';
import image1 from '../../assets/img/man.webp';
import image2 from '../../assets/img/keyboard.webp';
import { Tile } from '../Tile/Tile';

type TileData = {
  number: string;
  text: string;
};

const tiles: TileData[] = [
  { number: "1250+", text: "виконаних проектів" },
  { number: "10mln+", text: "рядків коду" },
  { number: "99%", text: "задоволених клієнтів" },
  { number: "85%", text: "зростання бізнесу" },
];

export const Statistics: React.FC = () => {
  return (
    <section className="">
      <div className="container">
        <div className="desktop:px-20 desktop:pb-60 flex flex-col tablet:flex-row-reverse gap-10 laptop:gap-20">
          <div className="tablet:max-w-[33.33%] tablet:w-auto">
            <img className="w-full max-h-300 tablet:max-h-full h-full object-cover object-[0_22%] rounded-medium" src={image1} alt="" />
          </div>

          <div className="flex-grow tablet:w-2/3 grid grid-cols-2 gap-10 laptop:gap-20 pb-20 laptop:pb-0">
            <div className="col-span-2 hidden tablet:block">
              <img className="h-full object-cover rounded-medium" src={image2} alt="" />
            </div>

            {tiles.map((tile) => {
              const { text, number } = tile;
              return (
                <Tile key={String(Symbol(text))} number={number} text={text} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
