import React from 'react';

type ToggleIconProps = {
  isOpen: boolean;
  onClick: () => void;
}

export const ToggleIcon: React.FC<ToggleIconProps> = ({ isOpen, onClick }) => (
  <div onClick={onClick} className="relative h-[24px] cursor-pointer">
    <div className={`absolute w-[26px] h-[2px] rounded top-0 transform transition-all ${isOpen ? 'bg-black-primary top-1/2 -translate-y-1/2 rotate-[40deg]' : 'bg-white'}`}></div>
    <div className={`absolute w-[26px] h-[2px] rounded top-1/2 -translate-y-1/2 transform transition-all  ${isOpen ? 'bg-black-primary opacity-0' : 'bg-white'}`}></div>
    <div className={`absolute w-[26px] h-[2px] rounded bottom-0 transform transition-all ${isOpen ? 'bg-black-primary bottom-1/2 translate-y-1/2 -rotate-[40deg]' : 'bg-white'}`}></div>
  </div>
);

