import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TypographyVariant = [
  'j1',
  'j2',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  's1',
  's2',
  's3',
  's4',
  'b1',
  'b2',
  'b3',
  'c1',
  'c2',
  'l1',
  'l2',
] as const;

const TypographyColor = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'white',
] as const;
const TypographyFont = ['averta', 'inter'] as const;

type TypographyProps<T extends React.ElementType> = {
  /** @default <p> tag */
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];
  /**
   * | Variant | Size Class | Font Size | Font Weight |
   * | :------ | :--------- | :-------- | :---------- |
   * | j1      | text-4xl   | 36px      | 700         |
   * | j2      | text-3xl   | 30px      | 700         |
   * | h1      | text-2xl   | 24px      | 600         |
   * | h2      | text-xl    | 20px      | 600         |
   * | h3      | text-lg    | 18px      | 600         |
   * | h4      | text-base  | 16px      | 700         |
   * | h5      | text-base  | 16px      | 600         |
   * | h6      | text-sm    | 14px      | 600         |
   * | s1      | text-lg    | 18px      | 500         |
   * | s2      | text-base  | 16px      | 500         |
   * | s3      | text-sm    | 14px      | 500         |
   * | s4      | text-xs    | 12px      | 500         |
   * | b1      | text-lg    | 18px      | 400         |
   * | b2      | text-base  | 16px      | 400         |
   * | b3      | text-sm    | 14px      | 400         |
   * | c1      | text-xs    | 12px      | 400         |
   * | c2      | -          | 11px      | 400         |
   */
  variant?: (typeof TypographyVariant)[number];
  font?: (typeof TypographyFont)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = 'p'>(
  props: TypographyProps<T>
) => React.ReactElement | null;

const Typography: TypographyComponent = React.forwardRef(
  <T extends React.ElementType = 'p'>(
    {
      as,
      children,
      className,
      color = 'primary',
      variant = 'b2',
      font,
      ...rest
    }: TypographyProps<T>,
    ref?: React.ComponentPropsWithRef<T>['ref']
  ) => {
    const Component = as || 'p';
    return (
      <Component
        ref={ref}
        className={clsxm(
          //#region  //*=========== Variants ===========
          [
            variant === 'j1' && ['font-averta text-4xl font-bold'],
            variant === 'j2' && ['font-averta text-3xl font-bold'],
            variant === 'h1' && ['font-averta text-2xl font-semibold'],
            variant === 'h2' && ['font-averta text-xl font-semibold'],
            variant === 'h3' && ['font-averta text-lg font-semibold'],
            variant === 'h4' && ['font-averta text-base font-bold'],
            variant === 'h5' && ['font-averta text-base font-semibold'],
            variant === 'h6' && ['font-averta text-sm font-semibold'],
            variant === 's1' && ['text-lg font-medium'],
            variant === 's2' && ['text-base font-medium'],
            variant === 's3' && ['text-sm font-medium'],
            variant === 's4' && ['text-xs font-medium'],
            variant === 'b1' && ['text-lg'],
            variant === 'b2' && ['font-primary text-base'],
            variant === 'b3' && ['text-sm font-normal'],
            variant === 'c1' && ['text-xs'],
            variant === 'c2' && ['text-[11px] leading-[14px]'],
          ],
          //#endregion  //*======== Variants ===========
          //#region  //*=========== Color ===========
          [
            color === 'primary' && ['text-black'],
            color === 'secondary' && ['text-gray-700'],
            color === 'tertiary' && ['text-gray-500'],
            color === 'danger' && ['text-red-500'],
            color === 'white' && ['text-white'],
          ],
          //#endregion  //*======== Color ===========
          //#region  //*=========== Font ===========
          [
            font === 'averta' && ['font-averta'],
            font === 'inter' && ['font-primary'],
          ],
          //#endregion  //*======== Font ===========
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Typography;
