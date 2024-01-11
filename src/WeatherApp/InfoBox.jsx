import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1615226120487-90ec48f5d316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww";
    const RAIN_URL="https://images.unsplash.com/photo-1564599826778-dcb8f1481c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbnNvb24lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
       <div className="infoBox">
            {/*<h1>Weather Info -{info.weather}</h1>*/}
           <div className="cardContainer">
           <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                   sx={{ height: 140 }}
                   image={info.humidity>95?RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
                       title="green iguana"
               />
               <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                       {info.city } {info.humidity>95?<ThunderstormIcon/>:(info.temp>15)?<WbSunnyIcon/>:<AcUnitIcon/>}
                   </Typography>
                   <Typography variant="body2" color="text.secondary" component={"span"}>
                       <p>Temperature = {info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}% </p>
                       <p>Min Temp = {info.tempMin}&deg;C </p>
                       <p>Max Temp = {info.tempMax}&deg;C </p>
                       <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                   </Typography>
               </CardContent>

           </Card>
           </div>
       </div>
    )
}