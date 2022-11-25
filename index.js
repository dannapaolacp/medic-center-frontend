import express from 'express';
import path from 'path';
import cors from 'cors';
import { config } from './config/config.js';
const port = config.server.port;
const app = express();
app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log(`Server arriba ${port}`);
});
