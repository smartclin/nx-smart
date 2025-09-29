import { z } from 'zod';
import type { Prisma } from '../../../../../../../node_modules/.prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema as AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema as NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { StaffOrderByRelationAggregateInputObjectSchema as StaffOrderByRelationAggregateInputObjectSchema } from './StaffOrderByRelationAggregateInput.schema';
import { DoctorOrderByRelationAggregateInputObjectSchema as DoctorOrderByRelationAggregateInputObjectSchema } from './DoctorOrderByRelationAggregateInput.schema';
import { PatientOrderByRelationAggregateInputObjectSchema as PatientOrderByRelationAggregateInputObjectSchema } from './PatientOrderByRelationAggregateInput.schema';
import { TwoFactorOrderByRelationAggregateInputObjectSchema as TwoFactorOrderByRelationAggregateInputObjectSchema } from './TwoFactorOrderByRelationAggregateInput.schema';
import { FileOrderByWithRelationInputObjectSchema as FileOrderByWithRelationInputObjectSchema } from './FileOrderByWithRelationInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  birthDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  gender: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  displayUsername: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  twoFactorEnabled: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  banned: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  banReason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  banExpires: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  avatarId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  Staff: z.lazy(() => StaffOrderByRelationAggregateInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorOrderByRelationAggregateInputObjectSchema).optional(),
  Patient: z.lazy(() => PatientOrderByRelationAggregateInputObjectSchema).optional(),
  twofactors: z.lazy(() => TwoFactorOrderByRelationAggregateInputObjectSchema).optional(),
  avatar: z.lazy(() => FileOrderByWithRelationInputObjectSchema).optional(),
  uploads: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
