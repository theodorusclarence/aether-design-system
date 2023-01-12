import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';
import {
  HiExclamationCircle,
  HiOutlineCheck,
  HiOutlineExclamation,
  HiOutlineX,
} from 'react-icons/hi';

import useLoadingToast from '@/hooks/toast/useLoadingToast';

import Button from '@/components/buttons/Button';
import IconButton from '@/components/buttons/IconButton';
import Typography from '@/components/typography/Typography';

type BaseDialogProps = {
  /** Maintained by useDialogStore */
  open: boolean;
  /** Maintained by useDialogStore */
  onSubmit: () => void;
  /** Maintained by useDialogStore */
  onClose: () => void;
  /** Customizable Dialog Options */
  options: DialogOptions;
};

export type DialogOptions = {
  catchOnCancel?: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
  variant: 'success' | 'warning' | 'danger';
  submitText: React.ReactNode;
  listenForLoadingToast?: boolean;
};

/**
 * Base Dialog for useDialog hook implementation.
 *
 * **Should be called with the hook, not by the component itself**
 *
 *
 * @see useDialogStore
 * @example ```tsx
 * const dialog = useDialog();
 *
 * dialog(options);
 * ```
 */
export default function BaseDialog({
  open,
  onSubmit,
  onClose,
  options: {
    title,
    description,
    variant,
    submitText,
    listenForLoadingToast = false,
  },
}: BaseDialogProps) {
  const current = colorVariant[variant];
  // Set initial focus to the container div instead of automatically focused to the close button
  const containerRef = React.createRef<HTMLDivElement>();

  const isLoading = useLoadingToast();

  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 overflow-y-auto'
        open={open}
        onClose={() => onClose()}
        initialFocus={containerRef}
      >
        <div
          className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'
          ref={containerRef}
        >
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:h-screen sm:align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div
              className={clsx(
                'z-auto inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all',
                'pt-5 pb-4 sm:my-8 sm:pt-6 sm:pb-4',
                'sm:max-w-lg sm:align-middle'
              )}
            >
              <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                <IconButton
                  onClick={onClose}
                  variant='ghost'
                  size='sm'
                  icon={HiOutlineX}
                  iconClassName='text-2xl text-typo-icons'
                />
              </div>
              <div
                className={clsx(
                  'sm:flex sm:items-start',
                  'px-4 sm:px-6 sm:pb-6'
                )}
              >
                <div
                  className={clsx(
                    'flex flex-shrink-0 items-center justify-center rounded-full',
                    'mx-auto h-12 w-12 sm:mx-0 sm:h-10 sm:w-10',
                    current.bg.light
                  )}
                >
                  <current.icon
                    className={clsx('h-6 w-6', current.text.primary)}
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <Typography as={Dialog.Title} variant='h3'>
                    {title}
                  </Typography>
                  <div className='mt-2'>
                    <Typography variant='b3' color='tertiary'>
                      {description}
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  'mt-5 sm:mt-4 sm:flex sm:flex-row-reverse',
                  'px-4 pt-4 sm:px-6',
                  'border-t border-typo-divider'
                )}
              >
                <Button
                  onClick={onSubmit}
                  className={clsx(
                    'w-full items-center justify-center !font-medium sm:ml-3 sm:w-auto sm:text-sm'
                  )}
                  isLoading={listenForLoadingToast && isLoading}
                >
                  {submitText}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  onClick={onClose}
                  className='mt-3 w-full items-center justify-center !font-medium sm:mt-0 sm:w-auto sm:text-sm'
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const colorVariant = {
  success: {
    bg: {
      light: 'bg-green-100',
    },
    text: {
      primary: 'text-green-500',
    },
    icon: HiOutlineCheck,
  },
  warning: {
    bg: {
      light: 'bg-yellow-100',
    },
    text: {
      primary: 'text-yellow-500',
    },
    icon: HiOutlineExclamation,
  },
  danger: {
    bg: {
      light: 'bg-red-100',
    },
    text: {
      primary: 'text-red-500',
    },
    icon: HiExclamationCircle,
  },
};
