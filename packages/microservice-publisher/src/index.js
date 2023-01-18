import express, { json } from 'express';
import dotenv from 'dotenv';
import * as redis from 'redis';
import pino from 'pino';

dotenv.config();

const app = express();
const client = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  });
const logger = pino({ level: 'info' });

const PORT = process.env.PORT || 3000
app.use(json());

app.post('/', async (req, res) => {
    const { message } = req.body;
    await client.connect()
    await client.publish('channel', message);
    
    await client.quit();
    logger.info({ message: `message sent: ${message}` });

    res.status(200).json({ message: 'Message sent to Redis' });
});

app.listen(PORT, () => {
    console.log(`Server:publisher listening on port ${PORT}`);
});
