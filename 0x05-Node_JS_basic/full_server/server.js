const express = require('express');
const app = express();
const router = require('./routes/index');


app.use('/', router);

app.get('/students', router);

app.get('/students/:major', router);

app.listen(1245);

export default app;