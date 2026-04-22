import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/', (req, res) => {
  res.send('Berhasil menggunakan import!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});