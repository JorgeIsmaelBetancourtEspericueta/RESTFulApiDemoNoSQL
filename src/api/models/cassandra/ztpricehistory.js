// Importamos el cliente configurado previamente
const { client } = require('../../../config/connectToCassandra.js');

const PricesHistoryModel = {
    keyspace: 'db_esecurity',
    table: 'priceshistory',
    columns: {
      id: 'int',
      date: 'timestamp',
      open: 'decimal',
      high: 'decimal',
      low: 'decimal',
      close: 'decimal',
      volume: 'decimal'
    },
  
  };