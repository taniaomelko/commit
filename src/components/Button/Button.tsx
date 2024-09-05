import React from 'react';

type ButtonProps = {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {  
  return (
    <button className="px-20 desktop:px-40 py-6 desktop:py-14 border border-white-milky rounded-full font-darker-grotesque text-18 desktop:text-24 leading-15 font-bold tracking-[0.5px] uppercase transition-colors hover:bg-white-milky hover:text-red">
      {text}
    </button>
  );
};
