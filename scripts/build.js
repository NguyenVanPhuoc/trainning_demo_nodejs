const ncp = require('ncp').ncp;

const sourceDir = 'src/locales';
const destDir = 'dist/src/locales';

ncp(sourceDir, destDir, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log('done!');
});
ncp('.env', 'dist/.env', function (err) {
	if (err) {
		return console.error(err);
	}
	console.log('done!');
});

