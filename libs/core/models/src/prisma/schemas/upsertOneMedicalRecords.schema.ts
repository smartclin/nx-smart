import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsSelectObjectSchema as MedicalRecordsSelectObjectSchema } from './objects/MedicalRecordsSelect.schema';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './objects/MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsCreateInputObjectSchema as MedicalRecordsCreateInputObjectSchema } from './objects/MedicalRecordsCreateInput.schema';
import { MedicalRecordsUncheckedCreateInputObjectSchema as MedicalRecordsUncheckedCreateInputObjectSchema } from './objects/MedicalRecordsUncheckedCreateInput.schema';
import { MedicalRecordsUpdateInputObjectSchema as MedicalRecordsUpdateInputObjectSchema } from './objects/MedicalRecordsUpdateInput.schema';
import { MedicalRecordsUncheckedUpdateInputObjectSchema as MedicalRecordsUncheckedUpdateInputObjectSchema } from './objects/MedicalRecordsUncheckedUpdateInput.schema';

export const MedicalRecordsUpsertOneSchema: z.ZodType<Prisma.MedicalRecordsUpsertArgs> = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema, create: z.union([ MedicalRecordsCreateInputObjectSchema, MedicalRecordsUncheckedCreateInputObjectSchema ]), update: z.union([ MedicalRecordsUpdateInputObjectSchema, MedicalRecordsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsUpsertArgs>;

export const MedicalRecordsUpsertOneZodSchema = z.object({ select: MedicalRecordsSelectObjectSchema.optional(), include: MedicalRecordsIncludeObjectSchema.optional(), where: MedicalRecordsWhereUniqueInputObjectSchema, create: z.union([ MedicalRecordsCreateInputObjectSchema, MedicalRecordsUncheckedCreateInputObjectSchema ]), update: z.union([ MedicalRecordsUpdateInputObjectSchema, MedicalRecordsUncheckedUpdateInputObjectSchema ]) }).strict();