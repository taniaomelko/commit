import React from 'react';

export const MobileMenuList: React.FC = () => {
  return (
    <ul className="space-y-24">
      <li className="">
        <a href="/" className="font-darker-grotesque text-24 leading-11 font-semibold tracking-[0.5px] uppercase text-black-primary/60 hover:text-black-primary tablet:text-white-milky/60 tablet:hover:text-white-milky">
          Про нас
        </a>
      </li>
      <li className="">
        <a href="/" className="font-darker-grotesque text-24 leading-11 font-semibold tracking-[0.5px] uppercase text-black-primary/60 hover:text-black-primary tablet:text-white-milky/60 tablet:hover:text-white-milky">
          Кейси
        </a>
      </li>
      <li className="">
        <a href="/" className="font-darker-grotesque text-24 leading-11 font-semibold tracking-[0.5px] uppercase text-black-primary/60 hover:text-black-primary tablet:text-white-milky/60 tablet:hover:text-white-milky">
          Контакти
        </a>
      </li>
    </ul>
  );
};
