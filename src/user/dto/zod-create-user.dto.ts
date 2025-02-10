import { z } from 'zod';

export const zodCreateUserDto = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

export type CreateUserDto = z.infer<typeof zodCreateUserDto>;
