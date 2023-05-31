import mongoose from 'mongoose'
import config from './config/index'
import app from './app'

async function run() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🛢 Database is connected successfully 😊')

    app.listen(config.port, () => {
      console.log('Application listening on Port', config.port)
    })
  } catch (err) {
    console.log('Failed to connect database 😢', err)
  }
}

run()
