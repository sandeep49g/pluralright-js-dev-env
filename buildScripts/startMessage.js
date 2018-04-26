//var chalk = require('chalk');
import chalk from 'chalk';

if (chalk.supportsColor) {
    console.log(chalk.yellow('Starting app in dev mode...'));
    //myStyle = chalk.bgWhite.green.bold.italic;
    // console.log(myStyle('Starting app in dev mode...'));
} else {
    console.log('Starting app in dev mode...');
}
