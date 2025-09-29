import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { ImmunizationIncludeObjectSchema as ImmunizationIncludeObjectSchema } from './objects/ImmunizationInclude.schema';
import { ImmunizationOrderByWithRelationInputObjectSchema as ImmunizationOrderByWithRelationInputObjectSchema } from './objects/ImmunizationOrderByWithRelationInput.schema';
import { ImmunizationWhereInputObjectSchema as ImmunizationWhereInputObjectSchema } from './objects/ImmunizationWhereInput.schema';
import { ImmunizationWhereUniqueInputObjectSchema as ImmunizationWhereUniqueInputObjectSchema } from './objects/ImmunizationWhereUniqueInput.schema';
import { ImmunizationScalarFieldEnumSchema } from './enums/ImmunizationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ImmunizationFindManySelectSchema: z.ZodType<Prisma.ImmunizationSelect> = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    vaccine: z.boolean().optional(),
    date: z.boolean().optional(),
    dose: z.boolean().optional(),
    lotNumber: z.boolean().optional(),
    administeredByStaffId: z.boolean().optional(),
    administeredBy: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ImmunizationSelect>;

export const ImmunizationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    patientId: z.boolean().optional(),
    patient: z.boolean().optional(),
    vaccine: z.boolean().optional(),
    date: z.boolean().optional(),
    dose: z.boolean().optional(),
    lotNumber: z.boolean().optional(),
    administeredByStaffId: z.boolean().optional(),
    administeredBy: z.boolean().optional(),
    notes: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ImmunizationFindManySchema: z.ZodType<Prisma.ImmunizationFindManyArgs> = z.object({ select: ImmunizationFindManySelectSchema.optional(), include: z.lazy(() => ImmunizationIncludeObjectSchema.optional()), orderBy: z.union([ImmunizationOrderByWithRelationInputObjectSchema, ImmunizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImmunizationWhereInputObjectSchema.optional(), cursor: ImmunizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImmunizationScalarFieldEnumSchema, ImmunizationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ImmunizationFindManyArgs>;

export const ImmunizationFindManyZodSchema = z.object({ select: ImmunizationFindManySelectSchema.optional(), include: z.lazy(() => ImmunizationIncludeObjectSchema.optional()), orderBy: z.union([ImmunizationOrderByWithRelationInputObjectSchema, ImmunizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImmunizationWhereInputObjectSchema.optional(), cursor: ImmunizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImmunizationScalarFieldEnumSchema, ImmunizationScalarFieldEnumSchema.array()]).optional() }).strict();