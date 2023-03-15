import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

import Skeleton from '@/components/Skeleton';
import Typography from '@/components/typography/Typography';

const statisticsCardVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
] as const;
type StatisticsCardVariant = (typeof statisticsCardVariant)[number];

type StatisticsCardProps = {
  icon?: IconType;
  iconClassName?: string;
  isLoading?: boolean;
  label: string;
  value: number;
  variant?: StatisticsCardVariant;
} & React.ComponentPropsWithoutRef<'div'>;

export default function StatisticsCard({
  className,
  icon: Icon,
  iconClassName,
  isLoading = false,
  label,
  value,
  variant = 'primary',
  ...rest
}: StatisticsCardProps) {
  return (
    <div
      className={clsxm(
        'rounded-xl bg-white p-3',
        'border border-typo-divider',
        'flex items-center gap-3',
        className
      )}
      {...rest}
    >
      {Icon && (
        <div
          className={clsxm('rounded-lg p-2', [
            variant === 'primary' && ['bg-primary-50'],
            variant === 'secondary' && ['bg-secondary-50'],
            variant === 'warning' && ['bg-yellow-50'],
            variant === 'danger' && ['bg-red-50'],
            variant === 'success' && ['bg-green-50'],
          ])}
        >
          <Icon
            size='1.5em'
            className={clsxm(
              [
                variant === 'primary' && ['text-primary-500'],
                variant === 'secondary' && ['text-secondary-500'],
                variant === 'warning' && ['text-yellow-500'],
                variant === 'danger' && ['text-red-500'],
                variant === 'success' && ['text-green-500'],
              ],
              iconClassName
            )}
          />
        </div>
      )}
      {isLoading ? (
        <div>
          <Skeleton className='h-4 w-24' />
          <Skeleton className='mt-1 h-4 w-10' />
        </div>
      ) : (
        <div>
          <Typography variant='b3' color='secondary'>
            {label}
          </Typography>
          <Typography variant='s2'>{value}</Typography>
        </div>
      )}
    </div>
  );
}
