import { Popover, Transition } from '@headlessui/react';
import * as React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FiChevronDown, FiFilter, FiX } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Checkbox from '@/components/forms/Checkbox';
import Typography from '@/components/typography/Typography';

type CountryFilterPopupProps = {
  setCountryFilter: React.Dispatch<React.SetStateAction<string[]>>;
};

const filterOption = ['Indonesia', 'Malaysia', 'Singapore'];

export default function CountryFilterPopup({
  setCountryFilter,
}: CountryFilterPopupProps) {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { control, setValue } = methods;

  const filter = useWatch({
    control,
    name: 'filter[]',
  });
  //#endregion  //*======== Form ===========

  React.useEffect(() => {
    setCountryFilter(filter);
  }, [filter, setCountryFilter]);

  const resetFilter = () => setValue('filter[]', []);

  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button as='div'>
            <Button
              variant='ghost'
              size='sm'
              leftIcon={FiFilter}
              rightIcon={FiChevronDown}
              className='bg-primary-100'
            >
              Filter {filter?.length > 0 && `(${filter.length})`}
            </Button>
          </Popover.Button>

          <Transition
            as={React.Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute left-0 z-10 mt-3 w-screen max-w-xs transform sm:left-1/2 sm:-translate-x-1/2'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative bg-white p-4'>
                  <FormProvider {...methods}>
                    <div className='flex items-center justify-between'>
                      <Typography variant='s3'>Filter by</Typography>
                      <div className='flex items-center gap-3'>
                        <Typography
                          as='button'
                          variant='b3'
                          onClick={resetFilter}
                          className='cursor-pointer font-semibold text-primary-500 underline'
                        >
                          Reset Filter
                        </Typography>
                        <IconButton
                          variant='ghost'
                          icon={FiX}
                          onClick={close}
                        />
                      </div>
                    </div>
                    <Typography variant='s3' color='secondary' className='mt-4'>
                      Country
                    </Typography>
                    <div className='mt-2 grid grid-cols-2'>
                      {filterOption.map((item) => (
                        <Checkbox
                          key={item}
                          size='sm'
                          name='filter'
                          value={item}
                          label={item}
                        />
                      ))}
                    </div>
                  </FormProvider>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
