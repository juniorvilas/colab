/* eslint-disable prefer-destructuring */
import { useState } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import { Filter, UserProps } from './types';

export const QUERY_USERS_KEY = 'QUERY_USERS_KEY';

export async function getUsers({ page, results }: Filter) {
  try {
    const { data } = await axios.get('https://randomuser.me/api/', {
      params: {
        ...(page ? { page } : {}),
        ...(results ? { results } : { results: 12 })
      }
    });

    return data as UserProps;
  } catch (error) {
    return Promise.reject(error);
  }
}

export function useGetUsers({ results }: Filter) {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    [QUERY_USERS_KEY, page],
    () => getUsers({ results }),
    { keepPreviousData: true }
  );
  const incrementPage = () =>
    setPage(prevPagina => Math.min(prevPagina + 1, 100));

  const decrementPage = () =>
    setPage(prevPagina => Math.max(prevPagina - 1, 1));

  return {
    page,
    data,
    isLoading,
    incrementPage,
    decrementPage
  };
}
