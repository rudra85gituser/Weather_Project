/* const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ place; */
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '192c8ab208msh41b87a56fa39d0dp1f953cjsnd84f709614f2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function fetchData(place){

    cityname.innerHTML=place;
   const response = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ place, options)
   .then(response => {
    return response.json();
   })
   .then(response=>{
    console.log(response);
    temp.innerHTML = response.temp
    feels.innerHTML=response.feels_like
    clouds.innerHTML = response.cloud_pct
    humidity.innerHTML=response.humidity
    mintemp.innerHTML=response.min_temp
    maxtemp.innerHTML=response.max_temp
   })
  .catch(err=>{
    console.error('Error:', Error);
  })
}

const btn=document.getElementById('search');
btn.addEventListener('click',(e)=>{
  e.preventDefault()
    fetchData(place.value);
})







