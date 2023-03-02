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
        companyId: z.number(),
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
});
