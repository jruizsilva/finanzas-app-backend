import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env

module.exports = {
  local: {
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
    database: 'database'
  },
  deploy: {
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    host: PGHOST,
    port: PGPORT
  }
}
