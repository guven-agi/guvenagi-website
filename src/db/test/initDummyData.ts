import { initDatabase } from "../db-manager"
import { dummyFill } from "./helpers";


(async () => {
    await initDatabase();
    await dummyFill();
})()