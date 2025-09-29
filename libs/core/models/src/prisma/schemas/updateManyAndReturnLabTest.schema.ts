import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestSelectObjectSchema as LabTestSelectObjectSchema } from './objects/LabTestSelect.schema';
import { LabTestUpdateManyMutationInputObjectSchema as LabTestUpdateManyMutationInputObjectSchema } from './objects/LabTestUpdateManyMutationInput.schema';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './objects/LabTestWhereInput.schema';

export const LabTestUpdateManyAndReturnSchema: z.ZodType<Prisma.LabTestUpdateManyAndReturnArgs> = z.object({ select: LabTestSelectObjectSchema.optional(), data: LabTestUpdateManyMutationInputObjectSchema, where: LabTestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LabTestUpdateManyAndReturnArgs>;

export const LabTestUpdateManyAndReturnZodSchema = z.object({ select: LabTestSelectObjectSchema.optional(), data: LabTestUpdateManyMutationInputObjectSchema, where: LabTestWhereInputObjectSchema.optional() }).strict();