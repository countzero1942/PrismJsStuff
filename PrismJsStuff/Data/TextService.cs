using Microsoft.AspNetCore.Components;

namespace PrismJsStuff.Data;


public static class StringUtil
{
	public static MarkupString ToMarkupString(this string str)
	{
		return new MarkupString(str);
	}

}


public class TextService
{

	public readonly string Json1 = """
			{ "message": "this is json number 1!",
			"an_array": 
			[{ "blogAwesome": true, "reason": "best content" } ] }
			""";

	public readonly string Json2 = """
			{ "message": "this is json number 2!!" }
			""";

	public readonly string Js1 = """
			const html=/* HTML */ `<DIV> </DIV>`			
			""";

	public readonly string Js2 = """
				window.prettify = {json: async (code)=>{var options = {parser: "babel",plugins: [ pluginJson, pluginEstree ]
				};console.log("prettify.json");return await prettier.format(code, options);
				},js: async (code) => {var options = {parser: "babel",plugins: [ pluginEstree, pluginBabel, pluginHtml ]
				};console.log("prettify.js");var prettifiedCode = await prettier.format(code, options);
				console.log(prettifiedCode);return prettifiedCode;},
			};			
			""";


}