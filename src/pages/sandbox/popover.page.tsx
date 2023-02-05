import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import ExamplePopover from '@/pages/sandbox/components/ExamplePopover';

export default function PopoverPage() {
  return (
    <Layout>
      <Seo templateTitle='Popover' />

      <main>
        <section className=''>
          <div className='layout grid min-h-screen place-items-center py-20'>
            <ExamplePopover />
          </div>
        </section>
      </main>
    </Layout>
  );
}
