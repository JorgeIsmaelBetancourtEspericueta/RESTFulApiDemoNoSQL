const configX = require('./dotenvXconfig.js');
const cassandra = require('cassandra-driver');
console.log('> HOST:',      configX.CASSANDRA_HOST,      typeof configX.CASSANDRA_HOST);
console.log('> DC:',        configX.CASSANDRA_DATACENTER, typeof configX.CASSANDRA_DATACENTER);
console.log('> KEYSPACE:',  configX.CASSANDRA_KEYSPACE,   typeof configX.CASSANDRA_KEYSPACE);
console.log('> USERNAME:',  configX.CASSANDRA_USERNAME,   typeof configX.CASSANDRA_USERNAME);
console.log('> PASSWORD:',  configX.CASSANDRA_PASSWORD,   typeof configX.CASSANDRA_PASSWORD);
// Configuración del cliente
const client = new cassandra.Client({
  contactPoints: [configX.CASSANDRA_HOST],
  localDataCenter: configX.CASSANDRA_DATACENTER,
  keyspace: configX.CASSANDRA_KEYSPACE,
  credentials: {
    username: configX.CASSANDRA_USERNAME,
    password: configX.CASSANDRA_PASSWORD
  }
});

// Función para conectar y verificar la conexión
(async () => {
  try {
    await client.connect();
    
    // Si se especificó un keyspace, verificamos su existencia
    if (configX.CASSANDRA_KEYSPACE) {
        const query = `SELECT keyspace_name FROM system_schema.keyspaces 
                    WHERE keyspace_name = '${configX.CASSANDRA_KEYSPACE}'`;
        const result = await client.execute(query);
        
        if (result.rows.length > 0) {
        console.log(`Database is connected to Cassandra: Keyspace '${configX.CASSANDRA_KEYSPACE}'`);
        } else {
        console.warn(`Advertencia: Keyspace '${configX.CASSANDRA_KEYSPACE}' no existe`);
        }
    }
  } catch (error) {
    console.error('Error connecting to Cassandra:', error);
  }
})();

module.exports = { client };