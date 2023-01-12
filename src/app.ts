import express from 'express';

import productsRouter from './routes/productsRoute';
import usersRouter from './routes/usersRoute';
import ordersRouter from './routes/ordersRoute';

const app = express();

app.use(express.json());

app.use('/', productsRouter);
app.use('/', usersRouter);
app.use('/', ordersRouter);
app.use('/', loginRouter);

export default app;

// iniciando o projeto!!!!!!!