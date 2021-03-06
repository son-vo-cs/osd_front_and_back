const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3006;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());
app.options('*', cors());

app.get('/', (request, response) => {
	response.json({info: 'Node.js, Express, and Postgres API'});
});

app.post('/login', db.loginUser);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});