import { z } from 'zod';
export const FileGroupByResultSchema = z.array(z.object({
  id: z.string(),
  key: z.string(),
  size: z.number().int(),
  isPublic: z.boolean(),
  userId: z.string(),
  adminId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    key: z.number(),
    size: z.number(),
    type: z.number(),
    isPublic: z.number(),
    userId: z.number(),
    user: z.number(),
    admin: z.number(),
    adminId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    admins: z.number(),
    users: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    size: z.number().int().nullable(),
    userId: z.string().nullable(),
    adminId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    key: z.string().nullable(),
    size: z.number().int().nullable(),
    userId: z.string().nullable(),
    adminId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));