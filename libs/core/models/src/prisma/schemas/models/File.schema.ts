import { z } from 'zod';
import { FileTypeSchema } from '../enums/FileType.schema';

export const FileSchema = z.object({
  id: z.string(),
  key: z.string(),
  size: z.number().int(),
  type: FileTypeSchema,
  isPublic: z.boolean(),
  userId: z.string().nullish(),
  adminId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type File = z.infer<typeof FileSchema>;
