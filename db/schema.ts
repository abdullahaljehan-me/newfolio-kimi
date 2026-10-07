import {
  mysqlTable,
  serial,
  varchar,
  text,
  timestamp,
  bigint,
} from "drizzle-orm/mysql-core";

export const contactMessages = mysqlTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 190 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const guestbookEntries = mysqlTable("guestbook_entries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 80 }).notNull(),
  message: varchar("message", { length: 500 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const siteStats = mysqlTable("site_stats", {
  id: serial("id").primaryKey(),
  metric: varchar("metric", { length: 50 }).notNull().unique(),
  value: bigint("value", { mode: "number" }).notNull().default(0),
});
