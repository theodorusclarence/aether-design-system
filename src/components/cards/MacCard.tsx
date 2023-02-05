import * as React from 'react';

import clsxm from '@/lib/clsxm';

type MacCardProps = {
  childrenClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function MacCard({
  className,
  children,
  childrenClassName,
  ...rest
}: MacCardProps) {
  return (
    <div className={clsxm('overflow-hidden rounded-lg', className)} {...rest}>
      <div className='flex gap-1 bg-dark p-2'>
        <div className='h-2 w-2 rounded-full bg-rose-500' />
        <div className='h-2 w-2 rounded-full bg-amber-500' />
        <div className='h-2 w-2 rounded-full bg-green-400' />
      </div>
      <div className={clsxm('bg-neutral-100 p-4', childrenClassName)}>
        {children}
      </div>
    </div>
  );
}
