import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const googleNewsHeaders = {
  'content-type': 'application/json',
  'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  'x-rapidapi-host': import.meta.env.VITE_GOOGLE_NEWS_API_HOST,
};

const createRequest = (url, body) => ({ url, headers: googleNewsHeaders, body: {...body}, method: 'POST' });

export const googleNewsApi = createApi({
  reducerPath: 'googleNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_GOOGLE_NEWS_BASEURL }),
  endpoints: (builder) => ({
    getGoogleNews: builder.query({
      query: (body) => createRequest(`/`, body),
    }),
  }),
});

export const { useGetGoogleNewsQuery } = googleNewsApi;