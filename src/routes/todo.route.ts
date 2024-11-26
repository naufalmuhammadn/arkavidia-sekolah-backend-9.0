import { createRoute, z } from '@hono/zod-openapi';
import {
	GetListTodoQuerySchema,
	IdTodoPathSchema,
	ListTodoSchema,
	PostTodoBodySchema,
	PutTodoBodySchema,
	TodoSchema,
} from '../types/todo.type';
import { createErrorResponse } from '../utils/error-response-factory';

export const getListTodoRoute = createRoute({
	operationId: 'getListTodo',
	tags: ['todo'],
	method: 'get',
	path: '/todo',
	request: {
		query: GetListTodoQuerySchema,
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: ListTodoSchema,
				},
			},
			description: 'Returns list of todo',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const getTodoRoute = createRoute({
	operationId: 'getTodo',
	tags: ['todo'],
	method: 'get',
	path: '/todo/{id}',
	request: {
		params: IdTodoPathSchema,
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: TodoSchema,
				},
			},
			description: 'Returns todo with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const postTodoRoute = createRoute({
	operationId: 'postTodo',
	tags: ['todo'],
	method: 'post',
	path: '/todo',
	request: {
		body: {
			content: {
				'application/json': {
					schema: PostTodoBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			content: {
				'application/json': {
					schema: TodoSchema,
				},
			},
			description: 'Creates new todo',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const putTodoRoute = createRoute({
	operationId: 'putTodo',
	tags: ['todo'],
	method: 'put',
	path: '/todo/{id}',
	request: {
		params: IdTodoPathSchema,
		body: {
			content: {
				'application/json': {
					schema: PutTodoBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			content: {
				'application/json': {
					schema: TodoSchema,
				},
			},
			description: 'Updates todo with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});

export const deleteTodoRoute = createRoute({
	operationId: 'deleteTodo',
	tags: ['todo'],
	method: 'delete',
	path: '/todo/{id}',
	request: {
		params: IdTodoPathSchema,
	},
	responses: {
		200: {
			content: {
				'application/json': {
					schema: TodoSchema,
				},
			},
			description: 'Deletes todo with id',
		},
		400: createErrorResponse('UNION', 'Bad request error'),
		500: createErrorResponse('GENERIC', 'Internal server error'),
	},
});
