import { integer, varchar, pgTable, text, serial, timestamp, boolean } from 'drizzle-orm/pg-core'

export const User = pgTable('users', {
    id: serial('id').primaryKey(),
    stripeCustomerId: text('stripe_customer_id').unique(),
    email: text('email').notNull().unique(),
    name: text('name'),
    points: integer('points').default(50),
    createdAt: timestamp('created_at').defaultNow(),
})

export const Subscription = pgTable('subscriptions', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => User.id).notNull(),
    stripeSubscriptionId: varchar('stripe_subscription_id', { length: 255 }).notNull(),
    plan: varchar('plan', { length: 50 }).notNull(),
    status: varchar('status', { length: 50 }).notNull(),
    
})