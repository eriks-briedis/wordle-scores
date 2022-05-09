import 'dotenv/config'

interface EnvConfig {
  apiUrl: string
  token: string
}

export default {
  apiUrl: process.env.API_URL,
  token: process.env.TOKEN
} as EnvConfig
