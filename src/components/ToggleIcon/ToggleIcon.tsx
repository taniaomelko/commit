import React from 'react';

type ToggleIconProps = {
  isOpen: boolean;
  onClick: () => void;
}

export const ToggleIcon: React.FC<ToggleIconProps> = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="px-4 py-6 inline-block cursor-pointer transition-opacity hover:opacity-70">
    <div className="relative h-22 w-26">
      <div className={`absolute w-full h-[2.7px] rounded top-0 transform transition-all ${isOpen ? 'bg-black-primary top-1/2 -translate-y-1/2 rotate-[40deg]' : 'bg-white'}`}></div>
      <div className={`absolute w-full h-[2.7px] rounded top-1/2 -translate-y-1/2 transform transition-all  ${isOpen ? 'bg-black-primary opacity-0' : 'bg-white'}`}></div>
      <div className={`absolute w-full h-[2.7px] rounded bottom-0 transform transition-all ${isOpen ? 'bg-black-primary bottom-1/2 translate-y-1/2 -rotate-[40deg]' : 'bg-white'}`}></div>
    </div>
  </button>
);

