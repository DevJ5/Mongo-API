const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');
const app = express();

mongoose.connect(
	'mongodb://localhost/programmerdb',
	{ useNewUrlParser: true, useFindAndModify: false }
);
mongoose.Promise = global.Promise;

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

// Error middleware
app.use((err, req, res, next) => {
	res.status(422).send({ error: err.message });
});

app.listen(port, () => console.log(`Express listening on port ${port}`));
