import * as React from 'react';

import Button from '@/components/buttons/Button';
import DevelopmentCard from '@/components/cards/DevelopmentCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function DevelopmentCardPage() {
  return (
    <Layout>
      <Seo templateTitle='DevelopmentCard' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Development Card
            </Typography>
            <Typography variant='b2'>
              Show card only in development, or if{' '}
              <code className='break-all'>
                NEXT_PUBLIC_SHOW_DEVELOPMENT_CARD="true"
              </code>{' '}
              is set in deployment
            </Typography>

            <Typography variant='b2' className='mt-4'>
              You might not see anything here
            </Typography>

            <DevelopmentCard className='mt-3 space-y-2'>
              <Typography variant='b3'>
                Some development only content here
              </Typography>
              <Button>Button</Button>
            </DevelopmentCard>
          </div>
        </section>
      </main>
    </Layout>
  );
}
