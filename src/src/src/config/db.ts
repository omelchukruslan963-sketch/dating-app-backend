import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: false
});

export async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log("🟢 Database connected");
    } catch (err) {
        console.error("🔴 Database error:", err);
        process.exit(1);
    }
}
