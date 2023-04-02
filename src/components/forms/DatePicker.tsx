import clsx from 'clsx';
import get from 'lodash.get';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import { HiOutlineCalendar } from 'react-icons/hi';

import 'react-datepicker/dist/react-datepicker.css';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type DatePickerProps = {
  validation?: RegisterOptions;
  label: string | null;
  id: string;
  placeholder?: string;
  defaultYear?: number;
  defaultMonth?: number;
  defaultValue?: string;
  helperText?: string;
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  containerClassName?: string;
} & Omit<ReactDatePickerProps, 'onChange'>;

export default function DatePicker({
  validation,
  label,
  id,
  placeholder,
  defaultYear,
  defaultMonth,
  defaultValue,
  helperText,
  readOnly = false,
  hideError = false,
  disabled,
  containerClassName,
  ...rest
}: DatePickerProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  // If there is a year default, then change the year to the props
  const defaultDate = new Date();
  if (defaultYear) defaultDate.setFullYear(defaultYear);
  if (defaultMonth) defaultDate.setMonth(defaultMonth);

  return (
    <div className={clsxm('relative', containerClassName)}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}

      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <div className={clsx('relative', withLabel && 'mt-1')}>
              <ReactDatePicker
                name={id}
                onChange={onChange}
                onBlur={onBlur}
                selected={value ? new Date(value) : undefined}
                className={clsx(
                  'flex w-full rounded-lg shadow-sm',
                  'min-h-[2.25rem] py-0 md:min-h-[2.5rem]',
                  'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
                  (readOnly || disabled) &&
                    'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
                  error &&
                    'border-red-500 focus:border-red-500 focus:ring-red-500'
                )}
                placeholderText={placeholder}
                aria-describedby={id}
                showMonthDropdown
                showYearDropdown
                dropdownMode='select'
                openToDate={value ? new Date(value) : defaultDate}
                dateFormat='dd/MM/yyyy'
                readOnly={readOnly}
                disabled={disabled}
                {...rest}
              />
              <HiOutlineCalendar className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 transform text-lg text-typo-icons' />
            </div>
            {helperText && (
              <Typography variant='c1' color='secondary' className='mt-1'>
                {helperText}
              </Typography>
            )}
            {!hideError && error && (
              <Typography variant='c1' color='danger' className='mt-1'>
                {error?.message?.toString()}
              </Typography>
            )}
          </>
        )}
      />
    </div>
  );
}
