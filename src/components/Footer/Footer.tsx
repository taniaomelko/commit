import React from 'react';
import { LinkedInIcon, InstagramIcon, FacebookIcon } from '../icons';

const BASE_URL = import.meta.env.BASE_URL;

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
              <p className="font-mustica-pro text-24 leading-13">
                Комітимо мрії в реальність
              </p>
            </div>
          </div>

          <div className="mobile:col-span-1 desktop:col-span-7">
            <h5 className="mb-6 font-transforma-mix text-20 leading-14 font-semibold">
              Адреса
            </h5>
            <div className="font-mustica-pro text-16 leading-17 text-grey">
              <a 
                href="https://maps.app.goo.gl/EfnvJVRAvFpLxd9KA"
                target='_blank'
              >
                Київ, Україна <br />
                ТЦ Мармелад, вул. Борщагівська <br />
                154, офіс / блок 4-5
              </a>
            </div>
          </div>

          <div className="mobile:col-span-1 desktop:col-span-7">
            <h5 className="mb-6 font-transforma-mix text-20 leading-14 font-semibold">
              Телефони
            </h5>
            <div className="font-mustica-pro text-16 leading-17 text-grey">
              <a href="tel:+380980013939">+38 098-001-39-39</a>
              <br />
              <a href="tel:+380980013939">+38 098-001-39-39</a>
              <br />
              <a href="tel:+380980013939">+38 098-001-39-39</a>
            </div>
          </div>

          <div className="mobile:col-span-1 desktop:col-span-7">
            <h5 className="mb-6 font-transforma-mix text-20 leading-14 font-semibold">
              Контакти
            </h5>
            <div className="font-mustica-pro text-16 leading-17 text-grey">
              <a href="mailto:gmail">Email: gmail</a>
              <br />
              <a href="https://t.me/sales" target="_blank">Telegram: sales</a>
              <br />
              <a href="viber://chat?number=%2B1234567890">Viber: sales</a>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-40 border-t border-solid border-grey flex justify-between gap-10">
          <p className="font-dm-sans text-14 leading-14 text-grey">
            Copyright © 2022 BRIX Templates | All Rights Reserved 
          </p>

          <div className="flex gap-22">
            <a href="#" className="text-red transition-colors cursor-pointer hover:text-white">
              <LinkedInIcon />
            </a>
            <a href="#" className="text-red transition-colors cursor-pointer hover:text-white">
              <InstagramIcon />
            </a>
            <a href="#" className="text-red transition-colors cursor-pointer hover:text-white">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
