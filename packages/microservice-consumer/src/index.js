const redis = require('redis');
const client = redis.createClient();
const CHANNEL = 'channel';

(async () => {
    const subscriber = client.duplicate();
    await subscriber.connect();
    console.log('[CONSUMER] Connected to Redis and listening channel');
    await subscriber.subscribe(CHANNEL, (message) => {
      console.log(message)
    });
  
  })();

