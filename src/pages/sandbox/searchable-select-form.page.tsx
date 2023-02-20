import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import ServerSelectInput from '@/components/forms/ServerSelectInput';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * This is typed incorrectly for the sake of sandbox purpose
 * If you need a boilerplate for a new RHF page,
 * please take a reference for React Hook Form Layout on
 * @see /components/forms/boilerplate.tsx
 */

export default function FormSandbox() {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit = (data: unknown) => {
    logger({ data }, 'rhf.tsx line 33');

    // !STARTERCONF Remove console log, use logger instead
    // eslint-disable-next-line no-console
    console.log({ data });
    return;
  };
  //#endregion  //*======== Form Submit ===========

  return (
    <Layout>
      <Seo templateTitle='Form Sandbox' />

      <section className=''>
        <div className='layout min-h-screen py-20'>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='max-w-sm space-y-3'
            >
              <ServerSelectInput
                route='/select-options'
                id='select'
                label='Server Select Input'
                helperText='Data fetched from the server for about 2 seconds'
                placeholder='Select something'
                validation={{ required: 'Select Input must be filled' }}
              />

              <div className='flex flex-wrap gap-4'>
                <Button type='submit'>Submit</Button>
              </div>
              <p className='text-sm text-gray-800'>
                Check console after submit
              </p>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
