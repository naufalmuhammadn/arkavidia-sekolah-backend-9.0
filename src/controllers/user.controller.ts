import { UserSchema } from '~/types/user.type';
import { db } from '../db/drizzle';
import { getListUser, getUserById, postUser, putUser, deleteUser} from '../repositories/user.repository';
import { getListUserRoute, getUserRoute, postUserRoute, putUserRoute, deleteUserRoute } from '../routes/user.route';
import { createRouter } from '../utils/router-factory';

export const userRouter = createRouter();

userRouter.openapi(getListUserRoute, async (c) => {
	const user = await getListUser(db);
	return c.json(user, 200);
});

userRouter.openapi(getUserRoute, async (c) => {
	const { id } = c.req.valid('param');
	const user = await getUserById(db, id);
	return c.json(user, 200);
});

userRouter.openapi(postUserRoute, async (c) => {
	const data = c.req.valid('json');
	const newUser = UserSchema.parse(await postUser(db, data))
	return c.json(newUser, 201)
});

userRouter.openapi(putUserRoute, async (c) => {
	const data = c.req.valid('json');
	const { id } = c.req.valid('param');
	const user = await putUser(db, data, id);

	if (!user) return c.json({ error: 'User not found' }, 404);
	return c.json(user, 201)
});

userRouter.openapi(deleteUserRoute, async (c) => {
  const { id } = c.req.valid('param');
  const user = await deleteUser(db, id);

  if (!user) return c.json({ error: 'User not found' }, 404);
  return c.json(user, 200);
});
