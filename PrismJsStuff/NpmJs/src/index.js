import Prism from "prismjs";

Prism.manual = true;

window.highlight = (code, language) => {
	var grammar = Prism.languages[language];
	if (grammar) {
	    return Prism.highlight(code, grammar, language);
	}
	else {
		return Prism.util.encode(code);
	}
}

window.writeLog = (obj) => {
	console.log(`writeLog: ${obj}`);
}

window.person = { Name: "Alex", Age: 70 };


window.writePersonB = (person) => {
	
	console.log(`writePersonB: Name = ${person.name}, Age = ${person.age}`);
}


window.writePersonC = (name, age) => {
	
	console.log(`writePersonC: Name = ${name}, Age = ${age}`);
}

window.writePersonD = (person) => {
	console.log(person);
	console.log(`writePersonD: Name = ${person.name}, Age = ${person.age}, Count = ${person.doCount}`);
}



window.writeObject = () => {
	console.log(window.person);
}
