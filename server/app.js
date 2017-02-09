const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

//Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

//Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

//Intercept POST to submit command
app.post('/cmd', (req, res)=>{
  console.log("DING A DOODLE");
  res.send({resolved: true});
});

//Always return the main index.html, so react-router renders the route
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
