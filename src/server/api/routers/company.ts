import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const companyRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.company.findMany();
  }),
});
