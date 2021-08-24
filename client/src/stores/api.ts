import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const guestbookApi = createApi({
  reducerPath: 'guestbookApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_ENDPOINT}/api/v1`,
  }),
  endpoints: () => ({}),
});
