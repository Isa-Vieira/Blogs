const express = require('express');
/* const errorMiddleware = require('./middleware/error'); */
const authRoute = require('./routers/auth.router');
const userRoute = require('./routers/user.router');
const categoriesRouter = require('./routers/categories.router');
// ...

const app = express();

app.use(express.json());

app.use('/login', authRoute);

app.use('/user', userRoute);

app.use('/categories', categoriesRouter);

/* app.use(errorMiddleware); */

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;