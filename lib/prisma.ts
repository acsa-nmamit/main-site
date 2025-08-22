import { createClient } from 'redis'

const globalForRedis = globalThis as unknown as {
  redis: ReturnType<typeof createClient> | undefined
}

const redis = globalForRedis.redis ?? createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
})

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redis = redis
}

// Connect to Redis if not already connected
if (!redis.isOpen) {
  redis.connect().catch(console.error)
}

export { redis }