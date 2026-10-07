import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import {
  createContactMessage,
  createGuestbookEntry,
  getStats,
  incrementVisit,
  listGuestbookEntries,
} from "./queries/portfolio";

export const portfolioRouter = createRouter({
  sendMessage: publicQuery
    .input(
      z.object({
        name: z.string().trim().min(2, "Name is too short").max(120),
        email: z.string().trim().email("Enter a valid email").max(190),
        message: z
          .string()
          .trim()
          .min(10, "Tell me a bit more (min 10 chars)")
          .max(5000),
      }),
    )
    .mutation(async ({ input }) => {
      await createContactMessage(input);
      return { ok: true };
    }),

  guestbook: createRouter({
    list: publicQuery.query(() => listGuestbookEntries()),
    sign: publicQuery
      .input(
        z.object({
          name: z.string().trim().min(2).max(80),
          message: z.string().trim().min(2).max(500),
        }),
      )
      .mutation(async ({ input }) => {
        await createGuestbookEntry(input);
        return { ok: true };
      }),
  }),

  stats: createRouter({
    track: publicQuery.mutation(async () => {
      await incrementVisit();
      return { ok: true };
    }),
    get: publicQuery.query(() => getStats()),
  }),
});
