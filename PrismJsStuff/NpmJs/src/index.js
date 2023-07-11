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


 