import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// middlewares
import { errorMiddleware } from './middlewares/errorMiddleware';

// routes
import acronymRoutes from './routes/acronymRoutes';

// utils
import { endpoints, pagination } from './utils/data';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app = express();

// middleware
app.use(
	cors({
		origin: [process.env.CLIENT_URL ?? '', 'http://localhost:5173'],
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).json({ endpoints, pagination });
});

// routes
app.use('/api/acronym', acronymRoutes);

// handle other routes
app.use('*', (req, res) => {
	res.status(404).json({ error: 'Not found' });
});

// error middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
