import { UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';

import { DEFAULT_TOAST_MESSAGE } from '@/constant/toast';

import { ApiError } from '@/types/api';

type OptionType = {
  loading?: string;
  success?: string;
  error?: string;
};

export default function useQueryToast<T>(
  query: UseQueryResult<T, AxiosError<ApiError>>,
  customMessages: OptionType = {},
) {
  const { data, isError, isLoading, error } = query;

  const toastStatus = React.useRef<string>(data ? 'done' : 'idle');

  React.useEffect(() => {
    const toastMessage = {
      ...DEFAULT_TOAST_MESSAGE,
      ...customMessages,
    };

    // If it is not the first render
    if (toastStatus.current === 'done' && !isLoading) return;

    if (isError) {
      toast.error(
        typeof toastMessage.error === 'string'
          ? toastMessage.error
          : toastMessage.error(error),
        {
          id: toastStatus.current,
        },
      );
      toastStatus.current = 'done';
    } else if (isLoading) {
      toastStatus.current = toast.loading(toastMessage.loading);
    } else if (data) {
      toast.success(toastMessage.success, { id: toastStatus.current });
      toastStatus.current = 'done';
    }

    return () => {
      toast.dismiss(toastStatus.current);
    };
  }, [customMessages, data, error, isError, isLoading]);

  return { ...query };
}
