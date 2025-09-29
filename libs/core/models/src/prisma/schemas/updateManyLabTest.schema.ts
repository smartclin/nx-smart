import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestUpdateManyMutationInputObjectSchema as LabTestUpdateManyMutationInputObjectSchema } from './objects/LabTestUpdateManyMutationInput.schema';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './objects/LabTestWhereInput.schema';

export const LabTestUpdateManySchema: z.ZodType<Prisma.LabTestUpdateManyArgs> = z.object({ data: LabTestUpdateManyMutationInputObjectSchema, where: LabTestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LabTestUpdateManyArgs>;

export const LabTestUpdateManyZodSchema = z.object({ data: LabTestUpdateManyMutationInputObjectSchema, where: LabTestWhereInputObjectSchema.optional() }).strict();