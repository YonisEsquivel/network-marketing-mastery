import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return ctx;
}

describe("checkout.captureLead", () => {
  it("captures lead with valid name and email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.checkout.captureLead({
      name: "Juan Pérez",
      email: "juan@example.com",
      source: "home",
    });

    expect(result).toHaveProperty("id");
    expect(result.name).toBe("Juan Pérez");
    expect(result.email).toBe("juan@example.com");
    expect(result.source).toBe("home");
    expect(result.status).toBe("pending");
    expect(result.emailSequenceStep).toBe(0);
  });

  it("normalizes email to lowercase", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.checkout.captureLead({
      name: "María González",
      email: "MARIA@EXAMPLE.COM",
      source: "home",
    });

    expect(result.email).toBe("maria@example.com");
  });

  it("rejects invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.checkout.captureLead({
        name: "Test User",
        email: "invalid-email",
        source: "home",
      })
    ).rejects.toThrow();
  });

  it("rejects empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.checkout.captureLead({
        name: "",
        email: "test@example.com",
        source: "home",
      })
    ).rejects.toThrow();
  });

  it("defaults source to home when not provided", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.checkout.captureLead({
      name: "Test User",
      email: "test@example.com",
      // source omitted, should default to "home"
    } as any);

    expect(result.source).toBe("home");
  });
});
