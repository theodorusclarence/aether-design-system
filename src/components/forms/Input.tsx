import clsx from 'clsx';
import get from 'lodash.get';
import * as React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';

import Typography from '@/components/typography/Typography';

export type InputProps = {
  /** Input label */
  label: string | null;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
  leftIcon?: IconType | string;
  rightNode?: React.ReactNode;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  label,
  placeholder = '',
  helperText,
  id,
  type = 'text',
  disabled,
  readOnly = false,
  hideError = false,
  validation,
  leftIcon: LeftIcon,
  rightNode,
  containerClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  return (
    <div className={containerClassName}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}
      <div className={clsx('relative', withLabel && 'mt-1')}>
        {LeftIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {typeof LeftIcon === 'string' ? (
              <Typography variant='s4'>{LeftIcon}</Typography>
            ) : (
              <LeftIcon size='1em' className='text-xl text-typo' />
            )}
          </div>
        )}
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            'flex w-full rounded-lg shadow-sm',
            'min-h-[2.25rem] py-0 md:min-h-[2.5rem]',
            'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
            (readOnly || disabled) &&
              'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            LeftIcon && 'pl-9',
            rightNode && 'pr-10'
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {rightNode && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            {rightNode}
          </div>
        )}
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
    </div>
  );
}
