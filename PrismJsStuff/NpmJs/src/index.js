"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __importDefault(require("prismjs"));
//import {format} from "prettier";
// const prettier = require('prettier');
const prettier = __importStar(require("prettier/standalone"));
/*
import pluginBabel from "prettier/plugins/babel"
import pluginEstree from "prettier/plugins/estree"
import pluginHtml from "prettier/plugins/html"
/**/
//const prettier = require("prettier/standalone");
const pluginBabel = require("prettier/plugins/babel");
const pluginEstree = require("prettier/plugins/estree");
const pluginHtml = require("prettier/plugins/html");
const doSomething = () => {
    //pluginBabel.parsers.
    return;
};
prismjs_1.default.manual = true;
window.highlight = (code, language) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("index.js: highlight");
    console.log("language:");
    console.log(language);
    console.log("'highlight': looking up gammar");
    var grammar = prismjs_1.default.languages[language];
    console.log("grammar:");
    console.log(grammar);
    if (grammar) {
        console.log("Returning highlighed code");
        return prismjs_1.default.highlight(code, grammar, language);
    }
    else {
        console.log("Returning code");
        return code;
    }
});
window.prettify = {
    json: (code) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("index.js: prettify.json");
        var options = {
            parser: "json",
            plugins: [pluginEstree, pluginBabel]
        };
        console.log(options);
        var prettifiedCode = yield prettier.format(code, options);
        console.log("Prettified code:");
        console.log(prettifiedCode);
        return prettifiedCode;
    }),
    js: (code) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("index.js: prettify.js");
        var options = {
            parser: "babel",
            plugins: [pluginEstree, pluginBabel, pluginHtml]
        };
        console.log(options);
        var prettifiedCode = yield prettier.format(code, options);
        console.log("Prettified code:");
        console.log(prettifiedCode);
        return prettifiedCode;
    }),
};
window.write = {
    obj: (obj) => console.log(obj),
    person: (person) => console.log(`Name = ${person.name}, Age = ${person.age}, XP = ${person.xp}`),
    jsPerson: () => {
        var person = { name: "Ted", age: 30, xp: 500 };
        window.write.person(person);
        window.write.obj(person);
    }
};
