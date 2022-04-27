import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../contexts/BlogContext';
import { AuthContext } from '../contexts/AuthContext';
import {useFetch }from "../helpers/functions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Spinner from ".././assets/spinner.gif"
import { toastWarnNotify } from '../helpers/ToastNotify';


const Dashboard = () => {
  const {isLoading,blogList} = useFetch()
  const {setDetails,updateFavorites}= useContext(BlogContext)
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  
  
  const handleDetail = (id,title,imageUrl,favorites,date,email,content) => {
    setDetails({id,title,imageUrl,favorites,date,email,content})
    navigate("/details/"+id)
  }
  const handleFavorites = (id,title,imageUrl,favorites,date,email,content) => {
    
    if(currentUser){
      updateFavorites({id,title,imageUrl,favorites,date,email,content})
    }
    else{
      toastWarnNotify("You need to login first!")
      navigate("/login")
    }
    
  }
  return (
    <div style={{backgroundColor:"bisque",height:"100%"}}>
      <Box
      xs={{ d: "flex" }}
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      
    >
      {!isLoading ? blogList?.map((item, index) => (
        <Card sx={{ width: "350px", m: "10px", minheight: "35%",cursor:"pointer" }} key={index} >
          <div onClick={()=>handleDetail(item.id,item.title,item.imageUrl,item.favorites,item.date,item.email,item.content)}>
          <img
            
            height="150"
            width="40%"
            style={{marginTop:"5px",minHeight:"150px",minWidth:"40%",maxHeight:"150px",maxWidth:"40%",marginLeft:"auto",marginRight:"auto"}}
            src={item?.imageUrl ? item.imageUrl : "https://www.w3schools.com/howto/img_avatar.png"}
            alt="img"
          />
          <Typography sx={{m:0,mt:1,width:"100%"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"darkgreen"}}>
                  {item?.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{height:"45px",overflow: "hidden",textAlign:"left",ml:"5px"}}>
                  {item?.content ?? "No Content"}
                </Typography>
                <Typography gutterBottom variant="span" component="div" sx={{textAlign:"left",ml:"5px"}}>
                  {item?.date ?? "No date"}
                </Typography>
              </Typography>
          
            
            <Typography paragraph sx={{textAlign:"left",mt:1,color:"black"}}>
              <AccountCircle/>{item?.email ?? "No email"}
            </Typography>
            </div>
            {item.favorites>0 ?<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left",color:"red"}}  onClick={()=>handleFavorites(item.id,item.title,item.imageUrl,item.favorites,item.date,item.email,item.content)}>
              <FavoriteIcon/> 
            </IconButton>:<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}}  onClick={()=>handleFavorites(item.id,item.title,item.imageUrl,item.favorites,item.date,item.email,item.content)}>
              <FavoriteIcon/> 
            </IconButton>}
            <span>{item?.favorites ?? "0"}</span>
            <IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}}>
              <ChatBubbleOutlineOutlinedIcon />
            </IconButton>
            <span>{item?.comments ?? "0"}</span>
        </Card>
      )) : (<div width="100%" height="100vh">
        <img src={Spinner} height="100vh" alt="loading..."/>
      </div>)}
    </Box>
    </div>
  )
}

export default Dashboard