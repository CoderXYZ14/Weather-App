
import './App.css'
import SearchBox from "./WeatherApp/SearchBox.jsx";
import InfoBox from "./WeatherApp/InfoBox.jsx";
import WeatherApp from "./WeatherApp/WeatherApp.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {


  return (
    <>
        <WeatherApp/>
        <SpeedInsights/>
    </>
  )
}

export default App
