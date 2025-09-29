import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { MedicalRecordsIncludeObjectSchema as MedicalRecordsIncludeObjectSchema } from './objects/MedicalRecordsInclude.schema';
import { MedicalRecordsOrderByWithRelationInputObjectSchema as MedicalRecordsOrderByWithRelationInputObjectSchema } from './objects/MedicalRecordsOrderByWithRelationInput.schema';
import { MedicalRecordsWhereInputObjectSchema as MedicalRecordsWhereInputObjectSchema } from './objects/MedicalRecordsWhereInput.schema';
import { MedicalRecordsWhereUniqueInputObjectSchema as MedicalRecordsWhereUniqueInputObjectSchema } from './objects/MedicalRecordsWhereUniqueInput.schema';
import { MedicalRecordsScalarFieldEnumSchema } from './enums/MedicalRecordsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MedicalRecordsFindManySelectSchema: z.ZodType<Prisma.MedicalRecordsSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    treatmentPlan: z.boolean().optional(),
    prescriptions: z.boolean().optional(),
    labRequest: z.boolean().optional(),
    notes: z.boolean().optional(),
    appointment: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctor: z.boolean().optional(),
    labTests: z.boolean().optional(),
    encounters: z.boolean().optional(),
    diagnoses: z.boolean().optional(),
    prescriptionsList: z.boolean().optional(),
    vitalSigns: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsSelect>;

export const MedicalRecordsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    appointmentId: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    treatmentPlan: z.boolean().optional(),
    prescriptions: z.boolean().optional(),
    labRequest: z.boolean().optional(),
    notes: z.boolean().optional(),
    appointment: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctor: z.boolean().optional(),
    labTests: z.boolean().optional(),
    encounters: z.boolean().optional(),
    diagnoses: z.boolean().optional(),
    prescriptionsList: z.boolean().optional(),
    vitalSigns: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MedicalRecordsFindManySchema: z.ZodType<Prisma.MedicalRecordsFindManyArgs> = z.object({ select: MedicalRecordsFindManySelectSchema.optional(), include: z.lazy(() => MedicalRecordsIncludeObjectSchema.optional()), orderBy: z.union([MedicalRecordsOrderByWithRelationInputObjectSchema, MedicalRecordsOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicalRecordsWhereInputObjectSchema.optional(), cursor: MedicalRecordsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MedicalRecordsScalarFieldEnumSchema, MedicalRecordsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MedicalRecordsFindManyArgs>;

export const MedicalRecordsFindManyZodSchema = z.object({ select: MedicalRecordsFindManySelectSchema.optional(), include: z.lazy(() => MedicalRecordsIncludeObjectSchema.optional()), orderBy: z.union([MedicalRecordsOrderByWithRelationInputObjectSchema, MedicalRecordsOrderByWithRelationInputObjectSchema.array()]).optional(), where: MedicalRecordsWhereInputObjectSchema.optional(), cursor: MedicalRecordsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MedicalRecordsScalarFieldEnumSchema, MedicalRecordsScalarFieldEnumSchema.array()]).optional() }).strict();