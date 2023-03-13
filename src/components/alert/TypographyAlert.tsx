import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

const alertVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const;
type AlertVariant = (typeof alertVariant)[number];

type TypographyAlertProps = {
  variant?: AlertVariant;
  leftIcon?: IconType;
  leftIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TypographyAlert({
  variant = 'primary',
  className,
  children,
  leftIcon: LeftIcon,
  leftIconClassName,
  ...rest
}: TypographyAlertProps) {
  return (
    <div
      className={clsxm(
        'prose prose-sm max-w-none',
        'rounded-lg p-4 shadow-sm',
        'prose-li:my-[0.1em] prose-li:marker:text-inherit',
        [
          variant === 'primary' && ['bg-primary-50 text-primary-900'],
          variant === 'secondary' && ['bg-secondary-50 text-secondary-900'],
          variant === 'warning' && ['bg-yellow-50 text-yellow-900'],
          variant === 'danger' && ['bg-red-50 text-red-900'],
          variant === 'success' && ['bg-green-50 text-green-900'],
        ],
        'flex items-start gap-4',
        className
      )}
      {...rest}
    >
      {LeftIcon && (
        <div>
          <LeftIcon
            size='1.3em'
            className={clsxm(
              'text-base',
              [
                variant === 'primary' && ['text-primary-600'],
                variant === 'secondary' && ['text-secondary-600'],
                variant === 'warning' && ['text-yellow-600'],
                variant === 'danger' && ['text-red-600'],
                variant === 'success' && ['text-green-600'],
              ],
              leftIconClassName
            )}
          />
        </div>
      )}

      <div
        // margin based on typography default margin
        className='-my-[1.1428571em]'
      >
        {children}
      </div>
    </div>
  );
}
