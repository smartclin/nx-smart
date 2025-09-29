import { z } from 'zod';

export const FileTypeSchema = z.enum(['Image', 'Video'])

export type FileType = z.infer<typeof FileTypeSchema>;