const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middleware/error');
const routes = require('./routers/auth.router');

// ...

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;