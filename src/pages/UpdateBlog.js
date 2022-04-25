import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import { BlogContext } from "../contexts/BlogContext";
import { useNavigate } from 'react-router-dom';

const theme = createTheme();


export default function UpdateBlog() {
  const {info,setInfo,handleFormSubmit} = useContext(BlogContext);
  const [inputVal,setInputVal] = React.useState(info)
 const navigate = useNavigate()
  const date = "date"
  const handleChange = (e) => {
    e.preventDefault();
    const {name,value}=e.target
    setInfo({...info,[name]:value,[date]:new Date().toLocaleString("en-US")})
    setInputVal({...inputVal,[name]:value})
    
  };
  
  
  const handleFormReset = (e) => {
    e.preventDefault();
    handleFormSubmit(e)
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
      height: "91vh",

    }}> 
    <div  style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center',height:"80vh"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'bisque',
            borderRadius: '10px',
            padding: '20px',
            
          }}
        >
          
          <Box component="form" /* onSubmit={(e)=>handleFormSubmit(e)} */ noValidate sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5" sx={{color: 'darkslategray',letterSpacing:"3px",fontFamily: 'fantasy',marginTop:"10px"}}>
            New Blog
    </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              onChange={handleChange}
              color="success"
              value={inputVal.title}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageUrl"
              label="Image URL"
              type="url"
              id="imageUrl"
              onChange={handleChange}
              color="success"
              value={inputVal.imageUrl}
            />
            
            <TextField
              placeholder="Content"
              multiline
              rows={8}
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              id="content"
              onChange={handleChange}
              sx={{}}
              color="success"
              value={inputVal.content}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:"darkslategrey" }}
              onClick={(e)=>handleFormReset(e)}
            >
              Update Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </div>
  );
}