import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';
import { FiEye } from 'react-icons/fi';

import { mockQuery } from '@/lib/axios-mock';
import { buildPaginatedTableURL } from '@/lib/table';
import useRenderCount from '@/hooks/useRenderCount';
import useServerTable from '@/hooks/useServerTable';

import IconButton from '@/components/buttons/IconButton';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PaginatedTable from '@/components/table/PaginatedTable';
import ServerTable from '@/components/table/ServerTable';
import Typography from '@/components/typography/Typography';

import { User } from '@/pages/api/mock/users.api';
import CountryFilterPopup from '@/pages/sandbox/components/CountryFilterPopup';

import { ApiResponse, PaginatedApiResponse } from '@/types/api';

export default function TablePage() {
  const renderCount = useRenderCount();

  //#region  //*=========== Table Definition ===========
  const { tableState, setTableState } = useServerTable<User>();

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: 'Role',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'country',
      header: 'Country',
    },
    {
      id: 'actions',
      header: 'Action',
      cell: () => <IconButton variant='outline' icon={FiEye} />,
    },
  ];
  //#endregion  //*======== Table Definition ===========

  //#region  //*=========== Fetch Data ===========
  const [countryFilter, setCountryFilter] = React.useState<string[]>([]);

  const url = buildPaginatedTableURL({
    baseUrl: '/users',
    tableState,
    additionalParam: {
      country: countryFilter,
    },
  });

  const { data: queryData } = useQuery<PaginatedApiResponse<User[]>, Error>(
    [url],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );

  const { data: unpaginatedData } = useQuery<ApiResponse<User[]>, Error>(
    ['/users'],
    mockQuery,
    {
      keepPreviousData: true,
    }
  );
  //#endregion  //*======== Fetch Data ===========

  return (
    <Layout>
      <Seo templateTitle='Table' />

      <main>
        <section>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='h1'>
              Table
            </Typography>

            <Typography as='h2' variant='h2' className='mt-4'>
              Server Table
            </Typography>
            <Typography variant='b2'>
              Table state such as filter, sort, and pagination is managed on the
              server.
            </Typography>
            <pre>
              {JSON.stringify({ renderCount, tableState, url }, null, 2)}
            </pre>

            <ServerTable
              columns={columns}
              data={queryData?.data ?? []}
              meta={queryData?.meta}
              header={
                <CountryFilterPopup setCountryFilter={setCountryFilter} />
              }
              tableState={tableState}
              setTableState={setTableState}
              className='mt-8'
              withFilter
            />

            <Typography as='h2' variant='h2' className='mt-8'>
              Paginated Table
            </Typography>
            <Typography variant='b2'>
              Server returned all the data then paginated on the client.
            </Typography>

            <PaginatedTable
              columns={columns}
              data={unpaginatedData?.data ?? []}
              withFilter
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
