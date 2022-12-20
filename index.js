import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { config } from './config/config.js';
const port = config.server.port;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname + '/public')));
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login');
});

app.listen(port, () => {
  console.log(`Server arriba ${port}`);
});
