import { z } from 'zod';
export const StaffAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    email: z.number(),
    name: z.number(),
    phone: z.number(),
    userId: z.number(),
    user: z.number(),
    address: z.number(),
    department: z.number(),
    img: z.number(),
    licenseNumber: z.number(),
    colorCode: z.number(),
    hireDate: z.number(),
    salary: z.number(),
    role: z.number(),
    status: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    immunizations: z.number(),
    GrowthChart: z.number()
  }).optional(),
  _sum: z.object({
    salary: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    salary: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    userId: z.string().nullable(),
    address: z.string().nullable(),
    department: z.string().nullable(),
    img: z.string().nullable(),
    licenseNumber: z.string().nullable(),
    colorCode: z.string().nullable(),
    hireDate: z.date().nullable(),
    salary: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    userId: z.string().nullable(),
    address: z.string().nullable(),
    department: z.string().nullable(),
    img: z.string().nullable(),
    licenseNumber: z.string().nullable(),
    colorCode: z.string().nullable(),
    hireDate: z.date().nullable(),
    salary: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});