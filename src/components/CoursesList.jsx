import React from 'react';
import {courses} from "../data/courses";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export const CoursesList = () => {
  return (
    <div className='courses-container'>
        {courses.map(course =>{
            return(
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="course"
                  height="180"
                  image={require("./courses/"+course.id+".jpg")}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button disabled={true} size="small">{course.horas}</Button>
                  <Button disabled={true} size="small">{course.final}</Button>
                </CardActions>
              </Card>
            )
        })}
    </div>
  )
}
