import { Sequelize } from 'sequelize'

const sequelize =
  process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: {
            require: true
          }
        },
        dialect: 'postgres'
      })
    : new Sequelize({
        username: 'postgres',
        password: 'admin',
        host: 'localhost',
        database: 'finanzas_app',
        port: 5432,
        dialect: 'postgres',
        logging: false
      })

export default sequelize
