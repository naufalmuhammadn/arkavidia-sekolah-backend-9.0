import { z } from 'zod';
import { eq } from 'drizzle-orm';
import type { Database } from '../db/drizzle';
import { user } from '../db/schema/user.schema';
import { PostUserBodySchema, PutUserBodySchema } from '~/types/user.type';

export const getListUser = async (db: Database) => {
	return await db.select().from(user);
};

export const getUserById = async (db: Database, id: string) => {
	return await db.select().from(user).where(eq(user.id, id));
};

export const postUser = async (db: Database, data: z.infer<typeof PostUserBodySchema>) => {
	return await db.insert(user).values({ ...data })
};

export const putUser = async (db: Database, data: z.infer<typeof PutUserBodySchema>, userId: string) => {
	return await db.update(user).set({ ...data }).where(eq(user.id, userId))
};

export const deleteUser = async (db: Database, userId: string) => {
	return await db.delete(user).where(eq(user.id, userId))
};