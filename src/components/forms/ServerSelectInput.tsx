import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as React from 'react';

import { mockQuery } from '@/lib/axios-mock';

import SearchableSelectInput, {
  SearchableSelectInputProps,
} from '@/components/forms/SearchableSelectInput';

import { ApiError, ApiResponse } from '@/types/api';

type ServerSelectInputProps = {
  route: string;
} & Omit<SearchableSelectInputProps, 'options'>;

export default function ServerSelectInput({
  route,
  ...rest
}: ServerSelectInputProps) {
  //#region  //*=========== Get Options ===========
  const { data: optionsData, isLoading } = useQuery<
    ApiResponse<Array<{ id: number; name: string }>>,
    AxiosError<ApiError>
  >([route], mockQuery);
  const options =
    optionsData?.data.map((item) => ({
      value: item.id + '',
      label: item.name,
    })) || [];
  //#endregion  //*======== Get Options ===========

  return (
    <SearchableSelectInput
      options={options}
      noOptionsMessage={() =>
        isLoading ? 'Getting options...' : 'No option found'
      }
      {...rest}
    />
  );
}
