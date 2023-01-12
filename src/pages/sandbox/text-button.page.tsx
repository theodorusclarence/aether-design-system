import * as React from 'react';

import TextButton from '@/components/buttons/TextButton';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TextButtonPage() {
  return (
    <Layout>
      <Seo templateTitle='Text Link & Button' />
      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Text Link & Button
            </Typography>
            <div className='mt-4 space-y-8'>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Primary
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='primary'>Button</TextButton>
                  <TextButton variant='primary' size='sm'>
                    Button
                  </TextButton>
                  <PrimaryLink href='/' variant='primary'>
                    Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='primary' size='sm'>
                    Link
                  </PrimaryLink>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='primary' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='primary' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Secondary
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='secondary'>Button</TextButton>
                  <TextButton variant='secondary' size='sm'>
                    Button
                  </TextButton>
                  <PrimaryLink href='/' variant='secondary'>
                    Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='secondary' size='sm'>
                    Link
                  </PrimaryLink>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='secondary' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='secondary' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Basic
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='basic'>Button</TextButton>
                  <TextButton variant='basic' size='sm'>
                    Button
                  </TextButton>
                  <PrimaryLink href='/' variant='basic'>
                    Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='basic' size='sm'>
                    Link
                  </PrimaryLink>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='basic' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='basic' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <Typography as='h2' variant='h2'>
                  Danger
                </Typography>
                <div className='flex gap-x-4'>
                  <TextButton variant='danger'>Button</TextButton>
                  <TextButton variant='danger' size='sm'>
                    Button
                  </TextButton>
                  <PrimaryLink href='/' variant='danger'>
                    Link
                  </PrimaryLink>
                  <PrimaryLink href='/' variant='danger' size='sm'>
                    Link
                  </PrimaryLink>
                </div>
                <div className='flex gap-x-4'>
                  <TextButton variant='danger' disabled={true}>
                    Button
                  </TextButton>
                  <TextButton variant='danger' size='sm' disabled={true}>
                    Button
                  </TextButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
