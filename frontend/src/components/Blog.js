import React from 'react'
import axios from 'axios';
import 
{  
  Typography, 
  CardContent,
  CardMedia,
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Box

} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

const Blog = ({title, description, imageURL,userName, isUser, id}) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`)
  }

  const deleteRequest = async () => {
    const res = axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = (e) => {
    deleteRequest()
    .then(() => navigate("/"))
    .then(() => navigate("/blogs"));
  };
  console.log(title, isUser);
  return (
    
    
    

        <div>

            {" "}
        
            <Card sx={{ 
                width: "40%", margin:"auto", mt:2, padding: 2, boxShadow: "5px 5px 10px #ccc" , 
                ":hover:":{boxShadow: "10px 10px 20px #ccc"} 
            }}>

            {isUser && (
              <Box display='flex'>
                <IconButton  onClick={handleEdit} sx={{ marginLeft:'auto' }}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton onClick={handleDelete} >
                  <DeleteForeverIcon color="error"/>
                </IconButton>
              
              </Box>
            )}


            <CardHeader
                avatar={
              <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                {userName.charAt(0)}
              </Avatar>
            }
            
            title={title}
            
          />
          <CardMedia
            component="img"
            height="194"
            image={imageURL}
            alt="Paella dish"
          />

         
          <CardContent>
          <hr />
          <br />
            <Typography variant="body2" color="text.secondary">

              <b>{ userName } </b> {": "}
              {description}
            </Typography>
          </CardContent>
          
        </Card>

        </div>
      );
    
    
  
}

export default Blog;