import { z } from 'zod';
export const AdminAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    username: z.number(),
    password: z.number(),
    role: z.number(),
    name: z.number(),
    phone: z.number(),
    birthDate: z.number(),
    avatarId: z.number(),
    avatar: z.number(),
    isRoot: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    uploads: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    birthDate: z.date().nullable(),
    avatarId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable(),
    name: z.string().nullable(),
    phone: z.string().nullable(),
    birthDate: z.date().nullable(),
    avatarId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});