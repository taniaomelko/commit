import React from 'react';
import { FooterPart } from '../FooterPart/FooterPart';
import { Socials } from '../Socials/Socials';

const BASE_URL = import.meta.env.BASE_URL;

const phoneNumbers = [
  { number: '+38 098-001-39-39' },
  { number: '+38 098-001-39-39' },
  { number: '+38 098-001-39-39' },
];

const contacts = [
  { label: 'Email', href: 'mailto:gmail', text: 'gmail' },
  { label: 'Telegram', href: 'https://t.me/sales', text: 'sales', isExternal: true },
  { label: 'Viber', href: 'viber://chat?number=%2B1234567890', text: 'sales' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 tablet:py-60 laptop:px-80 bg-black-primary text-white">
      <div className="container">
        <div className="grid gap-40 mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-[repeat(30,_minmax(0,_1fr))]">
          <div className="mobile:col-span-2 tablet:col-span-3 desktop:col-span-9">
            <div className="flex flex-col gap-40 justify-between h-full">
              <a href={BASE_URL} className="font-syne text-[33.15px] leading-125 font-bold tracking-[0.28px] uppercase text-white-milky">
                Commit
              </a>
              <p className="font-mustica-pro text-24 leading-13 font-semibold">
                Комітимо мрії в реальність
              </p>
            </div>
          </div>

          <FooterPart title="Адреса">
            <a 
              href="https://maps.app.goo.gl/EfnvJVRAvFpLxd9KA"
              target='_blank'
            >
              Київ, Україна <br />
              ТЦ Мармелад, вул. Борщагівська <br />
              154, офіс / блок 4-5
            </a>
          </FooterPart>

          <FooterPart title="Телефони">
            {phoneNumbers.map(({ number }) => (
              <div key={String(Symbol(number))}>
                <a href={`tel:${number}`}>
                  {number}
                </a>
              </div>
            ))}
          </FooterPart>

          <FooterPart title="Контакти">
            {contacts.map(({ label, href, text, isExternal }) => (
              <div key={String(Symbol(text))}>
                <a
                  href={href}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : ''}
                >
                  {`${label}: ${text}`}
                </a>
              </div>
            ))}
          </FooterPart>
        </div>

        <div className="mt-40 pt-40 border-t border-solid border-grey flex justify-between gap-10">
          <p className="font-dm-sans text-14 leading-14 text-grey">
            Copyright © 2022 BRIX Templates | All Rights Reserved 
          </p>

          <Socials />
        </div>
      </div>
    </footer>
  );
};
