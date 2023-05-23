import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazam= createApi({
    reducerPath: "shazam",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '190791ec2fmsh7b0899122c4f39bp1f1047jsnfc3ddf91e6dd');
            return headers;
        },
    }),
    endpoints: (builder) => ({
      getChartsByGenre: builder.query({query:(genre)=> `/charts/get-top-songs-in_world_by_genre?genre=${genre}`}),
      getSongDetails: builder.query({ query: ({ songid }) => `/songs/get_details?id=${songid}`}),
      getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?id=${songid}`}),
    }),
});

export const{
  useGetChartsByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
}= shazam;