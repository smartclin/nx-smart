import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';
import { LabTestCreateInputObjectSchema as LabTestCreateInputObjectSchema } from './objects/LabTestCreateInput.schema';
import { LabTestUncheckedCreateInputObjectSchema as LabTestUncheckedCreateInputObjectSchema } from './objects/LabTestUncheckedCreateInput.schema';
import { LabTestUpdateInputObjectSchema as LabTestUpdateInputObjectSchema } from './objects/LabTestUpdateInput.schema';
import { LabTestUncheckedUpdateInputObjectSchema as LabTestUncheckedUpdateInputObjectSchema } from './objects/LabTestUncheckedUpdateInput.schema';

export const LabTestUpsertOneSchema: z.ZodType<Prisma.LabTestUpsertArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema, create: z.union([ LabTestCreateInputObjectSchema, LabTestUncheckedCreateInputObjectSchema ]), update: z.union([ LabTestUpdateInputObjectSchema, LabTestUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LabTestUpsertArgs>;

export const LabTestUpsertOneZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), where: LabTestWhereUniqueInputObjectSchema, create: z.union([ LabTestCreateInputObjectSchema, LabTestUncheckedCreateInputObjectSchema ]), update: z.union([ LabTestUpdateInputObjectSchema, LabTestUncheckedUpdateInputObjectSchema ]) }).strict();