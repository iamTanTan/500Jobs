import { createTRPCRouter, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const applicationRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.application.findMany({ where: { userId: ctx.session.user.id } });
  }),
  createApplication: protectedProcedure
    .input(
      z.object({
        status: z.string(),
        position: z.string(),
        location: z.string(),
        date: z.optional(z.string().datetime()),
        notes: z.optional(z.string()),
        companyId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.application.create({
        data: {
          status: input.status,
          location: input.location,
          position: input.position,
          userId: ctx.session.user.id,
          date: input.date,
          notes: input.notes,
          companyId: input.companyId,
        },
      });
    }),
  updateApplication: protectedProcedure
    .input(
      z.object({
        appId: z.string(),
        status: z.string(),
        date: z.optional(z.string().datetime()),
        notes: z.optional(z.string()),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.application.update({
        where: {
          id: input.appId,
        },
        data: {
          status: input.status,
          notes: input.notes,
          date: input.date,
        },
      });
    }),
  deleteApplication: protectedProcedure
    .input(z.object({ appId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.application.delete({
        where: {
          id: input.appId,
        },
      });
    }),
});
