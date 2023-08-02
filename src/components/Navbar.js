import React,{useState} from 'react'
import '../components/Query.css'
import Loader from '../components/Loader'
import LoadingBar from 'react-top-loading-bar'

import feelslike from '../feelslike.svg'
import humidity from '../humidity.svg'
import sunrise from '../sunrise.svg'
import sunset from '../sunset.svg'
import wind from '../wind.svg'
import sun from '../sun.png'

export default function Navbar(props){
  const handleClick  = async ()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '005f817f9bmsh20d99612520438bp145e2fjsndb93a5c2650b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    try{
      setProgress(progress + 0)
      setProgress(progress + 30)
    let response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`,options)
    setProgress(progress + 70) 
    const data =await response.json();
    setProgress(progress + 100)
    settext(data)
    let ShowHide = document.getElementById('ShowHide')
    let preview = document.getElementById('preview')
    ShowHide.style.display = 'none'
    if(search === undefined || search == null || search === ''){
      let preview = document.getElementById('preview')
      preview.style.display = 'block'
    }else if(!search){
    }
    else{
      ShowHide.style.display = 'block'
      preview.style.display = 'none'
    }
    setsearchValue(search)
  }catch(error){
 
  }
}
handleClick()
const HandleOnChange = (event)=>{
  setsearch(event.target.value)
}
const [search,setsearch] = useState('')
const [progress, setProgress] = useState(0)
const [text,settext] = useState([])
const [searchValue,setsearchValue] = useState('')
  return (
    <>
      <LoadingBar color='yellow' height={'2px'} progress={progress} onLoaderFinished={() => setProgress(0)}
      />
      <div className="container">
        <div id="navbar">
        <h1>{props.title}</h1>
        <div>
        <i className="fa-solid fa-magnifying-glass"></i><input type="text" value={search} id='UserInput' onChange={HandleOnChange} placeholder='Search Location...' />
     <button id="btn" onClick={handleClick}>Search</button>
     </div>
        </div>
    <Loader />
        <div id="ShowHide">
        <div id='heading'><p>Showing Result for: <span id="city">{searchValue}</span></p></div>
        <div id="main_content">
          <img src={sun} id='sunPic' alt='' />
          <div id="temp">{text.temp}<span>&#8451;</span></div>
          <div id="temp_like"><img src={feelslike} id='feel' alt="" /> Feels_Like 
          <br/> <span id="feels_like">{text.feels_like}</span><span>&#8451;</span>
          </div>
          <div className="submain">
          <div id="max_temp"><span id="max_temp">Max: {text.max_temp}</span><span>&#8451;</span></div>
          <div id="min_temp"><span id="min_temp">Min: {text.min_temp}</span><span>&#8451;</span></div>
          </div>
        </div>
       <h2>Air Condition!</h2>
        <div id="air_condition">
       <div className="main"><img src={humidity} className='logos' alt=''/> Humidity
           <br/><span id="humidity">{text.humidity}%</span></div>
        <div className="main"><img src={wind} className='logos' alt="" /> Wind speed
                         <br/><span id="wind_speed">{text.wind_speed}km/hr</span>
        </div>
        <div className="main"><img src={wind} className='logos' alt="" /> Wind degress
                          <br/><span id="wind_degress">{text.wind_degrees}</span></div>
        <div className="main"><img src={sunrise} className='logos'alt="" /> Sunrise
                    <br/><span id="sunrise">{text.sunrise}</span></div>
        <div className="main"><img src={sunset} className="logos"alt="" /> Sunset
                      <br/><span id="sunset">{text.sunset}</span></div>
       </div>
       </div>
      </div>
    </>
  )
}