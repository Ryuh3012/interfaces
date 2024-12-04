import { config } from 'dotenv'

config()

export const DB_USER = "postgres"
export const DB_HOST = "localhost"
export const DB_PASSWORD = "0000"
export const DB_DATABASE = "usuario"
export const DB_PORT = "5432"

export const port = process.env.PORT