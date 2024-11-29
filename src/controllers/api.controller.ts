import { OpenAPIHono } from '@hono/zod-openapi';
import { healthRouter } from './health.controller';
import { todoRouter } from './todo.controller';
import { userRouter } from './user.controller';

const unprotectedApiRouter = new OpenAPIHono();
unprotectedApiRouter.route('/', healthRouter);

const protectedApiRouter = new OpenAPIHono();

export const apiRouter = new OpenAPIHono();
apiRouter.route('/', unprotectedApiRouter);
apiRouter.route('/', protectedApiRouter);
apiRouter.route('/', todoRouter);
apiRouter.route('/', userRouter);