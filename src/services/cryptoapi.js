import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_API_HOST
}

const createRequestApi = url => ({ url, headers: cryptoApiHeaders }) 

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASEURL}),
  endpoints: builder => ({
    getCryptos: builder.query({
      query:(count) => createRequestApi(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query:(cryptoId) => createRequestApi(`/coin/${cryptoId}`)
    })
  })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery} = cryptoApi
