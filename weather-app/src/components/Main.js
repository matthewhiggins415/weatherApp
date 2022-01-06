import React, { useState } from 'react'
import DataOutput from './DataOutput'
import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config()

const WeatherFinder = () => {
  const [city, setCity] = useState('')
  const [stateCode, setStateCode] = useState('')
  const [location, setLocation] = useState('')
  const [humidity, setHumidity] = useState(null)
  const [temperature, setTemperature] = useState(null)
  const [conditions, setConditions] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    let apiKey = process.env.REACT_APP_API_KEY
    let cityName = city
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`)
      .then(response => {
        console.log(response)
        let name = response.data.name
        let temp = response.data.main.temp
        let humidity = response.data.main.humidity
        let conditions = response.data.weather[0].main

        console.log(name, temp, humidity, conditions)

        setLocation(name)
        setHumidity(temp)
        setTemperature(humidity)
        setConditions(conditions)

      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className="container">
        <div className="containerLeft">
          <h2 className="logo">Weather Finder</h2>
          <div className="logoTxt">
            <p>Find out the temperature,</p>
            <p>weather conditions and more...</p>
          </div>
        </div>
        <div className="containerRight">
          <div className="functionality">
            <form className="functionalityForm" onSubmit={handleSubmit}>
              <input id="city" name="city" value={city} onChange={e => setCity(e.target.value)} placeholder="city" type="text" required/>
              <input id="stateCode" name="stateCode" value={stateCode} onChange={e => setStateCode(e.target.value)} placeholder="state" type="text" required/>
              <button type="submit">Get Weather</button>
            </form>
          </div>
          <div className="bottomDataContainer">
            <DataOutput name="Location" data={location}/>
            <DataOutput name="Temperature (°F)" data={temperature}/>
            <DataOutput name="Humidity (%)" data={humidity}/>
            <DataOutput name="Conditions" data={conditions}/>
          </div>
        </div>
      </div>
    </>
  )
}


export default WeatherFinder
