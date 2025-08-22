import "dotenv/config";
import http from 'http';
import app from './app.js';
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";

const server = http.createServer(app);

(async () => {
    await connectDB();
    server.listen(env.PORT, () => {
        console.log(`API up on http:/localhost:${env.PORT}`);
    });
})();
