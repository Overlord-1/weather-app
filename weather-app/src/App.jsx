import './App.css';
import dayCloudsRain from '../src/assets/day-clouds-rain2.png'
import snow from './assets/snow.png'
import nightThunderstorms from './assets/night-thunderstorms.png'
import dayThunderStorms from './assets/daythunderstorms.png'
import dayHaze from './assets/sunny-haze.png'
import sunnyDay from './assets/sunny-day.png'







const apiKey = '77a4916ed0d74a65ea43ee0235208e20';
const search = async() => {
  const searchBarContent = document.getElementsByClassName('cityName');
  if(searchBarContent[0].value === "")
  {
    console.log("Enter a value ");
    return 0;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBarContent[0].value}&units=Metric&appid=${apiKey}`;

  let response = await fetch(url); // fetch the api 
  let data = await response.json(); //convert the response sent by the API into JSON format
  if(data ===[])
    alert("enter a value");
  //6 things to alter on return from API
  /**
   * 1) main-temp
   * 2) Location
   * 3)feels-like-temp
   * 4)humidity
   * 5)UV-index
   * 6)wind-speed
   */  
  const mainTemp = document.getElementsByClassName('main-temp');
  const location = document.getElementsByClassName('cityNamePrint');
  const feelsLikeTemp = document.getElementsByClassName('feelsData');
  const humidity = document.getElementsByClassName('humidData');
  const minTemp = document.getElementsByClassName('minTemp');
  const maxTemp = document.getElementsByClassName('maxTemp');

  mainTemp[0].innerHTML = Math.trunc(data.main.temp) + " °C";
  location[0].innerHTML = data.name;
  feelsLikeTemp[0].innerHTML = Math.trunc(data.main.feels_like) + " °C";
  humidity[0].innerHTML = data.main.humidity;
  minTemp[0].innerHTML = Math.trunc(data.main.temp_min)  + " °C";
  maxTemp[0].innerHTML = Math.trunc(data.main.temp_max) + " °C";


  
  
}

function App() {
  return (
    <>
      <div className='body'>
        <div className="main-content">
          <div className="leftSide">
            <div className="inputHolders">
              <input type="text" className="cityName" placeholder='Search for a City..' />
              <button className="search-button" onClick={() => {
                search()
              }}> Search</button>
            </div>
            <div className="imageAndTemp">

              <img src={dayCloudsRain} alt="day-clouds-rain" className="main-image" />
              <div className="main-temp">30 °C</div>

            </div>
            <div className="cityNamePrint">Mumbai</div>
            <div className="name">Ruchir Khare 2023</div>
          </div>
          <div className="rightSide">
            <div className="firstRow">
              <div className="feelsLike">
                Feels Like  
                <div className="Data feelsData">30 °C</div>
              </div>
              <div className="feelsLike">
                Minimum Temp
                <div className="Data minTemp">27 °C</div>
              </div>
            </div>
            <div className="secondRow">
              <div className="feelsLike">
                Humidity
                <div className="Data humidData">90%</div>
              </div>
              <div className="feelsLike">
                Maximum Temp
                <div className="Data maxTemp">32 °C </div>
              </div>
            </div>


          </div>
        </div>
        {/* <div className="name">RUchir Khare 2023</div> */}
      </div>

    </>




  );
}

export default App;