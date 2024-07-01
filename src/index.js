import express from 'express';
import dotenv from 'dotenv';
import statusCodes from 'http-status-codes';
import v1UserRouter from './v1/routes/UserRouter.js';
import v2UserRouter from './v2/routes/UserRouter.js';

console.clear();
dotenv.config();

const app = express();
app.disable('x-powered-by');
const port = process.env.PORT || 8627;

app.use(express.json());
app.use('/api/v1', v1UserRouter);
app.use('/api/v2', v2UserRouter);

app.use((req, res) => {
  res.status(statusCodes.NOT_FOUND).send({ error: 'Path not found 💥' });
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} 🚀`);
});
