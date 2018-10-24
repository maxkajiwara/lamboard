// DEPENDENCIES
const express = require('express');
const server = express();

// MIDDLEWARE
const configureMiddleware = require('./middleware/serverMiddleware');

configureMiddleware(server);

// ROUTES
const exampleRoutes = require('./routes/exampleRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

server.use('/api/example', exampleRoutes);
server.use('/api/users', userRoutes);

// PORT
const port = 5000;
server.listen(port, () => {
	console.log(`\n=== Listening on http://localhost:${port} ===\n`);
});
