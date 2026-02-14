import { int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User progress table to store completion state across all tools.
 * Stores progress data as JSON for flexibility.
 */
export const userProgress = mysqlTable("user_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  /** Tool identifier: 'hoja_ruta', 'plantillas', 'checklists', etc. */
  toolId: varchar("toolId", { length: 100 }).notNull(),
  /** JSON data storing completed items, inputs, results, etc. */
  progressData: json("progressData").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserProgress = typeof userProgress.$inferSelect;
export type InsertUserProgress = typeof userProgress.$inferInsert;

/**
 * Checkout leads table to capture potential customers before redirecting to Hotmart.
 * Tracks email sequence progress and conversion status.
 */
export const checkoutLeads = mysqlTable("checkout_leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  /** Source of the lead: 'home', 'demo', etc. */
  source: varchar("source", { length: 50 }).notNull(),
  /** Lead status: 'pending', 'purchased', 'abandoned' */
  status: mysqlEnum("status", ["pending", "purchased", "abandoned"]).default("pending").notNull(),
  /** Current step in email sequence (0-based) */
  emailSequenceStep: int("emailSequenceStep").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CheckoutLead = typeof checkoutLeads.$inferSelect;
export type InsertCheckoutLead = typeof checkoutLeads.$inferInsert;
