// Corrected imports for ES module syntax
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; 
import helmet from 'helmet'; 
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Database Connection (updated for newer MongoDB versions)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.log('Database connection error:', err));


// Routes Placeholder
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the MERN App');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

if (!process.env.MONGO_URI || !process.env.JWT_SECRET || !process.env.REFRESH_SECRET) {
  console.error('Missing environment variables. Please check your .env file.');
  process.exit(1);
}