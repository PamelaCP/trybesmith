import express from 'express';

import productsRouter from './routes/productsRoute';
import usersRouter from './routes/usersRoute';

const app = express();

app.use(express.json());

app.use('/', productsRouter);
app.use('/', usersRouter);

export default app;

// iniciando o projeto!!!!!!!