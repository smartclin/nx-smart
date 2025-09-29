import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { FileSelectObjectSchema as FileSelectObjectSchema } from './objects/FileSelect.schema';
import { FileIncludeObjectSchema as FileIncludeObjectSchema } from './objects/FileInclude.schema';
import { FileWhereUniqueInputObjectSchema as FileWhereUniqueInputObjectSchema } from './objects/FileWhereUniqueInput.schema';

export const FileFindUniqueOrThrowSchema: z.ZodType<Prisma.FileFindUniqueOrThrowArgs> = z.object({ select: FileSelectObjectSchema.optional(), include: FileIncludeObjectSchema.optional(), where: FileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileFindUniqueOrThrowArgs>;

export const FileFindUniqueOrThrowZodSchema = z.object({ select: FileSelectObjectSchema.optional(), include: FileIncludeObjectSchema.optional(), where: FileWhereUniqueInputObjectSchema }).strict();