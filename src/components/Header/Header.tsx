import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { MobileMenuList } from '../MobileMenuList/MobileMenuList';
import { ToggleIcon } from '../ToggleIcon/ToggleIcon';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-70 tablet:pt-38 pb-10">
      <div className="container">
        <div
          ref={headerRef}
          className={`relative z-20 px-4 tablet:px-8 tablet:text-white-milky ${isMenuOpen ? 'text-black-primary' : 'text-white-milky'}`}
        >
          <div className="grid gap-10 grid-cols-5 tablet:grid-cols-3 justify-between items-center tablet:items-start">
            <div className="col-span-1 tablet:col-span-1">
              <div onClick={toggleMenu} className="tablet:hidden">
                <ToggleIcon isOpen={isMenuOpen} onClick={toggleMenu} />
              </div>

              <div className="hidden tablet:block">
                <MobileMenuList />
              </div>
            </div>

            <div className="col-span-3 tablet:col-span-1 justify-self-center">
              <a href="/" className="font-syne text-32 desktop:text-60 leading-11 font-bold tracking-[0.5px] uppercase">
                Commit
              </a>
            </div>

            <div className="col-span-1 tablet:col-span-1 justify-self-end">
              <div className="hidden tablet:block">
                <Button text="Замовити" />
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && <MobileMenu />}
      </div>
    </header>
  );
};
