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


	}


	public record Person(string name, int age, int xp);

}