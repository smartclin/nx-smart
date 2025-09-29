import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { EncounterIncludeObjectSchema as EncounterIncludeObjectSchema } from './objects/EncounterInclude.schema';
import { EncounterOrderByWithRelationInputObjectSchema as EncounterOrderByWithRelationInputObjectSchema } from './objects/EncounterOrderByWithRelationInput.schema';
import { EncounterWhereInputObjectSchema as EncounterWhereInputObjectSchema } from './objects/EncounterWhereInput.schema';
import { EncounterWhereUniqueInputObjectSchema as EncounterWhereUniqueInputObjectSchema } from './objects/EncounterWhereUniqueInput.schema';
import { EncounterScalarFieldEnumSchema } from './enums/EncounterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EncounterFindManySelectSchema: z.ZodType<Prisma.EncounterSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    date: z.boolean().optional(),
    type: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    treatment: z.boolean().optional(),
    notes: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    medical: z.boolean().optional(),
    vitalSigns: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EncounterSelect>;

export const EncounterFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    doctorId: z.boolean().optional(),
    doctor: z.boolean().optional(),
    date: z.boolean().optional(),
    type: z.boolean().optional(),
    diagnosis: z.boolean().optional(),
    treatment: z.boolean().optional(),
    notes: z.boolean().optional(),
    medicalId: z.boolean().optional(),
    medical: z.boolean().optional(),
    vitalSigns: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EncounterFindManySchema: z.ZodType<Prisma.EncounterFindManyArgs> = z.object({ select: EncounterFindManySelectSchema.optional(), include: z.lazy(() => EncounterIncludeObjectSchema.optional()), orderBy: z.union([EncounterOrderByWithRelationInputObjectSchema, EncounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: EncounterWhereInputObjectSchema.optional(), cursor: EncounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EncounterScalarFieldEnumSchema, EncounterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EncounterFindManyArgs>;

export const EncounterFindManyZodSchema = z.object({ select: EncounterFindManySelectSchema.optional(), include: z.lazy(() => EncounterIncludeObjectSchema.optional()), orderBy: z.union([EncounterOrderByWithRelationInputObjectSchema, EncounterOrderByWithRelationInputObjectSchema.array()]).optional(), where: EncounterWhereInputObjectSchema.optional(), cursor: EncounterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EncounterScalarFieldEnumSchema, EncounterScalarFieldEnumSchema.array()]).optional() }).strict();