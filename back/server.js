import express from 'express';
import pool from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import documentsRouter from './routes/documentsRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();

// Utilise le port fourni par Render OU 3000 en local
const port = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'accessi-web-one.vercel.app'],
  credentials: true,
}));


app.use(express.json());

// Test route (retourne les tables MySQL)
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query("SHOW TABLES");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/categories', categoryRouter);
app.use('/documents', documentsRouter);


app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
