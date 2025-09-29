import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PrescriptionIncludeObjectSchema as PrescriptionIncludeObjectSchema } from './objects/PrescriptionInclude.schema';
import { PrescriptionOrderByWithRelationInputObjectSchema as PrescriptionOrderByWithRelationInputObjectSchema } from './objects/PrescriptionOrderByWithRelationInput.schema';
import { PrescriptionWhereInputObjectSchema as PrescriptionWhereInputObjectSchema } from './objects/PrescriptionWhereInput.schema';
import { PrescriptionWhereUniqueInputObjectSchema as PrescriptionWhereUniqueInputObjectSchema } from './objects/PrescriptionWhereUniqueInput.schema';
import { PrescriptionScalarFieldEnumSchema } from './enums/PrescriptionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PrescriptionFindFirstSelectSchema: z.ZodType<Prisma.PrescriptionSelect> = z.object({
    id: z.boolean().optional(),
    medicalRecordId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicationName: z.boolean().optional(),
    dosage: z.boolean().optional(),
    frequency: z.boolean().optional(),
    duration: z.boolean().optional(),
    instructions: z.boolean().optional(),
    issuedDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    status: z.boolean().optional(),
    medicalRecord: z.boolean().optional(),
    doctor: z.boolean().optional(),
    patient: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PrescriptionSelect>;

export const PrescriptionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    medicalRecordId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicationName: z.boolean().optional(),
    dosage: z.boolean().optional(),
    frequency: z.boolean().optional(),
    duration: z.boolean().optional(),
    instructions: z.boolean().optional(),
    issuedDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    status: z.boolean().optional(),
    medicalRecord: z.boolean().optional(),
    doctor: z.boolean().optional(),
    patient: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PrescriptionFindFirstSchema: z.ZodType<Prisma.PrescriptionFindFirstArgs> = z.object({ select: PrescriptionFindFirstSelectSchema.optional(), include: z.lazy(() => PrescriptionIncludeObjectSchema.optional()), orderBy: z.union([PrescriptionOrderByWithRelationInputObjectSchema, PrescriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PrescriptionWhereInputObjectSchema.optional(), cursor: PrescriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrescriptionScalarFieldEnumSchema, PrescriptionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PrescriptionFindFirstArgs>;

export const PrescriptionFindFirstZodSchema = z.object({ select: PrescriptionFindFirstSelectSchema.optional(), include: z.lazy(() => PrescriptionIncludeObjectSchema.optional()), orderBy: z.union([PrescriptionOrderByWithRelationInputObjectSchema, PrescriptionOrderByWithRelationInputObjectSchema.array()]).optional(), where: PrescriptionWhereInputObjectSchema.optional(), cursor: PrescriptionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrescriptionScalarFieldEnumSchema, PrescriptionScalarFieldEnumSchema.array()]).optional() }).strict();