import { z } from 'zod';
export const PatientBillsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  billId: z.number().int(),
  serviceId: z.number().int(),
  serviceDate: z.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    billId: z.number(),
    serviceId: z.number(),
    serviceDate: z.number(),
    quantity: z.number(),
    unitCost: z.number(),
    totalCost: z.number(),
    service: z.number(),
    payment: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    serviceId: z.number().nullable(),
    quantity: z.number().nullable(),
    unitCost: z.number().nullable(),
    totalCost: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    billId: z.number().nullable(),
    serviceId: z.number().nullable(),
    quantity: z.number().nullable(),
    unitCost: z.number().nullable(),
    totalCost: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    serviceId: z.number().int().nullable(),
    serviceDate: z.date().nullable(),
    quantity: z.number().int().nullable(),
    unitCost: z.number().nullable(),
    totalCost: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    billId: z.number().int().nullable(),
    serviceId: z.number().int().nullable(),
    serviceDate: z.date().nullable(),
    quantity: z.number().int().nullable(),
    unitCost: z.number().nullable(),
    totalCost: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));