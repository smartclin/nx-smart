import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorUpdateManyMutationInputObjectSchema as DoctorUpdateManyMutationInputObjectSchema } from './objects/DoctorUpdateManyMutationInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';

export const DoctorUpdateManyAndReturnSchema: z.ZodType<Prisma.DoctorUpdateManyAndReturnArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), data: DoctorUpdateManyMutationInputObjectSchema, where: DoctorWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DoctorUpdateManyAndReturnArgs>;

export const DoctorUpdateManyAndReturnZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), data: DoctorUpdateManyMutationInputObjectSchema, where: DoctorWhereInputObjectSchema.optional() }).strict();