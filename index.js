let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.argv[2] || 3000;

// start server here
app.listen(port, function() {

});

console.log(chalk.green('Server listening on ' + port));
