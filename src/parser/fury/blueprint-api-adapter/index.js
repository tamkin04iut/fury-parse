const fury = require('fury');
const apiParserAdaptor = require('fury-adapter-apib-parser');
const fs = require('fs');

/*
	https://api-elements.readthedocs.io/en/latest/element-definitions/
	https://github.com/refractproject/minim-api-description
	https://github.com/apiaryio/fury.js
*/
class Parser {	
	getAPIElement() {
		fury.use(apiParserAdaptor);
		const path2 = __dirname + '/../../docs/certificate/certificate.md';
		
		fs.readFile(path2, 'utf8', (err, data) => {
			fury.parse({source: data.toString()}, (err, result) => {
				console.log('Error!', err);
				result.api.resourceGroups.forEach(function (resourceGroup) {
					resourceGroup.resources.forEach(function (resource) {
						resource.transitions.forEach(function (transition) {
							transition.transactions.forEach(function (transaction) {
								const request = transaction.request;
								const response = transaction.response;
								if (request.method.toValue() !== 'GET') {
									return;
								}
								
								console.log('-----');
								console.log('Http Method:',request.method.toValue());
								console.log('Url:',resource.href.toValue());
								
								let hrefVariables = transition.hrefVariables || resource.hrefVariables;
								if (hrefVariables) {
									let members = hrefVariables
										.children
										.filter(item => item.element === 'member')
									;
									members.forEach((m) => {
										console.log(m.toValue());
										console.log(m.attributes.children.first.toValue());
									});
								}
								
								console.log('Response Type:', response.contentType.toValue());
								console.log('Response JSON Schema:',response.messageBodySchema.toValue());
								console.log('-----');
							});
						});
					});
				});
			});
		})
	}
}

module.exports = {Parser};
