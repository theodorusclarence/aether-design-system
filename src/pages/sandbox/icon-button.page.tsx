import { ArrowLeft, Eye, Pencil, Plus, Save, Trash2 } from 'lucide-react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import IconButton from '@/components/buttons/IconButton';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import IconLink from '@/components/links/IconLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function IconButtonPage() {
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
      <Seo templateTitle='Icon Button' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Form
            </Typography>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex max-w-sm items-end space-x-2'
              >
                <Input
                  id='name'
                  label='Name'
                  validation={{ required: 'Name must be filled' }}
                  placeholder='Enter your name'
                  hideError
                />
                <IconButton variant='primary' icon={Save} />
              </form>
            </FormProvider>

            <div className='mt-8 flex flex-wrap gap-4'>
              <div>
                <Typography as='h2' variant='h2'>
                  Primary
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='primary' size='lg' icon={Plus} />
                  <IconButton variant='primary' icon={Eye} />
                  <IconButton variant='primary' size='sm' icon={Pencil} />
                  <IconButton variant='primary' size='xs' icon={Plus} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='primary'
                    disabled
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='primary' disabled icon={Eye} />
                  <IconButton
                    variant='primary'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                  <IconButton
                    variant='primary'
                    disabled
                    size='xs'
                    icon={Plus}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='primary'
                    isLoading
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='primary' isLoading icon={Eye} />
                  <IconButton
                    variant='primary'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                  <IconButton
                    variant='primary'
                    isLoading
                    size='xs'
                    icon={Plus}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Secondary
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='secondary' size='lg' icon={Plus} />
                  <IconButton variant='secondary' icon={Eye} />
                  <IconButton variant='secondary' size='sm' icon={Pencil} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='secondary'
                    disabled
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='secondary' disabled icon={Eye} />
                  <IconButton
                    variant='secondary'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='secondary'
                    isLoading
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='secondary' isLoading icon={Eye} />
                  <IconButton
                    variant='secondary'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Danger
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='danger' size='lg' icon={Plus} />
                  <IconButton variant='danger' icon={Eye} />
                  <IconButton variant='danger' size='sm' icon={Pencil} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='danger' disabled size='lg' icon={Plus} />
                  <IconButton variant='danger' disabled icon={Eye} />
                  <IconButton
                    variant='danger'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='danger'
                    isLoading
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='danger' isLoading icon={Eye} />
                  <IconButton
                    variant='danger'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Outline
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='outline' size='lg' icon={Plus} />
                  <IconButton variant='outline' icon={Eye} />
                  <IconButton variant='outline' size='sm' icon={Pencil} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='outline'
                    disabled
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='outline' disabled icon={Eye} />
                  <IconButton
                    variant='outline'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='outline'
                    isLoading
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='outline' isLoading icon={Eye} />
                  <IconButton
                    variant='outline'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Warning
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='warning' size='lg' icon={Plus} />
                  <IconButton variant='warning' icon={Eye} />
                  <IconButton variant='warning' size='sm' icon={Pencil} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='warning'
                    disabled
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='warning' disabled icon={Eye} />
                  <IconButton
                    variant='warning'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton
                    variant='warning'
                    isLoading
                    size='lg'
                    icon={Plus}
                  />
                  <IconButton variant='warning' isLoading icon={Eye} />
                  <IconButton
                    variant='warning'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                </div>
              </div>

              <div>
                <Typography as='h2' variant='h2'>
                  Ghost
                </Typography>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='ghost' size='lg' icon={Plus} />
                  <IconButton variant='ghost' icon={Eye} />
                  <IconButton variant='ghost' size='sm' icon={Pencil} />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='ghost' disabled size='lg' icon={Plus} />
                  <IconButton variant='ghost' disabled icon={Eye} />
                  <IconButton
                    variant='ghost'
                    disabled
                    size='sm'
                    icon={Pencil}
                  />
                </div>
                <div className='mt-3 flex flex-wrap items-end gap-3'>
                  <IconButton variant='ghost' isLoading size='lg' icon={Plus} />
                  <IconButton variant='ghost' isLoading icon={Eye} />
                  <IconButton
                    variant='ghost'
                    isLoading
                    size='sm'
                    icon={Pencil}
                  />
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Icon Link
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <IconLink
                  variant='primary'
                  size='lg'
                  href='/'
                  icon={ArrowLeft}
                />
                <IconLink variant='outline' href='/' icon={ArrowLeft} />
                <IconLink variant='ghost' size='sm' href='/' icon={ArrowLeft} />
                <IconLink variant='outline' size='xs' href='/' icon={Plus} />
                <IconLink variant='secondary' size='lg' href='/' icon={Eye} />
                <IconLink variant='danger' href='/' icon={Trash2} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
