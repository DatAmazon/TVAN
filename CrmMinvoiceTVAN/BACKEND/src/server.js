const http = require('http');
const app = require('./config/app');
const { env, port } = require('./config/configuration-env');
const { Connect } = require('./config/configuration-mongoose');
const logger = require('./config/configuration-logger');
const { RedisClient } = require('./config/configuration-redis');

// Create Http Server
const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  Connect();
  RedisClient();
  logger.info(`${env.toUpperCase()} Server is Listening on PORT ${port}`);
});

// Listen to error on listening to port
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
server.on('error', onError);

/**
 * Exports Express
 * @public
 */
module.exports = server;
