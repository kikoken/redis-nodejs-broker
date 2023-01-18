import * as redis from 'redis'
import dotenv from 'dotenv'


const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});
const CHANNEL = 'channel';

dotenv.config();

(async () => {
    const subscriber = client.duplicate();
    await subscriber.connect();
    console.log('[CONSUMER] Connected to Redis and listening channel');
    await subscriber.subscribe(CHANNEL, (message) => {
      console.log(message)
    });
  
  })();

