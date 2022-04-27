import React, { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'
import {AuthContext} from '../contexts/AuthContext'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import {DeleteBlog} from ".././helpers/functions"
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const {updateFavorites,updateHandler}= useContext(BlogContext)
  const {details} = useContext(BlogContext)
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(details)
  const handleFavorites = (id,title,imageUrl,favorites,date,email,content) => {
    console.log("mdsdsd")
    updateFavorites({id,title,imageUrl,favorites,date,email,content})
    
  }
  const handleEdit = (id,title,imageUrl,content,favorites,email,date) => {
    updateHandler(id,title,imageUrl,content,favorites,email,date)
    navigate("/updateblog/"+id)
  }
  const handleDelete = (id) => {
    DeleteBlog(id)
    navigate("/")
  }
  return (
   
     <Box
     xs={{ d: "flex" }}
     display="flex"
     alignItems="center"
     justifyContent="space-evenly"
     flexWrap="wrap"
     sx={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
     }}
   >
     
       <Card sx={{ width: "65%", m: 5, height: 600,cursor:"pointer",backgroundColor:"bisque" }} >
         <div>
         <img
           height="200"
           width="25%"
           src={details?.imageUrl}
           alt="img"
           style={{marginTop:"15px"}}
         />
         <Typography sx={{m:0,mt:1,width:"100%"}}>
               <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"darkgreen"}}>
                 {details.title.toUpperCase()}
               </Typography>
               <Typography variant="body2" sx={{textAlign:"center",m:"15px",fontSize:"1rem"}}>
                 {details?.content ?? "No Content"}
               </Typography>
               <Typography gutterBottom variant="span" component="div" sx={{textAlign:"center",m:"15px"}}>
                 {details?.date ?? "No date"}
               </Typography>
             </Typography>
         
           
           <Typography paragraph sx={{textAlign:"center",mt:1,color:"black",fontSize:"16px"}}>
             <AccountCircle/>{details?.email ?? "No email"}
           </Typography>
           </div>
           {details.favorites>0 ?<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left",color:"red"}}  >
             <FavoriteIcon/> 
           </IconButton>:<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}} onClick={()=>handleFavorites(details.id,details.title,details.imageUrl,details.favorites,details.date,details.email,details.content)}  >
             <FavoriteIcon/> 
           </IconButton>}
           <span>{details?.favorites ?? "0"}</span>
           <IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}}>
             <ChatBubbleOutlineOutlinedIcon />
           </IconButton>
           <span>{details?.comments ?? "0"}</span>
           
           {currentUser.email===details.email && (<div>
            <IconButton sx={{color:"black",fontSize:55}} onClick={()=>handleDelete(details.id)}>
             <DeleteIcon  sx={{color:"black",fontSize:55}}/>
             </IconButton>
             <IconButton sx={{color:"black",fontSize:55}} onClick={()=>handleEdit(details.id,details.title,details.imageUrl,details.content,details.favorites,details.email,details.date)}>
             <UpdateIcon  sx={{color:"black",fontSize:55}}/>
             </IconButton>
           </div>)}
           
     
         
         
       </Card>
       </Box>
  )
}

export default Details