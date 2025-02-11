import { z } from 'zod';

export const zodCreateUserDto = z.object({
  name: z.string().min(3).max(20),
  username: z.string().min(3).max(20),
  age: z.number().int().min(18).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

export type CreateUserDto = z.infer<typeof zodCreateUserDto>;
