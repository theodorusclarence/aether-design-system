import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import ExampleModal from '@/pages/sandbox/components/ExampleModal';

export default function ModalPage() {
  return (
    <Layout>
      <Seo templateTitle='Modal' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <ExampleModal>
              {({ openModal }) => (
                <Button onClick={openModal}>Open Modal</Button>
              )}
            </ExampleModal>
          </div>
        </section>
      </main>
    </Layout>
  );
}
