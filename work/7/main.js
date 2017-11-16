


$(document).ready(function() {

	function showWeather() {
		var input = $(".form__input").val(),
			inputBigLetter = input.charAt(0).toUpperCase() + input.slice(1),
			weatherFiveDays = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputBigLetter + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric',
			weatherNow = "https://api.openweathermap.org/data/2.5/weather?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

		$('#weather-info__heading').text(inputBigLetter + " weather for 5 days");
		$('.weather-info__item').remove();
		$('#weather-info-now__image').remove();

		$.getJSON(weatherNow, function(objektAPI) {
			var temp = Math.round(objektAPI.main.temp),
				weatherIcon = objektAPI.weather[0].icon,
				imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

			$('#weather-info-now__text').text("Now in " + inputBigLetter + "  " + temp + "°");
			$('#weather-info-now').append("<img src=" + imgLink + " alt='icon' id='weather-info-now__image' class='weather-info-now__image'>");
		});


		$.getJSON(weatherFiveDays, function(objektAPI) {
			var dayList = objektAPI.list;

			dayList.forEach( function(item, i) {
				var selection = i*8+6;

				var temp = Math.round(dayList[selection].main.temp),
					 date = dayList[selection].dt_txt.slice(0, 10),
					 weatherIcon = dayList[selection].weather[0].icon,
					 imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png",
					 dateParagraph = "<p class='weather-info__date'>" + date + "</p>",
					 tempParagraph = "<p class='weather-info__paragraph'>" + temp +  "°" + "</p>",
					 image = "<img src=" + imgLink + " alt='icon' class='weather-info__image'>",
					 weatherValue = "<div class='weather-info__value'>" + tempParagraph + image + "</div>",
					 el = "<li id='weather-info__item' class='weather-info__item'>" + dateParagraph + weatherValue + "</li>";

				return $('#weather-info-list').append(el);
			});
		});
	}

	// $(".form__button").click(function() {
	// 	showWeather();
	// });

	// $(".form__input").keypress(function(e){
	//    if(e.keyCode==13){
	//      	showWeather();
	//    }
	// });

	$("form").submit(function(e) {
		showWeather();
		e.preventDefault();
	});

});
