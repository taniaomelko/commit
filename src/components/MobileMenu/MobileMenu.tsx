import React from 'react';
import { MobileMenuList } from '../MobileMenuList/MobileMenuList';

interface MobileMenuProps {
  onLinkClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onLinkClick }) => {
  return (
    <div className="absolute tablet:relative top-0 left-0 right-0 z-10 m-10 bg-white tablet:bg-transparent border-4 tablet:border-none rounded-big border-black drop-shadow-small">
      <nav className="mt-[120px] tablet:mt-0 px-20 py-60 tablet:p-0">
        <MobileMenuList onLinkClick={onLinkClick} />
      </nav>
    </div>
  );
};
