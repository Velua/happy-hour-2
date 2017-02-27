const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const port = 3001;
require('./app/routes')


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('We are live on ' + port);
});

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log("Error: ", err)
  require('./app/routes')(app, database);
  console.log(`Connected to DB '${database.databaseName}' successfully`)
})
