import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infobox"

 
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Nashik",
        humidity: 72,
        temp: 28.57,
        weather: "Clear Sky",
        wind: 3.92,
    });

    return (
        <div>
            <SearchBox updateWeatherInfo={setWeatherInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
