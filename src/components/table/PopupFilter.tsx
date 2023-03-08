import * as React from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FiChevronDown, FiFilter, FiX } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Checkbox from '@/components/forms/Checkbox';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import Typography from '@/components/typography/Typography';

export type PopupFilterProps<T extends Record<string, string[]>> = {
  filterOption: {
    id: Extract<keyof T, string>;
    name: string;
    options: {
      id: string;
      name: string;
    }[];
  }[];
  setFilterQuery: React.Dispatch<React.SetStateAction<T>>;
  title?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function PopupFilter<T extends Record<string, string[]>>({
  filterOption,
  setFilterQuery,
  title = 'Filter',
}: PopupFilterProps<T>) {
  //#region  //*=========== Form ===========
  const methods = useForm({
    mode: 'onTouched',
  });
  const { control, setValue } = methods;

  const filter: string[] = useWatch({
    control,
    name: 'filter[]',
  });
  //#endregion  //*======== Form ===========

  React.useEffect(() => {
    const defaultFilter = filterOption.reduce((acc, curr) => {
      return { ...acc, [curr.id]: [] };
    }, {} as T);

    const parsedFilter =
      filter?.reduce((acc, curr) => {
        const [key, value] = curr.split('.');
        acc[key].push(value);
        return acc;
      }, defaultFilter) ?? defaultFilter;

    setFilterQuery(parsedFilter);
  }, [filter, filterOption, setFilterQuery]);

  const resetFilter = () => setValue('filter[]', []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          leftIcon={FiFilter}
          rightIcon={FiChevronDown}
          className='bg-primary-100'
        >
          {title} {filter?.length > 0 && `(${filter.length})`}
        </Button>
      </PopoverTrigger>
      <PopoverContent side='bottom' className='w-md'>
        <FormProvider {...methods}>
          <div className='flex items-center justify-between'>
            <Typography variant='h6'>Filter by</Typography>
            <div className='flex items-center gap-3'>
              <Typography
                as='button'
                variant='b3'
                onClick={resetFilter}
                className='cursor-pointer font-semibold text-primary-500 underline'
              >
                Reset Filter
              </Typography>
              <PopoverClose>
                <IconButton variant='ghost' icon={FiX} />
              </PopoverClose>
            </div>
          </div>
          {filterOption.map((item) => (
            <div key={item.id}>
              <Typography variant='s3' color='secondary' className='mt-4'>
                {item.name}
              </Typography>
              <div className='mt-2'>
                {item.options.map((option) => (
                  <Checkbox
                    key={`${item.id}.${option.id}`}
                    size='sm'
                    name='filter'
                    value={`${item.id}.${option.id}`}
                    label={option.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </FormProvider>
      </PopoverContent>
    </Popover>
  );
}
