import express from 'express';
import fs from 'fs';
import {processVideo} from './uploadVideoFunction.js'


const app = express();
app.use(express.json());





app.post('/upload', async (req, res) => {
    try {
        await processVideo(req);
        res.json({
            status: 200,
            message: 'Відео успішно завантажено!'
        });
    } catch (err) {
        res.json(
            {
                status: 500,
                errorMessage: "Помилка завантаження відео."
            }
        )
    }
});






export { app };
