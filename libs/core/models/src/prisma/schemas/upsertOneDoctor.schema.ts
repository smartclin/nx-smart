import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorCreateInputObjectSchema as DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema';
import { DoctorUncheckedCreateInputObjectSchema as DoctorUncheckedCreateInputObjectSchema } from './objects/DoctorUncheckedCreateInput.schema';
import { DoctorUpdateInputObjectSchema as DoctorUpdateInputObjectSchema } from './objects/DoctorUpdateInput.schema';
import { DoctorUncheckedUpdateInputObjectSchema as DoctorUncheckedUpdateInputObjectSchema } from './objects/DoctorUncheckedUpdateInput.schema';

export const DoctorUpsertOneSchema: z.ZodType<Prisma.DoctorUpsertArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema, create: z.union([ DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DoctorUpsertArgs>;

export const DoctorUpsertOneZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema, create: z.union([ DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema ]), update: z.union([ DoctorUpdateInputObjectSchema, DoctorUncheckedUpdateInputObjectSchema ]) }).strict();