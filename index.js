var fs = require("fs");
var md = require("markdown").markdown;

// Set up config variables
var config = require("./config")

// get all the files in order
var head = fs.readFileSync(config.headFile, config.encoding);
var foot = fs.readFileSync(config.footFile, config.encoding);
var text = fs.readFileSync(config.textFile, config.encoding);

// parse markdown
text = md.toHTML(text);

// set up the output
var output = head + text + foot;
output = output.replace(/&#39;/gi, "'") // get rid of the BS

// user can specify file with argument (default in config)
var outfile = process.argv[2] || config.defaultFile;

// Actually make the file
fs.writeFile(outfile, output, config.encoding, err => {
	if (err) throw err;
	console.log(`Output file: \n${__dirname + "/" + outfile}`);
});
