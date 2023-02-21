import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import get from 'lodash.get';
import * as React from 'react';

import { mockQuery } from '@/lib/axios-mock';

import SearchableSelectInput, {
  SearchableSelectInputProps,
} from '@/components/forms/SearchableSelectInput';

import { ApiError, ApiResponse } from '@/types/api';

type ServerSelectInputProps = {
  route: string;
  valueGetter?: string;
  labelGetter?: string;
} & Omit<SearchableSelectInputProps, 'options'>;

export default function ServerSelectInput({
  route,
  valueGetter = 'id',
  labelGetter = 'name',
  ...rest
}: ServerSelectInputProps) {
  //#region  //*=========== Get Options ===========
  // TODO: Remove mockQuery
  const { data: optionsData, isLoading } = useQuery<
    ApiResponse<Array<object>>,
    AxiosError<ApiError>
  >([route], mockQuery);
  const options =
    optionsData?.data.map((item) => ({
      value: get(item, labelGetter) + '',
      label: get(item, valueGetter) + '',
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
