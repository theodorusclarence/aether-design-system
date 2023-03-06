import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type CardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

function CardRoot({ children, className, title, ...rest }: CardProps) {
  return (
    <div
      className={clsxm([
        'dashboard-layout rounded-xl border border-typo-divider bg-white',
        className,
      ])}
      {...rest}
    >
      {title && (
        <div className='border-b border-typo-divider px-4 py-2 sm:px-6 sm:py-3'>
          <Typography variant='h5' as='h2'>
            {title}
          </Typography>
        </div>
      )}
      <div className='divide-y divide-typo-divider px-4 sm:px-6'>
        {children}
      </div>
    </div>
  );
}

function Section({
  className,
  children,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsxm('flex w-full flex-col', 'py-4 sm:py-6', className)}>
      {children}
    </div>
  );
}

const Card = Object.assign(CardRoot, {
  Section,
});
export default Card;
