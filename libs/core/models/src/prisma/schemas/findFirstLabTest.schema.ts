import type { Prisma } from '../../../../../../node_modules/.prisma/client';
import { z } from 'zod';
import { LabTestIncludeObjectSchema as LabTestIncludeObjectSchema } from './objects/LabTestInclude.schema';
import { LabTestOrderByWithRelationInputObjectSchema as LabTestOrderByWithRelationInputObjectSchema } from './objects/LabTestOrderByWithRelationInput.schema';
import { LabTestWhereInputObjectSchema as LabTestWhereInputObjectSchema } from './objects/LabTestWhereInput.schema';
import { LabTestWhereUniqueInputObjectSchema as LabTestWhereUniqueInputObjectSchema } from './objects/LabTestWhereUniqueInput.schema';
import { LabTestScalarFieldEnumSchema } from './enums/LabTestScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabTestFindFirstSelectSchema: z.ZodType<Prisma.LabTestSelect> = z.object({
    id: z.boolean().optional(),
    recordId: z.boolean().optional(),
    testDate: z.boolean().optional(),
    result: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    services: z.boolean().optional(),
    medicalRecord: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LabTestSelect>;

export const LabTestFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    recordId: z.boolean().optional(),
    testDate: z.boolean().optional(),
    result: z.boolean().optional(),
    status: z.boolean().optional(),
    notes: z.boolean().optional(),
    serviceId: z.boolean().optional(),
    services: z.boolean().optional(),
    medicalRecord: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const LabTestFindFirstSchema: z.ZodType<Prisma.LabTestFindFirstArgs> = z.object({ select: LabTestFindFirstSelectSchema.optional(), include: z.lazy(() => LabTestIncludeObjectSchema.optional()), orderBy: z.union([LabTestOrderByWithRelationInputObjectSchema, LabTestOrderByWithRelationInputObjectSchema.array()]).optional(), where: LabTestWhereInputObjectSchema.optional(), cursor: LabTestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LabTestScalarFieldEnumSchema, LabTestScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LabTestFindFirstArgs>;

export const LabTestFindFirstZodSchema = z.object({ select: LabTestFindFirstSelectSchema.optional(), include: z.lazy(() => LabTestIncludeObjectSchema.optional()), orderBy: z.union([LabTestOrderByWithRelationInputObjectSchema, LabTestOrderByWithRelationInputObjectSchema.array()]).optional(), where: LabTestWhereInputObjectSchema.optional(), cursor: LabTestWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LabTestScalarFieldEnumSchema, LabTestScalarFieldEnumSchema.array()]).optional() }).strict();