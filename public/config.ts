interface EnvConfig {
  apiUrl: string
  token: string
}

export default {
  apiUrl: process.env.API_URL,
  token: process.env.AUTH_TOKEN
} as EnvConfig
