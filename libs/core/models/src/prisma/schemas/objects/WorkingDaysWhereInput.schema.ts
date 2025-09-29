import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DoctorScalarRelationFilterObjectSchema as DoctorScalarRelationFilterObjectSchema } from './DoctorScalarRelationFilter.schema';
import { DoctorWhereInputObjectSchema as DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const workingdayswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkingDaysWhereInputObjectSchema), z.lazy(() => WorkingDaysWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkingDaysWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkingDaysWhereInputObjectSchema), z.lazy(() => WorkingDaysWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  doctorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  day: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  startTime: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  closeTime: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  doctor: z.union([z.lazy(() => DoctorScalarRelationFilterObjectSchema), z.lazy(() => DoctorWhereInputObjectSchema)]).optional()
}).strict();
export const WorkingDaysWhereInputObjectSchema: z.ZodType<Prisma.WorkingDaysWhereInput> = workingdayswhereinputSchema as unknown as z.ZodType<Prisma.WorkingDaysWhereInput>;
export const WorkingDaysWhereInputObjectZodSchema = workingdayswhereinputSchema;
