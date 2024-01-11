import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox(){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let info={
        city:"Delhi",
        feelsLike: 24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax: 25.05,
        humidity:47,
        weather:"haze"
    };
    return (
       <div className="infoBox">
            <h1>Weather Info -{info.weather}</h1>
           <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                   sx={{ height: 140 }}
                   image={INIT_URL}
                       title="green iguana"
               />
               <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                       {info.city}
                   </Typography>
                   <Typography variant="body2" color="text.secondary" component={"span"}>
                       <p>Temperature = {info.temp}&deg;C</p>
                       <p>Humidity = {info.humidity}&deg;C </p>
                       <p>Min Temp = {info.tempMin}&deg;C </p>
                       <p>Max Temp = {info.tempMax}&deg;C </p>
                       <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
                   </Typography>
               </CardContent>

           </Card>
       </div>
    )
}