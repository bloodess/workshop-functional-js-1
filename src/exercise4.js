const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
  return fulfill();

})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
  return fulfill();
})

const asyncYolo = (input) => {

	console.log(_.zip(input));
	return _.zip(input);


}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}