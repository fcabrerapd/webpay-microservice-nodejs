import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/webpayRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);

app.get('/health', (req, res) => res.send("server is healthy"));

export default app;