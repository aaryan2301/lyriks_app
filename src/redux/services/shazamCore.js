import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi= createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '190791ec2fmsh7b0899122c4f39bp1f1047jsnfc3ddf91e6dd');
            return headers;
        },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({query:()=> '/charts/track'}),
      getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` }),
    }),
});

export const{
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
}= shazamCoreApi;