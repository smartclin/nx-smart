import { z } from 'zod';
export const DoctorFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  userId: z.string(),
  user: z.unknown(),
  specialization: z.string(),
  licenseNumber: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  department: z.string().optional(),
  img: z.string().optional(),
  colorCode: z.string().optional(),
  availabilityStatus: z.string().optional(),
  isActive: z.boolean().optional(),
  type: z.unknown(),
  workingDays: z.array(z.unknown()),
  appointments: z.array(z.unknown()),
  diagnosis: z.array(z.unknown()),
  role: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  Prescription: z.array(z.unknown()),
  Encounter: z.array(z.unknown()),
  MedicalRecords: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});