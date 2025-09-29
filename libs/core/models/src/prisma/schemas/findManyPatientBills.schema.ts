import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { PatientBillsIncludeObjectSchema as PatientBillsIncludeObjectSchema } from './objects/PatientBillsInclude.schema';
import { PatientBillsOrderByWithRelationInputObjectSchema as PatientBillsOrderByWithRelationInputObjectSchema } from './objects/PatientBillsOrderByWithRelationInput.schema';
import { PatientBillsWhereInputObjectSchema as PatientBillsWhereInputObjectSchema } from './objects/PatientBillsWhereInput.schema';
import { PatientBillsWhereUniqueInputObjectSchema as PatientBillsWhereUniqueInputObjectSchema } from './objects/PatientBillsWhereUniqueInput.schema';
import { PatientBillsScalarFieldEnumSchema } from './enums/PatientBillsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PatientBillsFindManySelectSchema: z.ZodType<Prisma.PatientBillsSelect> = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    serviceDate: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unitCost: z.boolean().optional(),
    totalCost: z.boolean().optional(),
    service: z.boolean().optional(),
    payment: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PatientBillsSelect>;

export const PatientBillsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    billId: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    serviceDate: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unitCost: z.boolean().optional(),
    totalCost: z.boolean().optional(),
    service: z.boolean().optional(),
    payment: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const PatientBillsFindManySchema: z.ZodType<Prisma.PatientBillsFindManyArgs> = z.object({ select: PatientBillsFindManySelectSchema.optional(), include: z.lazy(() => PatientBillsIncludeObjectSchema.optional()), orderBy: z.union([PatientBillsOrderByWithRelationInputObjectSchema, PatientBillsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientBillsWhereInputObjectSchema.optional(), cursor: PatientBillsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PatientBillsScalarFieldEnumSchema, PatientBillsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PatientBillsFindManyArgs>;

export const PatientBillsFindManyZodSchema = z.object({ select: PatientBillsFindManySelectSchema.optional(), include: z.lazy(() => PatientBillsIncludeObjectSchema.optional()), orderBy: z.union([PatientBillsOrderByWithRelationInputObjectSchema, PatientBillsOrderByWithRelationInputObjectSchema.array()]).optional(), where: PatientBillsWhereInputObjectSchema.optional(), cursor: PatientBillsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PatientBillsScalarFieldEnumSchema, PatientBillsScalarFieldEnumSchema.array()]).optional() }).strict();