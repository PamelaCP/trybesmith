import express from 'express';

import productsRouter from './routes/router';

const app = express();

app.use(express.json());

app.use('/', productsRouter);

export default app;

// iniciando o projeto!!!!!!!