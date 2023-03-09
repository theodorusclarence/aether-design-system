import * as React from 'react';

import Alert from '@/components/alert/Alert';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function AlertPage() {
  return (
    <Layout>
      <Seo templateTitle='Alert' />

      <main>
        <section className=''>
          <div className='layout min-h-screen space-y-4 py-20'>
            <Alert>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              velit.
            </Alert>
            <Alert variant='secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              velit.
            </Alert>
            <Alert variant='danger'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              velit.
            </Alert>
            <Alert variant='warning'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              velit.
            </Alert>
            <Alert variant='success'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              maiores pariatur eaque laboriosam voluptates est cum repudiandae
              facilis ipsam doloribus porro, dolore fugit officiis sequi neque
              possimus. Ipsa, expedita possimus!
            </Alert>
          </div>
        </section>
      </main>
    </Layout>
  );
}
