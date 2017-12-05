const protagonist = require('protagonist');
const fury = require('fury');
const apiParserAdaptor = require('fury-adapter-apib-parser');
const fs = require('fs');

class Parser {
	parseWithProtagonist() {
		const dataStructure = __dirname + '/../../docs/data-structure/index.md';
		const path1 = __dirname + '/../../docs/certificate/index.md';
		const path2 = __dirname + '/../../docs/certificate/product-certificate.md';
		fs.readFile(dataStructure, 'utf8', (err, dataStructure) => {
			fs.readFile(path2, (err, data) => {
				protagonist.parse(dataStructure.toString() + '\n' + data.toString(), function(error, result) {
					if (error) {
						console.log(error);
						return;
					}
					console.log('Data', JSON.stringify(result));
				});
			});
		});
	}
	
	filterFunc(item) {
		console.log('item', item);
		if (item.element === 'httpRequest' && item.statusCode === 200) {
			return true;
		}
		return false;
	}
	
	getAPIElement() {
		fury.use(apiParserAdaptor);
		const dataStructure = __dirname + '/../../docs/data-structure/index.md';
		const path1 = __dirname + '/../../docs/certificate/index.md';
		const path2 = __dirname + '/../../docs/certificate/product-certificate.md';
		
		fs.readFile(dataStructure, 'utf8', (err, dataStructure) => {
			fs.readFile(path2, 'utf8', (err, data) => {
				fury.parse({
					source: dataStructure.toString() + '\n' + data.toString(),
					mediaType: 'text/vnd.apiblueprint'
				}, (err, result) => {
					console.log('Error!!!!', err);
					result.api.find(this.filterFunc).forEach(function (request) {
						console.log('request', request);
						console.log(`${request.method} ${request.href}`)
					});
				});
			})
		});
	}
}

module.exports = {Parser};
