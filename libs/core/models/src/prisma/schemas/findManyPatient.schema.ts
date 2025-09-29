import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientIncludeObjectSchema as PatientIncludeObjectSchema } from './objects/PatientInclude.schema';
import { PatientOrderByWithRelationInputObjectSchema as PatientOrderByWithRelationInputObjectSchema } from './objects/PatientOrderByWithRelationInput.schema';
import { PatientWhereInputObjectSchema as PatientWhereInputObjectSchema } from './objects/PatientWhereInput.schema';
import { PatientWhereUniqueInputObjectSchema as PatientWhereUniqueInputObjectSchema } from './objects/PatientWhereUniqueInput.schema';
import { PatientScalarFieldEnumSchema } from './enums/PatientScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientFindManySelectSchema: z.ZodType<Prisma.PatientSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    gender: z.boolean().optional(),
    phone: z.boolean().optional(),
    email: z.boolean().optional(),
    nutritionalStatus: z.boolean().optional(),
    address: z.boolean().optional(),
    emergencyContactName: z.boolean().optional(),
    emergencyContactNumber: z.boolean().optional(),
    relation: z.boolean().optional(),
    bloodGroup: z.boolean().optional(),
    allergies: z.boolean().optional(),
    medicalConditions: z.boolean().optional(),
    medicalHistory: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    role: z.boolean().optional(),
    appointments: z.boolean().optional(),
    medical: z.boolean().optional(),
    payments: z.boolean().optional(),
    encounters: z.boolean().optional(),
    immunizations: z.boolean().optional(),
    growthCharts: z.boolean().optional(),
    feedingLogs: z.boolean().optional(),
    billing: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    status: z.boolean().optional(),
    prescriptions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PatientSelect>;

export const PatientFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    gender: z.boolean().optional(),
    phone: z.boolean().optional(),
    email: z.boolean().optional(),
    nutritionalStatus: z.boolean().optional(),
    address: z.boolean().optional(),
    emergencyContactName: z.boolean().optional(),
    emergencyContactNumber: z.boolean().optional(),
    relation: z.boolean().optional(),
    bloodGroup: z.boolean().optional(),
    allergies: z.boolean().optional(),
    medicalConditions: z.boolean().optional(),
    medicalHistory: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    role: z.boolean().optional(),
    appointments: z.boolean().optional(),
    medical: z.boolean().optional(),
    payments: z.boolean().optional(),
    encounters: z.boolean().optional(),
    immunizations: z.boolean().optional(),
    growthCharts: z.boolean().optional(),
    feedingLogs: z.boolean().optional(),
    billing: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    status: z.boolean().optional(),
    prescriptions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PatientFindManySchema: z.ZodType<Prisma.PatientFindManyArgs> = z.object({ select: PatientFindManySelectSchema.optional(), include: z.lazy(() => PatientIncludeObjectSchema.optional()), orderBy: z.union([PatientOrderByWithRelationInputObjectSchema, PatientOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientWhereInputObjectSchema.optional(), cursor: PatientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PatientFindManyArgs>;

export const PatientFindManyZodSchema = z.object({ select: PatientFindManySelectSchema.optional(), include: z.lazy(() => PatientIncludeObjectSchema.optional()), orderBy: z.union([PatientOrderByWithRelationInputObjectSchema, PatientOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientWhereInputObjectSchema.optional(), cursor: PatientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PatientScalarFieldEnumSchema, PatientScalarFieldEnumSchema.array()]).optional() }).strict();