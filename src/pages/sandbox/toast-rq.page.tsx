import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';

import apiMock, { mockQuery } from '@/lib/axios-mock';
import useMutationToast from '@/hooks/toast/useMutationToast';
import useQueryToast from '@/hooks/toast/useQueryToast';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import { ApiError, ApiResponse } from '@/types/api';

type User = {
  id: number;
  name: string;
  token: string;
};

type LoginData = {
  email: string;
  password: string;
};

export default function SandboxPage() {
  const {
    data: mutationData,
    isLoading,
    mutate,
  } = useMutationToast<ApiResponse<undefined>, LoginData>(
    useMutation((data) => apiMock.post('/login', data).then((res) => res.data)),
  );

  const { data: queryData } = useQueryToast(
    useQuery<ApiResponse<User>, AxiosError<ApiError>>(['/me'], mockQuery),
  );

  return (
    <Layout>
      <Seo templateTitle='Toast-rq.page' />

      <main>
        <section>
          <div className='layout min-h-screen py-20'>
            <Typography variant='h1' as='h1'>
              Toast
            </Typography>
            <div className='mt-4 flex flex-wrap gap-3'>
              <Button onClick={() => toast.success('Hello!')}>Success</Button>
              <Button onClick={() => toast.error('Oops! Something went wrong')}>
                Error
              </Button>
              <Button
                onClick={() =>
                  toast.loading('Loading...', {
                    duration: 4000,
                  })
                }
              >
                Loading
              </Button>
            </div>
            <div className='mt-8 space-y-3'>
              <Button
                isLoading={isLoading}
                onClick={() =>
                  mutate({ email: 'admin@mail.com', password: 'admin' })
                }
              >
                Promise
              </Button>
              <Typography variant='h2' as='h2'>
                Query:
              </Typography>
              {queryData && <pre>{JSON.stringify(queryData, null, 2)}</pre>}
              <Typography variant='h2' as='h2'>
                Mutation:
              </Typography>
              {mutationData && (
                <pre>{JSON.stringify(mutationData, null, 2)}</pre>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
