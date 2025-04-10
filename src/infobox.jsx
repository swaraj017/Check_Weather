import "./infobox.css";
import { Cloud, CloudRain, Wind, Sun, Droplets, CloudFog, Thermometer } from "lucide-react";

export default function InfoBox({ info }) {
  const videoSrc = {
    sunny: "https://cdn.pixabay.com/video/2016/05/22/3257-167695231_small.mp4",
    wind: "https://videos.pexels.com/video-files/856966/856966-uhd_2160_1440_30fps.mp4",
    cloudy: "https://pixabay.com/videos/download/video-214409_tiny.mp4",
    rain: "https://cdn.pixabay.com/video/2022/06/25/122080-725067552_tiny.mp4",
    foggy: "https://cdn.pixabay.com/video/2021/08/04/83880-585600454_tiny.mp4",
  };

  console.log("Info received in InfoBox:", info);
  const { weather = "", humidity, wind, temp } = info;
  const lowerWeather = weather.toLowerCase().trim();

  const selectedVideo =
    lowerWeather.includes("rain") || humidity > 90 ? videoSrc.rain :
    lowerWeather.includes("fog") || humidity > 80 ? videoSrc.foggy :
    lowerWeather.includes("cloud") ? videoSrc.cloudy :
    lowerWeather.includes("wind") || wind > 10 ? videoSrc.wind :
    lowerWeather.includes("clear") || lowerWeather.includes("sun") ? videoSrc.sunny :
    videoSrc.foggy;

  const WeatherIcon =
    lowerWeather.includes("rain") || humidity > 90 ? CloudRain :
    lowerWeather.includes("fog") || humidity > 80 ? CloudFog :
    lowerWeather.includes("cloud") ? Cloud :
    lowerWeather.includes("clear") || lowerWeather.includes("sun") ? Sun :
    CloudFog;

  return (
    <div className="info-card">
      <video className="weather-video" autoPlay loop muted key={selectedVideo}>
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="info-content">
        <h2>Weather Info <WeatherIcon size={24} className="weather-main-icon" /></h2>
        <p><Thermometer size={16} className="detail-icon" /> <strong>Temperature:</strong> {temp}°C</p>
        <p><Droplets size={16} className="detail-icon" /> <strong>Humidity:</strong> {humidity}%</p>
        <p><WeatherIcon size={16} className="detail-icon" /> <strong>Weather:</strong> {weather}</p>
        <p><Wind size={16} className="detail-icon" /> <strong>Wind Speed:</strong> {wind} m/s</p>
      </div>
    </div>
  );
}
