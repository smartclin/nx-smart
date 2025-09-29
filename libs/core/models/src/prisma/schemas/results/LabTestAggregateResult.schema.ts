import { z } from 'zod';
export const LabTestAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    recordId: z.number(),
    testDate: z.number(),
    result: z.number(),
    status: z.number(),
    notes: z.number(),
    serviceId: z.number(),
    services: z.number(),
    medicalRecord: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    recordId: z.number().nullable(),
    serviceId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    recordId: z.number().nullable(),
    serviceId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    recordId: z.number().int().nullable(),
    testDate: z.date().nullable(),
    result: z.string().nullable(),
    status: z.string().nullable(),
    notes: z.string().nullable(),
    serviceId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    recordId: z.number().int().nullable(),
    testDate: z.date().nullable(),
    result: z.string().nullable(),
    status: z.string().nullable(),
    notes: z.string().nullable(),
    serviceId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});