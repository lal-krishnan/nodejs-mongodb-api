import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Your routes
app.use('/api', routes);

// Error handler
app.use(errorMiddleware);

export default app;