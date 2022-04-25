import React, { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logOut } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleExit = () => {
    logOut();
    navigate("/")
  }
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
      <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height:"80vh"}}>
      <Card sx={{ width: 345,height:"50vh"}}>
      <CardActionArea>
        <AccountCircle sx={{fontSize:115}}/>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" sx={{fontFamily: "fantasy",}}>
            {currentUser?.displayName.toUpperCase()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           {currentUser?.email}
          </Typography>
          <IconButton>
            <ExitToAppIcon onClick={handleExit}/>
          </IconButton>

        </CardContent>
      </CardActionArea>
    </Card>
      </div>
    </div>
  )
}

export default Profile