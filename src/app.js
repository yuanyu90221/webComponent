
const country = document.querySelector('#country').value;
let temp = document.querySelector('#temp');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=> {
  getWeather();
})

/**
 *  getWeather
 *  @description getWeather
 * 
 */
const getWeather = async() => {
  let city = document.querySelector('#city').value;
  console.log(`${city}`);
  let pic = document.querySelector('#pic');
  
  const api_call = await fetch(`http://weather.json.tw/api?region=${city.toLowerCase()}_city&_=1540212664546`);
  const data = await api_call.json();
  // console.log(data.information.);
  let {information} = data;
  information = information.slice(0,3);
  if (information.includes('雲')) {
    pic.src = './cloud.png'; 
  } else {
    pic.src = './sun.png'; 
  }
  let {currentTemperature} = data;
  temp.innerHTML = `<h1 style="color:red;">${currentTemperature}</h1>`;
}