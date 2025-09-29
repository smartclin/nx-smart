import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';

export const LabTestFindUniqueSchema: z.ZodType<Prisma.LabTestFindUniqueArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LabTestFindUniqueArgs>;

export const LabTestFindUniqueZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema }).strict();