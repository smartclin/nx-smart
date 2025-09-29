import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { DoctorIncludeObjectSchema as DoctorIncludeObjectSchema } from './objects/DoctorInclude.schema';
import { DoctorOrderByWithRelationInputObjectSchema as DoctorOrderByWithRelationInputObjectSchema } from './objects/DoctorOrderByWithRelationInput.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './objects/DoctorWhereInput.schema';
import { DoctorWhereUniqueInputObjectSchema as DoctorWhereUniqueInputObjectSchema } from './objects/DoctorWhereUniqueInput.schema';
import { DoctorScalarFieldEnumSchema } from './enums/DoctorScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DoctorFindManySelectSchema: z.ZodType<Prisma.DoctorSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    specialization: z.boolean().optional(),
    licenseNumber: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    department: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    availabilityStatus: z.boolean().optional(),
    isActive: z.boolean().optional(),
    type: z.boolean().optional(),
    workingDays: z.boolean().optional(),
    appointments: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Prescription: z.boolean().optional(),
    Encounter: z.boolean().optional(),
    MedicalRecords: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DoctorSelect>;

export const DoctorFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    specialization: z.boolean().optional(),
    licenseNumber: z.boolean().optional(),
    phone: z.boolean().optional(),
    address: z.boolean().optional(),
    department: z.boolean().optional(),
    img: z.boolean().optional(),
    colorCode: z.boolean().optional(),
    availabilityStatus: z.boolean().optional(),
    isActive: z.boolean().optional(),
    type: z.boolean().optional(),
    workingDays: z.boolean().optional(),
    appointments: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Prescription: z.boolean().optional(),
    Encounter: z.boolean().optional(),
    MedicalRecords: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const DoctorFindManySchema: z.ZodType<Prisma.DoctorFindManyArgs> = z.object({ select: DoctorFindManySelectSchema.optional(), include: z.lazy(() => DoctorIncludeObjectSchema.optional()), orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DoctorFindManyArgs>;

export const DoctorFindManyZodSchema = z.object({ select: DoctorFindManySelectSchema.optional(), include: z.lazy(() => DoctorIncludeObjectSchema.optional()), orderBy: z.union([DoctorOrderByWithRelationInputObjectSchema, DoctorOrderByWithRelationInputObjectSchema.array()]).optional(), where: DoctorWhereInputObjectSchema.optional(), cursor: DoctorWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DoctorScalarFieldEnumSchema, DoctorScalarFieldEnumSchema.array()]).optional() }).strict();