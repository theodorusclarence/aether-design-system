import * as React from 'react';

import MacCard from '@/components/cards/MacCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function MacCardPage() {
  return (
    <Layout>
      <Seo templateTitle='MacCard' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <MacCard className='mt-8'>
              <div className='flex flex-col gap-2'>
                <div className='rounded-lg bg-white p-3'>
                  <Typography variant='b2'>Hello</Typography>
                </div>
                <div className='rounded-lg bg-white p-3'>
                  <Typography variant='s2' font='averta'>
                    Telepon Langsung
                  </Typography>
                  <Typography variant='b2' color='tertiary' font='averta'>
                    Hello
                  </Typography>
                </div>
              </div>
            </MacCard>

            <MacCard>
              <Typography variant='b2'>Hello</Typography>
            </MacCard>

            <div className='mt-4 bg-light p-4'>
              <Typography as='h2' variant='h2'>
                Light Mode
              </Typography>
              <MacCard mode='light' className='mt-3'>
                <Typography variant='b2'>Hello</Typography>
              </MacCard>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
