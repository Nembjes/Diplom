import { Sequelize } from 'sequelize';

const db = new Sequelize('shopig', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
});

export default db;
