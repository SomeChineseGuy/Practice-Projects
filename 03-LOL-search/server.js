const express = require('express');
const morgan = require('morgan');
const port = 4200;
const app = express()

app.use(morgan);

app.listen(port, ()=> {
  console.log(`app is listening on port ${port}`);
})