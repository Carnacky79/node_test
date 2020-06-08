const express = require('express');

const app = express();

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
  });




app.listen(3000);