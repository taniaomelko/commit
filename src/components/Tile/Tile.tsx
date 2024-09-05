import React from 'react';

type TileProps = {
  number: string;
  text: string;
}

export const Tile: React.FC<TileProps> = ({ number, text }) => {  
  return (
    <div className="p-20 bg-white-milky rounded-medium">
      <p className="mb-8 font-mustica-pro text-40 laptop:text-68 leading-12 font-semibold text-red">
        {number}
      </p>
      <p className="font-mustica-pro text-20 laptop:text-34 leading-10 font-semibold ">
        {text}
      </p>
    </div>
  );
};
