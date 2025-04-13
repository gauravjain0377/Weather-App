import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1666720825304-67db37d44908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
  const HOT_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN_URL = "https://images.unsplash.com/photo-1623508488401-badfadea0157?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">

        <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = { 
            info.humidity > 80 
            ? RAIN_URL 
            : info.temp > 25
            ? HOT_URL 
            : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} { 
            info.humidity > 80 
            ? <ThunderstormIcon/> 
            : info.temp > 25
            ? <SunnyIcon/>
            : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div> Temperature = {info.temp}&deg;C </div>
         <div> Minimum Temperature = {info.tempMin}&deg;C </div>
         <div> Maximum Temperature = {info.tempMax}&deg;C </div>
         <div> Humidity = {info.humidity} </div>
         <div> Feels_Like = {info.feelsLike}&deg;C </div>
         <div> Weather = {info.weather} </div>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}