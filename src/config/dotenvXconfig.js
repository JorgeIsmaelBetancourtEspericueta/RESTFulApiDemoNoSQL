const dotenvx = require("@dotenvx/dotenvx");
dotenvx.config();

module.exports = {
  HOST: process.env.HOST || "No encontré variable localhost",
  PORT: process.env.PORT || "No encontré PORT",
  API_URL: process.env.API_URL || "No encontré variable",
  CONNECTION_STRING:
  process.env.CONNECTION_STRING || "SIN CADENA DE CONEXION A MONGO DB",
  DATABASE: process.env.DATABASE || "db_default",
  DB_PASSWORD: process.env.DB_PASSWORD || "admin",
  DB_USER: process.env.DB_USER || "admin",
  REDIS_URL : process.env.REDIS_URL || "No encontré variable para conexión a Redis",
  //Variables de entorno para Azure Cosmos DB
  COSMOSDB_ENDPOINT: process.env.COSMOSDB_ENDPOINT,
  COSMOSDB_KEY: process.env.COSMOSDB_KEY,
  COSMOSDB_DATABASE: process.env.COSMOSDB_DATABASE,
  COSMOSDB_CONTAINER: process.env.COSMOSDB_CONTAINER,
  //NEO4J
  NEO4J_URI: process.env.NEO4J_URI || 'No se puede conectar a Neo4j',
  NEO4J_USER: process.env.NEO4J_USER || 'neo4j',
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD || 'neo4j'
};
