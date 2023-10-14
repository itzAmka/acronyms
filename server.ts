import express from 'express';
import dotenv from 'dotenv';

// routes
import acronymRoutes from './routes/acronymRoutes';

// utils
import { endpoints } from './utils/data';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.status(200).json({ endpoints });
});

// routes
app.use('/api/acronyms', acronymRoutes)

// handle other routes
app.use('*', (req, res) => { 
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () =>
	console.log(`Server running at http://localhost:${PORT}`),
);
