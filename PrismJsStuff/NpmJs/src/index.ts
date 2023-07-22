import Prism from "prismjs";

//import {format} from "prettier";

// const prettier = require('prettier');


import * as prettier from "prettier/standalone"
/*
import pluginBabel from "prettier/plugins/babel"
import pluginEstree from "prettier/plugins/estree"
import pluginHtml from "prettier/plugins/html"
/**/


//const prettier = require("prettier/standalone");
const pluginBabel = require("prettier/plugins/babel");
const pluginEstree = require("prettier/plugins/estree");
const pluginHtml = require("prettier/plugins/html");
/**/

import { Options } from "prettier"


const doSomething = (): void => {
	//pluginBabel.parsers.

	return;
}

type Person = { name: string, age: number, xp: number }

declare global {
	interface Window {
		highlight: (code: string, language: string) => Promise<string>
		pretJsHtml: (code: string) => Promise<string>
		prettify: {
			json: (code: string) => Promise<string>,
			js: (code: string) => Promise<string>
		},
		write: {
			obj: (obj: unknown) => void,
			person: (person: Person) => void,
			jsPerson: () => void
		}

	}
}


Prism.manual = true;

window.highlight = async (code: string, language: string): Promise<string> => {
	console.log("index.js: highlight")
	console.log("language:");
	console.log(language);
	console.log("'highlight': looking up gammar")
	var grammar = Prism.languages[language];
	console.log("grammar:");
	console.log(grammar);

	if (grammar) {
		console.log("Returning highlighed code")
		return Prism.highlight(code, grammar, language);
	}
	else {
		console.log("Returning code")
		return code;
	}
}

window.prettify = {
	json: async (code) => {
		console.log("index.js: prettify.json");
		var options: Options = {
			parser: "json",
			plugins: [pluginEstree, pluginBabel]
		};
		console.log(options);
		var prettifiedCode = await prettier.format(code, options);
		console.log("Prettified code:")
		console.log(prettifiedCode);
		return prettifiedCode;
	},
	js: async (code) => {
		console.log("index.js: prettify.js");
		var options: Options = {
			parser: "babel",
			plugins: [pluginEstree, pluginBabel, pluginHtml]
		};
		console.log(options);
		var prettifiedCode = await prettier.format(code, options);
		console.log("Prettified code:")
		console.log(prettifiedCode);
		return prettifiedCode;
	},
};

window.write = {
	obj: (obj: unknown) =>
		console.log(obj),
	person: (person: Person) =>
		console.log(`Name = ${person.name}, Age = ${person.age}, XP = ${person.xp}`),
	jsPerson: () => {
		var person = { name: "Ted", age: 30, xp: 500 };
		window.write.person(person);
		window.write.obj(person);
	}
};

