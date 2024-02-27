let data = new Date()
let calender = document.getElementById("calendar")
calender.innerText = data.toDateString()


let cityName = document.getElementById("cityName")
let cityDetails = document.getElementById("cityDetails")
let Temp = document.getElementById("temp")
let TempImg=document.querySelector('#hello')
let wind=document.getElementById("speed")
let result = async () => {
    if (cityName.value.length == 0) {
        alert("Enter City name Before Searching")
    }
    else {
        //API fetch
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        cityDetails.innerText=`${data.name},${data.sys.country}`
        // Temp.innerText=`${data.main.temp}℃`
        Temp.innerHTML=`<h1>${data.main.temp}<sup>o</sup>C</h1>`
        if(data.main.temp >30){
               TempImg.src="img/sunny.png"
        }
         else if(data.main.temp >20 && data.main.temp<30){
            TempImg.src="img/normal.png"
        }
         else if(data.main.temp>15 && data.main.temp<20){
            TempImg.src="img/cloudy.png"
        }
        else{
            TempImg.src="img/cloudy.png"
        }
        wind.innerText=`Wind Speed: ${data.wind.speed}`
    }
}



