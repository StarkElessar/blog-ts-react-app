import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IBreed {
	id: string;
	name: string;
	image: {
		url: string;
	};
}

export const dogsApi = createApi({
	reducerPath: 'dogApi',

	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.thedogapi.com/v1',
		prepareHeaders: (headers) => {
			headers.set('x-api-key', <string>process.env.REACT_APP_DOG_API_KEY);

			return headers;
		}
	}),

	endpoints: (builder) => {
		return {
			fetchBreeds: builder.query<IBreed[], number | void>({
				query: (limit = 10) => `breeds?limit=${limit}`,
			})
		};
	}
});

export const { useFetchBreedsQuery  } = dogsApi;
