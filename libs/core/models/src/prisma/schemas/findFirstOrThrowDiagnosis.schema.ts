import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DiagnosisIncludeObjectSchema as DiagnosisIncludeObjectSchema } from './objects/DiagnosisInclude.schema';
import { DiagnosisOrderByWithRelationInputObjectSchema as DiagnosisOrderByWithRelationInputObjectSchema } from './objects/DiagnosisOrderByWithRelationInput.schema';
import { DiagnosisWhereInputObjectSchema as DiagnosisWhereInputObjectSchema } from './objects/DiagnosisWhereInput.schema';
import { DiagnosisWhereUniqueInputObjectSchema as DiagnosisWhereUniqueInputObjectSchema } from './objects/DiagnosisWhereUniqueInput.schema';
import { DiagnosisScalarFieldEnumSchema } from './enums/DiagnosisScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DiagnosisFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DiagnosisSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    symptoms: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    notes: z.boolean().optional(),
    prescribedMedications: z.boolean().optional(),
    followUpPlan: z.boolean().optional(),
    medical: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DiagnosisSelect>;

export const DiagnosisFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    symptoms: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    notes: z.boolean().optional(),
    prescribedMedications: z.boolean().optional(),
    followUpPlan: z.boolean().optional(),
    medical: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DiagnosisFindFirstOrThrowSchema: z.ZodType<Prisma.DiagnosisFindFirstOrThrowArgs> = z.object({ select: DiagnosisFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DiagnosisIncludeObjectSchema.optional()), orderBy: z.union([DiagnosisOrderByWithRelationInputObjectSchema, DiagnosisOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiagnosisWhereInputObjectSchema.optional(), cursor: DiagnosisWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiagnosisScalarFieldEnumSchema, DiagnosisScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DiagnosisFindFirstOrThrowArgs>;

export const DiagnosisFindFirstOrThrowZodSchema = z.object({ select: DiagnosisFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DiagnosisIncludeObjectSchema.optional()), orderBy: z.union([DiagnosisOrderByWithRelationInputObjectSchema, DiagnosisOrderByWithRelationInputObjectSchema.array()]).optional(), where: DiagnosisWhereInputObjectSchema.optional(), cursor: DiagnosisWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DiagnosisScalarFieldEnumSchema, DiagnosisScalarFieldEnumSchema.array()]).optional() }).strict();