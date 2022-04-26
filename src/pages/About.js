import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import Anthony from ".././assets/anthony.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';



const About = () => {
  const [text,setText] = useState("anthonyharold67@gmail.com")
  
  return (
    <div  style={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
    }}> 
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height:"90vh"}}>
      <Card sx={{ width: 345,height:"80vh"}}>
      <CardActionArea>
        <img src={Anthony} width="45%" height="35%" alt="anthony" />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" sx={{fontFamily: "fantasy",}}>
            Anthony HAROLD
          </Typography>
          <Typography variant="p">
          I"m a Frontend Web Developer with a passion for learning and building new things.
          </Typography>
          <Typography variant="h6" color="text.secondary">
          <a href={text} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black"}}> {text}</a>
          </Typography>
          <IconButton onClick={()=>setText("www.linkedin.com/in/anthony-harold-67-fs")}>
            <LinkedInIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
            <IconButton onClick={()=>setText("anthonyharold67@gmail.com")}>
            <GoogleIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
            <IconButton onClick={()=>setText("https://github.com/anthonyharold67")}>
            <GitHubIcon sx={{color: "black",fontSize:35}}/>
            </IconButton>
          

        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    </div>
  )
}

export default About;