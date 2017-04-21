const chalk = require('chalk');
var _ = require("lodash");

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

//var input = (['a', 'b'], [1, 2]);

const zip = (input) => {

	return _.chain(input)
	.zip(input)
	.value();

    };

module.exports = {
  zip: zip,
  run: zip
}