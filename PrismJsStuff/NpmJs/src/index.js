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