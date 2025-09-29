import { z } from 'zod';
export const ServicesGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  serviceName: z.string(),
  description: z.string(),
  price: z.number(),
  duration: z.number().int(),
  isAvailable: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    serviceName: z.number(),
    description: z.number(),
    price: z.number(),
    labtests: z.number(),
    bills: z.number(),
    category: z.number(),
    duration: z.number(),
    isAvailable: z.number(),
    appointments: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    price: z.number().nullable(),
    duration: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    price: z.number().nullable(),
    duration: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    serviceName: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    duration: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    serviceName: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    duration: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));