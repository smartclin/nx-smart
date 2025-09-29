import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { StatusSchema } from '../enums/Status.schema';
import { ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInputObjectSchema as ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInputObjectSchema } from './ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  userId: z.string(),
  address: z.string(),
  department: z.string().optional().nullable(),
  img: z.string().optional().nullable(),
  licenseNumber: z.string().optional().nullable(),
  colorCode: z.string().optional().nullable(),
  hireDate: z.coerce.date().optional().nullable(),
  salary: z.number().optional().nullable(),
  role: RoleSchema,
  status: StatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  immunizations: z.lazy(() => ImmunizationUncheckedCreateNestedManyWithoutAdministeredByInputObjectSchema).optional()
}).strict();
export const StaffUncheckedCreateWithoutGrowthChartInputObjectSchema: z.ZodType<Prisma.StaffUncheckedCreateWithoutGrowthChartInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUncheckedCreateWithoutGrowthChartInput>;
export const StaffUncheckedCreateWithoutGrowthChartInputObjectZodSchema = makeSchema();
