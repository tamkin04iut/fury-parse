const express = require('express');
const {Parser} = require('./parser/fury/blueprint-api-adapter');
const PORT = 3000;

var app = express();

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`)
	// new Parser().parseWithProtagonist();
	new Parser().getAPIElement();
});