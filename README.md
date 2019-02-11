# probable-octo-goggles
FOR THE LAST TIME... THIS IS MY WEBSITE

I used github markdown to format the CSS and the markdown npm module to parse markdown.

## Editing

To edit the head and foot of the resultant `.html` file, edit the two files in the `html/` directory. You can also specify your own files `config.js`. 

## Config

```js

var config = {
	headFile: __dirname + "/html/head.html", // specifies the file to use as the head of the HTML file
	footFile: __dirname + "/html/foot.html", // specifies the file to use as the foot of the HTML file
	textFile: __dirname + "/index.md",       // specifies the file to read markdown from
	encoding: "utf8",                        // specifies the encoding for all files involved
	defaultFile: "index.html"                // specifies the default output file. Can also be changed by passing an argument into "npm start"
}

```
