import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestUpdateInputObjectSchema as LabTestUpdateInputObjectSchema } from './objects/LabTestUpdateInput.schema';
import { LabTestUncheckedUpdateInputObjectSchema as LabTestUncheckedUpdateInputObjectSchema } from './objects/LabTestUncheckedUpdateInput.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';

export const LabTestUpdateOneSchema: z.ZodType<Prisma.LabTestUpdateArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), data: z.union([LabTestUpdateInputObjectSchema, LabTestUncheckedUpdateInputObjectSchema]), where: LabTestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LabTestUpdateArgs>;

export const LabTestUpdateOneZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), data: z.union([LabTestUpdateInputObjectSchema, LabTestUncheckedUpdateInputObjectSchema]), where: LabTestWhereUniqueInputObjectSchema }).strict();