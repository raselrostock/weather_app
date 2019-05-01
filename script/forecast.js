const key ='ohqqH4nDU6oEArPixW8LpxdFZEcSKeo8';

//Get Weather Information
const getWeatherInfo = async ( locationKey ) =>{
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query =`${locationKey}?apikey=${key}`;
	const response = await fetch(base + query );
	const data = await response.json()
	return data[0];
};

//Get City Information
const getCity = async (city) =>{
	const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;
	const response = await fetch( base + query );
	const data = await response.json();
	return data[0];
};
