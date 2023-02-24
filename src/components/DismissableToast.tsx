import produce from 'immer';
import { useRouter } from 'next/router';
import * as React from 'react';
import { toast, ToastBar, Toaster } from 'react-hot-toast';
import { HiX } from 'react-icons/hi';

export default function DismissableToast() {
  const router = useRouter();
  /**
   * ? This allows to show a toast via query params
   * * toast_type success, error, or none: default
   * * toast_message (required) the message to show
   */
  React.useEffect(() => {
    const toast_type = router.query.toast_type;
    const toast_message = router.query.toast_message;

    if (typeof toast_message === 'string') {
      if (toast_type === 'success') {
        toast.success(toast_message as string);
      } else if (toast_type === 'error') {
        toast.error(toast_message as string);
      } else {
        toast(toast_message as string);
      }

      const cleanedQuery = produce(router.query, (draft) => {
        delete draft.toast_type;
        delete draft.toast_message;
      });
      router.replace({ query: cleanedQuery }, undefined, { shallow: true });
    }
  }, [router, router.query]);

  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          className: 'font-medium rounded-lg',
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className='rounded-full p-1 ring-primary-400 transition hover:bg-light focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <HiX />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
}
