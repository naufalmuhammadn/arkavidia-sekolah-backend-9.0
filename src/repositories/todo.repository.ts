import { eq } from 'drizzle-orm';
import type { Database } from '../db/drizzle';
import { todo } from '../db/schema/todo.schema';

export const getTodoById = async (db: Database, id: string) => {
	return await db.select().from(todo).where(eq(todo.id, id));
};
