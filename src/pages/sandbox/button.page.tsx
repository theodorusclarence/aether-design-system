import { ArrowRight, Plus, Save } from 'lucide-react';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ButtonPage() {
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
      <Seo templateTitle='Button' />

      <main>
        <section>
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
                <Button variant='primary' leftIcon={Save}>
                  Save
                </Button>
              </form>
            </FormProvider>

            <div className='mt-8 flex space-x-2'>
              <Button variant='outline'>Cancel</Button>
              <Button variant='primary' leftIcon={Save}>
                Save
              </Button>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Primary
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Primary Button
                </Button>
                <Button
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Primary Button
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Primary Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Primary Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='primary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
                <Button
                  variant='primary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Primary Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Secondary
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='secondary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button
                </Button>
                <Button
                  variant='secondary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button
                </Button>
                <Button
                  variant='secondary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='secondary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Secondary Disabled
                </Button>
                <Button
                  variant='secondary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Secondary Disabled
                </Button>
                <Button
                  variant='secondary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Secondary Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='secondary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Secondary Disabled
                </Button>
                <Button
                  variant='secondary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Secondary Disabled
                </Button>
                <Button
                  variant='secondary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Secondary Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Danger
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Danger Button
                </Button>
                <Button variant='danger' leftIcon={Plus} rightIcon={ArrowRight}>
                  Danger Button
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Danger Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Danger Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='danger'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
                <Button
                  variant='danger'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Danger Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Outline
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button
                </Button>
                <Button
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Outline Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='outline'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Outline Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Warning
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button
                </Button>
                <Button
                  variant='warning'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Warning Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='warning'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Warning Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Ghost
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button variant='ghost' leftIcon={Plus} rightIcon={ArrowRight}>
                  Ghost Button
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Ghost Button
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='ghost'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Ghost Disabled
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  disabled
                >
                  Ghost Disabled
                </Button>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <Button
                  variant='ghost'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Ghost Disabled
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                  isLoading
                >
                  Ghost Disabled
                </Button>
              </div>
            </div>

            <div className='mt-8'>
              <Typography as='h2' variant='h2'>
                Button Link
              </Typography>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <ButtonLink
                  href='/'
                  variant='primary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='primary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='primary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Button Link
                </ButtonLink>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <ButtonLink
                  href='/'
                  variant='secondary'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='secondary'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='secondary'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Secondary Button Link
                </ButtonLink>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <ButtonLink
                  href='/'
                  variant='outline'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='outline'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='outline'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Outline Button Link
                </ButtonLink>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <ButtonLink
                  href='/'
                  variant='warning'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='warning'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='warning'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Warning Button Link
                </ButtonLink>
              </div>
              <div className='mt-3 flex flex-wrap items-end gap-3'>
                <ButtonLink
                  href='/'
                  variant='ghost'
                  size='lg'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Ghost Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='ghost'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Ghost Button Link
                </ButtonLink>
                <ButtonLink
                  href='/'
                  variant='ghost'
                  size='sm'
                  leftIcon={Plus}
                  rightIcon={ArrowRight}
                >
                  Ghost Button Link
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
