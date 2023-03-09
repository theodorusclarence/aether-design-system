import * as React from 'react';
import Balancer from 'react-wrap-balancer';

import clsxm from '@/lib/clsxm';

const alertVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const;
type AlertVariant = (typeof alertVariant)[number];

type AlertProps = {
  variant?: AlertVariant;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Alert({
  variant = 'primary',
  className,
  children,
  ...rest
}: AlertProps) {
  return (
    <div
      className={clsxm([
        'w-full rounded-xl p-3',
        'text-secondary text-center',
        'text-sm',
        [
          variant === 'primary' && ['bg-primary-50'],
          variant === 'secondary' && ['bg-secondary-50'],
          variant === 'warning' && ['bg-yellow-50'],
          variant === 'danger' && ['bg-red-50'],
          variant === 'success' && ['bg-green-50'],
        ],
        className,
      ])}
      {...rest}
    >
      <Balancer>{children}</Balancer>
    </div>
  );
}
