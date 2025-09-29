import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { ReminderScalarWhereInputObjectSchema as ReminderScalarWhereInputObjectSchema } from './ReminderScalarWhereInput.schema';
import { ReminderUpdateManyMutationInputObjectSchema as ReminderUpdateManyMutationInputObjectSchema } from './ReminderUpdateManyMutationInput.schema';
import { ReminderUncheckedUpdateManyWithoutAppointmentInputObjectSchema as ReminderUncheckedUpdateManyWithoutAppointmentInputObjectSchema } from './ReminderUncheckedUpdateManyWithoutAppointmentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReminderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReminderUpdateManyMutationInputObjectSchema), z.lazy(() => ReminderUncheckedUpdateManyWithoutAppointmentInputObjectSchema)])
}).strict();
export const ReminderUpdateManyWithWhereWithoutAppointmentInputObjectSchema: z.ZodType<Prisma.ReminderUpdateManyWithWhereWithoutAppointmentInput> = makeSchema() as unknown as z.ZodType<Prisma.ReminderUpdateManyWithWhereWithoutAppointmentInput>;
export const ReminderUpdateManyWithWhereWithoutAppointmentInputObjectZodSchema = makeSchema();
