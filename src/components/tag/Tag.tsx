import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

const TAG_SIZE = ['sm', 'base'] as const;
type TagSize = (typeof TAG_SIZE)[number];

const TAG_COLOR = [
  'DEFAULT',
  'primary',
  'secondary',
  'success',
  'danger',
  'orange',
  'warning',
  'aqua',
] as const;
type TagColor = (typeof TAG_COLOR)[number];

type TagProps = {
  children: React.ReactNode;
  size?: TagSize;
  color?: TagColor;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      className,
      color = 'DEFAULT',
      size = 'base',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsxm(
          [
            size === 'sm' && ['py-0.5 text-xs'],
            size === 'base' && ['py-1 text-sm'],
          ],

          //#region  //*=========== Color ===========
          color === 'DEFAULT' && 'bg-light text-typo-secondary',
          color === 'primary' && 'bg-primary-100 text-primary-700',
          color === 'secondary' && 'bg-secondary-100 text-secondary-700',
          color === 'danger' && 'bg-red-100 text-red-700',
          color === 'orange' && 'bg-orange-100 text-orange-700',
          color === 'warning' && 'bg-yellow-100 text-yellow-700 ',
          color === 'success' && 'bg-green-100 text-green-700',
          //#endregion  //*======== Color ===========
          'inline-flex items-center gap-1 rounded-full px-3 font-medium',
          LeftIcon && 'pl-3',
          RightIcon && 'pr-3',
          className
        )}
        ref={ref}
        {...rest}
      >
        {LeftIcon && (
          <div>
            <LeftIcon size='1em' className={clsxm(leftIconClassName)} />
          </div>
        )}
        {children}
        {RightIcon && (
          <div>
            <RightIcon size='1em' className={clsxm(rightIconClassName)} />
          </div>
        )}
      </div>
    );
  }
);

export default Tag;
