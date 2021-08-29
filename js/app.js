

const getCity = () => {
	const city = document.getElementById('input-city-field').value;
	document.getElementById('input-city-field').value = "";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=485d71e5a10d39e1c0f4af7157eea393`
	console.log(url);
	fetch(url)
		.then(res => res.json())
		.then(data => getTemperature(data))
		.catch(error => displayError(error))
}

const displayError = error => {
	// add alert from bootstrap
	const div = document.getElementById("input-append");
	const newAlertDiv = document.createElement("div");
	newAlertDiv.id = "alert-boots";
	newAlertDiv.innerHTML =
		`<div class="alert alert-danger" role="alert">
		OOPS!please write a valid city name.
  	</div>` ;
	div.appendChild(newAlertDiv);



}

const getTemperature = (tempa) => {
	// clear main icon
	document.getElementById('weather-icon').style.display = 'none';
	// document.getElementById('icon-class').textContent = "";
	// clear alerts
	document.getElementById("input-append").textContent = "";

	console.log("error testing", tempa);
	console.log("error testing", tempa.clouds.cod);
	document.getElementById("temp-number").innerText = parseInt((tempa.main.temp) - (273.15));
	document.getElementById("city-name").innerText = tempa.name;
	document.getElementById("sky-condition").innerText = tempa.weather[0].main;
	// icon add
	const descrivedDiv = document.getElementById("description");
	document.getElementById("description").textContent = "";
	const newImg = document.createElement('div')
	newImg.innerHTML = ` <img id="weather-icon" src="https://openweathermap.org/img/wn/${tempa.weather[0].icon}@2x.png" alt="">`

	descrivedDiv.appendChild(newImg);

	// replace in exixting image
	console.log(document.getElementById("weather-icon").innerHTML);



}