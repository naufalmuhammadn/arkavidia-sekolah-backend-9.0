import { z } from 'zod';

const EnvSchema = z.object({
	DATABASE_URL: z.string(),
	JWT_SECRET: z.string(),
});

const result = EnvSchema.safeParse(process.env);
if (!result.success) {
	console.error('Invalid environment variables: ');
	console.error(result.error.flatten().fieldErrors);
	process.exit(1);
}

export const env = result.data;
