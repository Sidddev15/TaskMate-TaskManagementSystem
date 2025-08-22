import "dotenv/config";
import http from 'http';
import app from './app.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`API up on http://localhost:${PORT}`);
});
