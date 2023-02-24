import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port(),
    SECRET: str(),
    GOOGLE_CLIENT_ID: str(),
    GOOGLE_CLIENT_SECRET: str(),
    STAGGING_URL: str(),
    DEV_URL: str()
});
