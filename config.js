var config = {
	headFile: __dirname + "/html/head.html", // specifies the file to use as the head of the HTML file
	footFile: __dirname + "/html/foot.html", // specifies the file to use as the foot of the HTML file
	textFile: __dirname + "/index.md",       // specifies the file to read markdown from
	encoding: "utf8",                        // specifies the encoding for all files involved
	defaultFile: "index.html"                // specifies the default output file. Can also be changed by passing an argument into "npm start"
}

module.exports = config;
