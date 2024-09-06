import React from 'react';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '../icons';

const socialsLinks = [
  { href: '#', icon: <LinkedInIcon /> },
  { href: '#', icon: <InstagramIcon /> },
  { href: '#', icon: <FacebookIcon /> },
];

export const Socials: React.FC = () => {
  return (
    <div className="flex gap-22">
      {socialsLinks.map((link) => {
        const { href, icon } = link;
        return (
          <a 
            key={String(Symbol(href))} 
            href={href} 
            className="text-red transition-colors cursor-pointer hover:text-white"
          >
            {icon}
          </a>
        )
      })}
    </div>
  );
};
