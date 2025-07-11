import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { errorMiddleware } from './middlewares/error.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3050;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
  res.send('JotThoughts Backend API is running!');
});

app.use(errorMiddleware);

// Import routes
import authRoutes from './routes/auth.routes.js';
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
