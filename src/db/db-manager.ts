import { AppDataSource } from "@/data-source";


export async function initDatabase(sync: boolean = false) {
    if (!AppDataSource.isInitialized) {
        try {
            await AppDataSource.initialize()
            console.log("Database connected!");
            if (sync) {
                await AppDataSource.synchronize()
                console.log("DB Synchronized!")
            }
        } catch (err) {
            console.error(err);
        }
    }
}