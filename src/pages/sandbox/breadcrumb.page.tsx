import * as React from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function BreadcrumbPage() {
  return (
    <Layout>
      <Seo templateTitle='Breadcrumb' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Breadcrumb
            </Typography>
            <Breadcrumb className='mt-4' crumbs={['/']} />
            <Breadcrumb
              className='mt-4'
              crumbs={['/', '/sandbox/breadcrumb']}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
