import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { VitalSignsIncludeObjectSchema as VitalSignsIncludeObjectSchema } from './objects/VitalSignsInclude.schema';
import { VitalSignsOrderByWithRelationInputObjectSchema as VitalSignsOrderByWithRelationInputObjectSchema } from './objects/VitalSignsOrderByWithRelationInput.schema';
import { VitalSignsWhereInputObjectSchema as VitalSignsWhereInputObjectSchema } from './objects/VitalSignsWhereInput.schema';
import { VitalSignsWhereUniqueInputObjectSchema as VitalSignsWhereUniqueInputObjectSchema } from './objects/VitalSignsWhereUniqueInput.schema';
import { VitalSignsScalarFieldEnumSchema } from './enums/VitalSignsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VitalSignsFindManySelectSchema: z.ZodType<Prisma.VitalSignsSelect> = z.object({
    id: z.boolean().optional(),
    encounterId: z.boolean().optional(),
    encounter: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    medical: z.boolean().optional(),
    height: z.boolean().optional(),
    weight: z.boolean().optional(),
    temperature: z.boolean().optional(),
    systolic: z.boolean().optional(),
    diastolic: z.boolean().optional(),
    heartRate: z.boolean().optional(),
    respiratoryRate: z.boolean().optional(),
    oxygenSaturation: z.boolean().optional(),
    recordedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.VitalSignsSelect>;

export const VitalSignsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    encounterId: z.boolean().optional(),
    encounter: z.boolean().optional(),
    patientId: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    medical: z.boolean().optional(),
    height: z.boolean().optional(),
    weight: z.boolean().optional(),
    temperature: z.boolean().optional(),
    systolic: z.boolean().optional(),
    diastolic: z.boolean().optional(),
    heartRate: z.boolean().optional(),
    respiratoryRate: z.boolean().optional(),
    oxygenSaturation: z.boolean().optional(),
    recordedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const VitalSignsFindManySchema: z.ZodType<Prisma.VitalSignsFindManyArgs> = z.object({ select: VitalSignsFindManySelectSchema.optional(), include: z.lazy(() => VitalSignsIncludeObjectSchema.optional()), orderBy: z.union([VitalSignsOrderByWithRelationInputObjectSchema, VitalSignsOrderByWithRelationInputObjectSchema.array()]).optional(), where: VitalSignsWhereInputObjectSchema.optional(), cursor: VitalSignsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VitalSignsScalarFieldEnumSchema, VitalSignsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.VitalSignsFindManyArgs>;

export const VitalSignsFindManyZodSchema = z.object({ select: VitalSignsFindManySelectSchema.optional(), include: z.lazy(() => VitalSignsIncludeObjectSchema.optional()), orderBy: z.union([VitalSignsOrderByWithRelationInputObjectSchema, VitalSignsOrderByWithRelationInputObjectSchema.array()]).optional(), where: VitalSignsWhereInputObjectSchema.optional(), cursor: VitalSignsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([VitalSignsScalarFieldEnumSchema, VitalSignsScalarFieldEnumSchema.array()]).optional() }).strict();