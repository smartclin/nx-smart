import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestCreateInputObjectSchema as LabTestCreateInputObjectSchema } from './objects/LabTestCreateInput.schema';
import { LabTestUncheckedCreateInputObjectSchema as LabTestUncheckedCreateInputObjectSchema } from './objects/LabTestUncheckedCreateInput.schema';

export const LabTestCreateOneSchema: z.ZodType<Prisma.LabTestCreateArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), data: z.union([LabTestCreateInputObjectSchema, LabTestUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LabTestCreateArgs>;

export const LabTestCreateOneZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), include: LabTestIncludeObjectSchema.optional(), data: z.union([LabTestCreateInputObjectSchema, LabTestUncheckedCreateInputObjectSchema]) }).strict();