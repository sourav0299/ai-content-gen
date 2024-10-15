
export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: 'postgresql://neondb_owner:onxqX9Wb2tHK@ep-plain-sunset-a1zirwsq.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
        connectionString: 'postgresql://neondb_owner:onxqX9Wb2tHK@ep-plain-sunset-a1zirwsq.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    },
}
