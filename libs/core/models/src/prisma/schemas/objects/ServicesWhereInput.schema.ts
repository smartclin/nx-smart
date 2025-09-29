import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { EnumServiceCategoryNullableFilterObjectSchema as EnumServiceCategoryNullableFilterObjectSchema } from './EnumServiceCategoryNullableFilter.schema';
import { ServiceCategorySchema } from '../enums/ServiceCategory.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { LabTestListRelationFilterObjectSchema as LabTestListRelationFilterObjectSchema } from './LabTestListRelationFilter.schema';
import { PatientBillsListRelationFilterObjectSchema as PatientBillsListRelationFilterObjectSchema } from './PatientBillsListRelationFilter.schema';
import { AppointmentListRelationFilterObjectSchema as AppointmentListRelationFilterObjectSchema } from './AppointmentListRelationFilter.schema'

const serviceswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServicesWhereInputObjectSchema), z.lazy(() => ServicesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServicesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServicesWhereInputObjectSchema), z.lazy(() => ServicesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  serviceName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  category: z.union([z.lazy(() => EnumServiceCategoryNullableFilterObjectSchema), ServiceCategorySchema]).optional().nullable(),
  duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isAvailable: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  labtests: z.lazy(() => LabTestListRelationFilterObjectSchema).optional(),
  bills: z.lazy(() => PatientBillsListRelationFilterObjectSchema).optional(),
  appointments: z.lazy(() => AppointmentListRelationFilterObjectSchema).optional()
}).strict();
export const ServicesWhereInputObjectSchema: z.ZodType<Prisma.ServicesWhereInput> = serviceswhereinputSchema as unknown as z.ZodType<Prisma.ServicesWhereInput>;
export const ServicesWhereInputObjectZodSchema = serviceswhereinputSchema;
