import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';

export const LabTestFindUniqueOrThrowSchema: z.ZodType<Prisma.LabTestFindUniqueOrThrowArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LabTestFindUniqueOrThrowArgs>;

export const LabTestFindUniqueOrThrowZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema }).strict();