/* eslint-disable no-console */
import * as React from 'react';

import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function DialogPage() {
  const dialog = useDialog();

  const openSuccess = () => {
    dialog({
      title: 'Success title',
      description: 'Success description whatever you want',
      submitText: 'Hurray',
      variant: 'success',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openWarning = () => {
    dialog({
      title: 'Warning title !!!',
      description: 'Warning description whatever you want',
      submitText: 'Sure',
      variant: 'warning',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };
  const openDanger = () => {
    dialog({
      title: "Danger action! Don't do it",
      description: 'Danger description, are you sure?',
      submitText: 'Do it',
      variant: 'danger',
      catchOnCancel: true,
    })
      .then(() => console.log('accept'))
      .catch(() => console.log('reject'));
  };

  return (
    <Layout>
      <Seo templateTitle='Dialog' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='flex flex-col items-start space-y-3'>
              <Button onClick={openSuccess}>Success Alert</Button>
              <Button onClick={openWarning}>Warning Alert</Button>
              <Button onClick={openDanger}>Danger Alert</Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
