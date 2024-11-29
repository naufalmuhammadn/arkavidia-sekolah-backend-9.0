import { createRoute, z } from '@hono/zod-openapi';
import {
	IdUserPathSchema,
	ListUserSchema,
	PostUserBodySchema,
	PutUserBodySchema,
	UserSchema,
} from '../types/user.type';
import { createErrorResponse } from '../utils/error-response-factory';

export const getListUserRoute = createRoute({
	operationId: 'getListUser',
	tags: ['user'],
	method: 'get',
	path: '/user',
	responses: {
		200: {
			content: {
				'application/json': {
					schema: ListUserSchema,
				},
			},
			description: 'Returns list of user',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const getUserRoute = createRoute({
	operationId: 'getUser',
	tags: ['user'],
	method: 'get',
	path: '/user/{id}',
	request: {
		params: IdUserPathSchema,
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: UserSchema,
				},
			},
			description: 'Returns user with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const postUserRoute = createRoute({
	operationId: 'postUser',
	tags: ['user'],
	method: 'post',
	path: '/user',
	request: {
		body: {
		  content: {
			'application/json': {
			  schema: PostUserBodySchema,
			},
		  },
		  required: true,
		},
	  },
	responses: {
		200: {
			content: {
				'application/json': {
					schema: UserSchema,
				},
			},
			description: 'Creates new user',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const putUserRoute = createRoute({
	operationId: 'putUser',
	tags: ['user'],
	method: 'put',
	path: '/user/{id}',
	request: {
		params: IdUserPathSchema,
		body: {
			content: {
				'application/json': {
					schema: PutUserBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			content: {
				'application/json': {
					schema: UserSchema,
				},
			},
			description: 'Updates user with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const deleteUserRoute = createRoute({
	operationId: 'deleteUser',
	tags: ['user'],
	method: 'delete',
	path: '/user/{id}',
	request: {
		params: IdUserPathSchema,
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: UserSchema,
				},
			},
			description: 'Deletes user with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});
