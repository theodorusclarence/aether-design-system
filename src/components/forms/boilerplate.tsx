import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type BoilerplateForm = {
  name: string;
};

export default function FormBoilerplate() {
  //#region  //*=========== Form ===========
  const methods = useForm<BoilerplateForm>({
    mode: 'onTouched',
  });
  const { handleSubmit } = methods;
  //#endregion  //*======== Form ===========

  //#region  //*=========== Form Submit ===========
  const onSubmit: SubmitHandler<BoilerplateForm> = (data) => {
    logger({ data });

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
              <Input
                id='name'
                label='Nama'
                validation={{ required: 'Nama harus diisi' }}
                placeholder='Masukkan nama'
                helperText='This is a helper text'
              />

              <Button type='submit'>Submit</Button>
            </form>
          </FormProvider>
        </div>
      </section>
    </Layout>
  );
}
