import { db } from '../db/drizzle';
import { getTodoById } from '../repositories/todo.repository';
import { getTodoRoute } from '../routes/todo.route';
import { createRouter } from '../utils/router-factory';

export const todoRouter = createRouter();

todoRouter.openapi(getTodoRoute, async (c) => {
	const { id } = c.req.valid('param');
	const todo = await getTodoById(db, id);
	return c.json(todo, 200);
});
