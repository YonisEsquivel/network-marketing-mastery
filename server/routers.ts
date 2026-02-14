import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Progress tracking for all tools
  progress: router({
    save: protectedProcedure
      .input(z.object({
        toolId: z.string(),
        progressData: z.any(),
      }))
      .mutation(async ({ ctx, input }) => {
        await db.saveUserProgress(ctx.user.id, input.toolId, input.progressData);
        return { success: true };
      }),

    get: protectedProcedure
      .input(z.object({
        toolId: z.string(),
      }))
      .query(async ({ ctx, input }) => {
        const progress = await db.getUserProgress(ctx.user.id, input.toolId);
        return progress;
      }),
  }),

  // Checkout lead capture
  checkout: router({
    captureLead: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        source: z.enum(["home", "demo"]).default("home"),
      }))
      .mutation(async ({ input }) => {
        return await db.createCheckoutLead({
          name: input.name,
          email: input.email.toLowerCase(),
          source: input.source,
          status: "pending",
          emailSequenceStep: 0,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
