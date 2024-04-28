import express from 'express';
import fs from 'fs';
import { userRouter } from './routes/userRouter.js';
import {ErrorHandler} from './middleware/ErrorHandler.js';

const app = express();
app.use(express.json());

app.use('/user', userRouter);




app.use(ErrorHandler);

export { app };
