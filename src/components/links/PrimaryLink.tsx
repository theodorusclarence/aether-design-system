import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const PrimaryLinkSize = ['sm', 'base'] as const;
const PrimaryLinkVariant = ['primary', 'secondary', 'basic', 'danger'] as const;

type PrimaryLinkProps = {
  size?: typeof PrimaryLinkSize[number];
  variant?: typeof PrimaryLinkVariant[number];
} & UnstyledLinkProps;

const PrimaryLink = React.forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  (
    { className, children, size = 'base', variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center font-semibold',
          'focus:outline-none focus-visible:ring',
          'transition duration-100 after:transition after:duration-100',
          "relative after:absolute after:inset-x-0 after:h-[2px] after:bg-current after:content-['']",
          'hover:after:opacity-0 active:after:opacity-100 disabled:hover:after:opacity-100',
          //#region  //*=========== Size ===========
          size === 'sm' &&
            'text-xs after:bottom-[1px] md:text-sm md:after:bottom-[3px]',
          size === 'base' && 'text-sm after:bottom-0 md:text-base',
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'focus-visible:ring-primary-400',
          ],
          variant === 'secondary' && [
            'text-secondary-500 hover:text-secondary-600 active:text-secondary-700',
            'focus-visible:ring-secondary-400',
          ],
          variant === 'basic' && ['focus-visible:ring-gray-400'],
          variant === 'danger' && [
            'text-red-500 hover:text-red-600 active:text-red-600',
            'focus-visible:ring-red-300',
          ],
          //#endregion  //*======== Variant ===========
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
