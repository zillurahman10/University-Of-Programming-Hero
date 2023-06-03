/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

// bwalO6eGlYSW8Ktz
// university_admin

// lyxnTQRbBQhSQ3om
// university_PH

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
}
