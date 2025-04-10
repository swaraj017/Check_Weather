import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateWeatherInfo }) {
    const [city, setCity] = useState("");
    const api_key = "44c8b5c1eb5b05b3a7ada85b93b9b167";
    const api_url = "https://api.openweathermap.org/data/2.5/weather";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) throw new Error("City not found or API error");

            let res = await response.json();
            let result = {
                city: res.name,
                temp: res.main.temp,
                humidity: res.main.humidity,
                weather: res.weather[0].description,
                wind: res.wind.speed,
            };
            updateWeatherInfo(result);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const handleChange = (evt) => setCity(evt.target.value);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className="SearchBox">
            <div className="title">
      <h1>
        Search Weather{" "}
        <img
          src="https://www.pngitem.com/pimgs/m/485-4854995_weather-icon-dribbble-graphic-icon-logo-app-logo.png"
          alt="weather"
        />
      </h1>
    </div>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" value={city} onChange={handleChange} variant="standard" required />
                <Button variant="outlined" type="submit">Search</Button>
            </form>
        </div>
    );
}
