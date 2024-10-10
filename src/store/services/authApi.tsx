/* eslint-disable @typescript-eslint/no-explicit-any */
import mainApi from './mainApi';
import { LoginBodyType, LoginPayloadType } from './types';

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		lgoin: builder.mutation<LoginPayloadType, LoginBodyType>({
			query: ({ email, password }) => ({
				url: `auth/login`,
				method: 'POST',
				body: {
					email,
					password,
				},
			}),
			invalidatesTags: ['self'],
		}),
		register: builder.mutation<any, any>({
			query: body => ({
				url: `auth/register`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['self'],
		}),
		updatePassword: builder.mutation<any, any>({
			query: body => ({
				url: `auth/change-password`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['self'],
		}),
		getSelf: builder.query<any, any>({
			query: () => `auth/self`,
			providesTags: ['self'],
		}),
		updateSelf: builder.mutation<any, any>({
			query: body => ({
				url: `auth/self`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['self'],
		}),
		updatePreferences: builder.mutation<any, any>({
			query: ({ field, preferences }) => ({
				url: `auth/update/preferences`,
				method: 'PUT',
				body: { field, preferences },
			}),
			invalidatesTags: (result, error, { field }) => [field, 'self'],
		}),
		updatePassord: builder.mutation<any, any>({
			query: ({ field, preferences }) => ({
				url: `auth/update/password`,
				method: 'PUT',
				body: { field, preferences },
			}),
			invalidatesTags: (result, error, { field }) => [field, 'self'],
		}),
	}),
	overrideExisting: false,
});

export const {
	useLgoinMutation,
	useGetSelfQuery,
	useUpdatePreferencesMutation,
	useRegisterMutation,
	useUpdatePasswordMutation,
	useUpdateSelfMutation,
	useUpdatePassordMutation,
} = authApi;
export default authApi;
