import Prism from "prismjs";

//import {format} from "prettier";

// const prettier = require('prettier');


import * as prettier from "prettier/standalone.mjs"
import pluginBabel from "prettier/plugins/babel.mjs"
import pluginEstree from "prettier/plugins/estree.mjs"
import pluginHtml from "prettier/plugins/html.mjs"
/**/

/*
const prettier = require("prettier/standalone");
const pluginBabel = require("prettier/plugins/babel");
const pluginEstree = require("prettier/plugins/estree");
const pluginHtml = require("prettier/plugins/html");
/**/


Prism.manual = true;

window.highlight = (code, language) => {
	var grammar = Prism.languages[language];
	if (grammar) {
		console.log(grammar);
	    return Prism.highlight(code, grammar, language);
	}
	else {
		return Prism.util.encode(code);
	}
}


const pretJsHtml = async (code) => {
	var options = {
		parser: "babel",
		plugins: [ pluginBabel, pluginHtml ]
	};
	return await prettier.format(code, options);
}

window.prettify = {	
	json: async (code) => {
		var options = {
			parser: "babel",
			plugins: [ pluginJson, pluginEstree ]
		};
		console.log("prettify.json");
		return await prettier.format(code, options);
	},
	js: async (code) => {
		var options = {
			parser: "babel",
			plugins: [ pluginEstree, pluginBabel, pluginHtml ]
		};
		console.log("prettify.js");
		var prettifiedCode = await prettier.format(code, options);
		console.log(prettifiedCode);
		return prettifiedCode;
	},
};


window.write = {
	obj: (obj) => 
		console.log(obj),
	person: (person) => 
		console.log(`Name = ${person.name}, Age = ${person.age}, XP = ${person.xp}`),
	jsPerson: () => {
		var person = { name: "Ted", age: 30, xp: 500};
		window.write.person(person);
		window.write.obj(person);
	}	
};


 