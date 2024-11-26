import { type InferSelectModel, relations, sql } from 'drizzle-orm';
import { serial } from 'drizzle-orm/mysql-core';
import {
	type AnyPgColumn,
	boolean,
	index,
	integer,
	json,
	pgTable,
	primaryKey,
	text,
	timestamp,
	unique,
} from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { createId, getNow } from '../../utils/drizzle-schema-util';
import { user } from './user.schema';

export const todo = pgTable('todo', {
	id: text('id').primaryKey().$defaultFn(createId),
	authorId: text('authorId')
		.notNull()
		.references(() => user.id, {
			onDelete: 'cascade',
		}),
	name: text('name').notNull(),
	description: text('description'),
	isCompleted: boolean('is_completed').notNull().default(false),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').$onUpdate(getNow),
});

export const todoRelations = relations(todo, ({ one, many }) => ({
	author: one(user, {
		fields: [todo.authorId],
		references: [user.id],
	}),
}));

export type Todo = InferSelectModel<typeof todo>;
