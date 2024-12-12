import { config } from 'dotenv'

config()

export const host =  process.env.DB_HOST
export const user =  process.env.DB_USER
export const pass =  process.env.DB_PASSWORD
export const dataBase =  process.env.DB_DATABASE
export const por =  process.env.DB_PORT

export const porssword =  process.env.PASSWORD

export const port = process.env.PORT