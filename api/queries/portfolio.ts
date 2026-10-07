import { desc, eq, sql } from "drizzle-orm";
import { getDb } from "./connection";
import { contactMessages, guestbookEntries, siteStats } from "@db/schema";

export async function createContactMessage(input: {
  name: string;
  email: string;
  message: string;
}) {
  const db = getDb();
  await db.insert(contactMessages).values(input);
}

export async function listGuestbookEntries(limit = 30) {
  const db = getDb();
  return db
    .select()
    .from(guestbookEntries)
    .orderBy(desc(guestbookEntries.createdAt))
    .limit(limit);
}

export async function createGuestbookEntry(input: {
  name: string;
  message: string;
}) {
  const db = getDb();
  await db.insert(guestbookEntries).values(input);
}

export async function incrementVisit() {
  const db = getDb();
  await db
    .insert(siteStats)
    .values({ metric: "visits", value: 1 })
    .onDuplicateKeyUpdate({ set: { value: sql`value + 1` } });
}

export async function getStats() {
  const db = getDb();
  const rows = await db
    .select()
    .from(siteStats)
    .where(eq(siteStats.metric, "visits"));
  const visits = rows[0]?.value ?? 0;
  const gb = await db
    .select({ count: sql<number>`count(*)` })
    .from(guestbookEntries);
  const messages = await db
    .select({ count: sql<number>`count(*)` })
    .from(contactMessages);
  return {
    visits,
    guestbookCount: Number(gb[0]?.count ?? 0),
    messageCount: Number(messages[0]?.count ?? 0),
  };
}
