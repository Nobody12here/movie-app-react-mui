import React from 'react';
import {Card,CardContent,Button,CardMedia,CardActions,IconButton,Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "../App.css"
function MovieInfo({data,SetDisplay}){

	return(
		<Card  sx={{position:'fixed', zIndex:1, maxWidth:"400px",height:'500px',backgroundColor:"black",overflow:'auto',float:'center'}}>
			<IconButton onClick={()=>{SetDisplay(false)}} sx={{float:'right'}}>
				<CloseIcon sx={{color:"red"}}></CloseIcon>
			</IconButton>
			<CardMedia sx={{padding:'20px',width : "250px"}} component="img" src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}>
				</CardMedia>

			<CardContent>
				<Typography sx={{}} variant="h5" color="white">
					{data.title}
				</Typography>
				<Typography variant="body" color="white">
					{data.overview}
				</Typography>
			</CardContent>
		</Card>

		)
}
export default MovieInfo