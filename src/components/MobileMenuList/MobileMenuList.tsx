import React from 'react';

const menuItems = [
  { label: 'Про нас', href: '#' },
  { label: 'Кейси', href: '#' },
  { label: 'Контакти', href: '#' },
];

interface MobileMenuListProps {
  onLinkClick: () => void;
}

export const MobileMenuList: React.FC<MobileMenuListProps> = ({ onLinkClick }) => {
  return (
    <ul className="space-y-24">
      {menuItems.map((item) => {
        const { href, label } = item;
        return (
        <li key={String(Symbol(label))}>
          <a 
            href={href} 
            className="font-darker-grotesque text-24 leading-11 font-semibold tracking-[0.5px] uppercase text-black-primary/60 hover:text-black-primary tablet:text-white-milky/60 tablet:hover:text-white-milky"
            onClick={onLinkClick}
          >
            {label}
          </a>
        </li>
      )})}
    </ul>
  );
};
