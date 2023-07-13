using Microsoft.AspNetCore.Components;

namespace PrismJsStuff.Data
{
	public class WeatherForecastService
	{
		private static readonly string[] Summaries = new[]
		{
		"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
	};

		public Task<WeatherForecast[]> GetForecastAsync(DateOnly startDate)
		{
			return Task.FromResult(Enumerable.Range(1, 5).Select(index => new WeatherForecast
			{
				Date = startDate.AddDays(index),
				TemperatureC = Random.Shared.Next(-20, 55),
				Summary = Summaries[Random.Shared.Next(Summaries.Length)]
			}).ToArray());
		}
	}


	public class StringService
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

	public record Person(string name, int age, int xp);


	public static class StringUtil
	{
		public static MarkupString ToMarkupString(this string str)
		{
			return new MarkupString(str);
		}

	}


}