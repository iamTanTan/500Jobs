import { createTRPCRouter } from './trpc';
import { companyRouter } from './routers/company';
import { applicationRouter } from './routers/application';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  company: companyRouter,
  application: applicationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
