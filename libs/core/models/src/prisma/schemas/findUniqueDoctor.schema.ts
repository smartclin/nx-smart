import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorSelectObjectSchema as DoctorSelectObjectSchema } from './objects/DoctorSelect.schema';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';

export const DoctorFindUniqueSchema: z.ZodType<Prisma.DoctorFindUniqueArgs> = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorFindUniqueArgs>;

export const DoctorFindUniqueZodSchema = z.object({ select: DoctorSelectObjectSchema.optional(), include: DoctorIncludeObjectSchema.optional(), where: DoctorWhereUniqueInputObjectSchema }).strict();