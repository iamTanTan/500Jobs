import { createTRPCRouter, publicProcedure } from '../trpc';

export const companyRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.company.findMany();
  }),
});
