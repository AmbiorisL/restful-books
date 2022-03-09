const { Sequelize } = require('sequelize');

const connection = new Sequelize("mysql://root:root@localhost:3306/demos");

async function testConnection() {
  try {
    await connection.authenticate();
    console.log('success');
    connection.close();
  } catch (err) {
    console.error(err);
  }
}
testConnection();
