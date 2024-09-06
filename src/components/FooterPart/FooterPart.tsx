import React from 'react';

interface FooterPartProps {
  title: string;
  children: React.ReactNode;
}

export const FooterPart: React.FC<FooterPartProps> = ({ title, children }) => {
  return (
    <div className="mobile:col-span-1 desktop:col-span-7">
      <h5 className="mb-6 font-transforma-mix text-20 leading-14 font-semibold">
        {title}
      </h5>
      <div className="font-mustica-pro text-16 leading-17 text-grey">
        {children}
      </div>
    </div>
  );
};
