import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorCreateInputObjectSchema as DoctorCreateInputObjectSchema } from './objects/DoctorCreateInput.schema';
import { DoctorUncheckedCreateInputObjectSchema as DoctorUncheckedCreateInputObjectSchema } from './objects/DoctorUncheckedCreateInput.schema';

export const DoctorCreateOneSchema: z.ZodType<Prisma.DoctorCreateArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DoctorCreateArgs>;

export const DoctorCreateOneZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), data: z.union([DoctorCreateInputObjectSchema, DoctorUncheckedCreateInputObjectSchema]) }).strict();