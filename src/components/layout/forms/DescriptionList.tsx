import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type DescriptionListProps = {
  title: React.ReactNode;
  description: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DescriptionList({
  className,
  title,
  description,
  ...rest
}: DescriptionListProps) {
  return (
    <div className={clsxm('', className)} {...rest}>
      <Typography as='dt' variant='b3' color='secondary'>
        {title}
      </Typography>
      <Typography as='dd' variant='b2'>
        {description}
      </Typography>
    </div>
  );
}
