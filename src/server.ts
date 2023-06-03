import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import logger from './shared/logger'

async function run() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢 Database is connected successfully 😊')

    app.listen(config.port, () => {
      logger.info('Application listening on Port', config.port)
    })
  } catch (err) {
    logger.error('Failed to connect database 😢', err)
  }
}

run()
