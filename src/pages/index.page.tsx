import * as React from 'react';
import { GiExplosionRays } from 'react-icons/gi';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <GiExplosionRays className='text-6xl text-yellow-400' />

            <Typography as='h1' variant='j1' className='mt-2'>
              Aether Design System
            </Typography>
            <Typography variant='b3' color='tertiary'>
              Inspired by{' '}
              <UnderlineLink href='https://moon.io'>moon.io</UnderlineLink>,
              adjusted to our needs
            </Typography>
            <Typography variant='b3' className='mt-6' color='secondary'>
              <ArrowLink href='https://github.com/theodorusclarence/aether-design-system'>
                See the repository
              </ArrowLink>
            </Typography>

            <div className='mt-6'>
              <Typography as='h2' variant='h6'>
                Sandbox:
              </Typography>
              <div className='mt-2 flex flex-wrap justify-center gap-2'>
                {sandbox.map(({ title, route }) => (
                  <ButtonLink key={route} href={route} variant='outline'>
                    {title}
                  </ButtonLink>
                ))}
              </div>
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=aether-design-system'>
                Clarence
              </UnderlineLink>
              {', '}
              <UnderlineLink href='https://rizqitsani.com?ref=aether-design-system'>
                Rizqi
              </UnderlineLink>
              {', '}
              <UnderlineLink href='https://github.com/winatungmiharja?ref=aether-design-system'>
                Wina
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Typography',
    route: '/sandbox/typography',
  },
  {
    title: 'Colors',
    route: '/sandbox/colors',
  },
  {
    title: 'Form',
    route: '/sandbox/form',
  },
  {
    title: 'Searchable Select Form',
    route: '/sandbox/searchable-select-form',
  },
  {
    title: 'Text Link & Button',
    route: '/sandbox/text-button',
  },
  {
    title: 'Button',
    route: '/sandbox/button',
  },
  {
    title: 'Breadcrumb',
    route: '/sandbox/breadcrumb',
  },
  {
    title: 'Icon Button',
    route: '/sandbox/icon-button',
  },
  {
    title: 'React Query & Toast',
    route: '/sandbox/toast-rq',
  },
  {
    title: 'Modal',
    route: '/sandbox/modal',
  },
  {
    title: 'Dialog',
    route: '/sandbox/dialog',
  },
  {
    title: 'Table',
    route: '/sandbox/table',
  },
  {
    title: 'Tooltip',
    route: '/sandbox/tooltip',
  },
  {
    title: 'Mac Card',
    route: '/sandbox/mac-cards',
  },
  {
    title: 'Popover',
    route: '/sandbox/popover',
  },
  {
    title: 'Banner',
    route: '/sandbox/banner',
  },
  {
    title: 'Alert',
    route: '/sandbox/alert',
  },
  {
    title: 'Typography Alert',
    route: '/sandbox/typography-alert',
  },
  {
    title: 'Tag',
    route: '/sandbox/tag',
  },
  {
    title: 'Card',
    route: '/sandbox/card',
  },
  {
    title: 'Development Card',
    route: '/sandbox/development-card',
  },
  {
    title: 'Statistics Card',
    route: '/sandbox/statistics-card',
  },
];
//#endregion  //*======== Sandbox ===========
