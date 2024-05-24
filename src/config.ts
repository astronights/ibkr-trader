import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../.env") });

const HOST = process.env.HOST || '127.0.0.1';
const PORT = parseInt(process.env.PORT || '3000');
const IBKR_PORT = parseInt(process.env.IBKR_PORT || '7647');
const MONGO_URI = process.env.MONGO_URI;

export { HOST, PORT, IBKR_PORT, MONGO_URI };