import Prism from "prismjs";

//import {format} from "prettier";

// const prettier = require('prettier');

/*
import * as prettier from "prettier/standalone"
import pluginBabel from "prettier/plugins/babel"
import pluginEstree from "prettier/plugins/estree"
import pluginHtml from "prettier/plugins/html"
import { Options } from "prettier"
/**/


const prettier = require("prettier/standalone");
const pluginBabel = require("prettier/plugins/babel");
const pluginEstree = require("prettier/plugins/estree");
const pluginHtml = require("prettier/plugins/html");
/**/


Prism.manual = true;


window.highlight = async (code, language) => {
	var grammar = Prism.languages[language];
	console.log("language:");
	console.log(language);
	console.log("grammar:");
	console.log(grammar);
	if (grammar) {
		console.log("Returning highlighed code")
		return Prism.highlight(code, grammar, language);
	}
	else {
		console.log("Returning plain code")
		return code;
	}
}


window.highlightjson = async (code) => {
	const doGramLog = (name, grammar) => {
		console.log(name);
		console.log(grammar);
	}

	var gramA = Prism.languages['json'];
	doGramLog("gramA:", gramA);

	var gramB = Prism.languages.json;
	doGramLog("gramB:", gramB);

	var grammar = gramB;
	if (grammar) {
		console.log("Highlighting code...")
		return Prism.highlight(code, grammar, "json");
	}
	else {
		console.log("Returning plain code")
		return code;
	}
}

window.hltest = async () => {

}


window.prettify = {
	json: async (code) => {
		var options = {
			parser: "json",
			plugins: [pluginEstree, pluginBabel]
		};
		console.log("alt prettify.json");
		var prettifiedCode = await prettier.format(code, options);
		console.log(prettifiedCode);
		return prettifiedCode;
	},
	js: async (code) => {
		var options = {
			parser: "babel",
			plugins: [pluginEstree, pluginBabel, pluginHtml]
		};
		console.log("alt prettify.js");
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
		var person = { name: "Ted", age: 30, xp: 500 };
		window.write.person(person);
		window.write.obj(person);
	}
};

