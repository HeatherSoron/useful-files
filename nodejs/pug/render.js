#!/usr/bin/env nodejs

var pug = require('pug');
var fs = require('fs');

fs.readdirSync('.').forEach(entry => {
	if (entry.match(/\.pug$/)) {
		var out = pug.renderFile(entry);
		fs.writeFileSync(entry.replace(/\.pug$/, '.html'), out);
	}
})
