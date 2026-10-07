import { createRouter, publicQuery } from "./middleware";
import { portfolioRouter } from "./portfolioRouter";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  portfolio: portfolioRouter,
});

export type AppRouter = typeof appRouter;
