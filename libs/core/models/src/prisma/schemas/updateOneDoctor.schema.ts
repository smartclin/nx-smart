import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorUpdateInputObjectSchema as DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema';
import { DoctorUncheckedUpdateInputObjectSchema as DoctorUncheckedUpdateInputObjectSchema } from './objects/DoctorUncheckedUpdateInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';

export const DoctorUpdateOneSchema: z.ZodType<Prisma.DoctorUpdateArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema]), where: DoctorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorUpdateArgs>;

export const DoctorUpdateOneZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema]), where: DoctorWhereUniqueInputObjectSchema }).strict();