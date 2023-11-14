const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./routes/serverRoutes'));
app.listen(process.env.PORT || 8700);
