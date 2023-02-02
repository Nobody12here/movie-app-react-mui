import React from 'react';
import MovieInfo from './MovieInfo'
import {Card,CardContent,CardMedia,Typography} from '@mui/material';
import "../App.css"
function MovieCard({data,SetDisplay,setMovieInfodata}){

	function handleClick(e){
		//Store some id sort stuff in a prop and the pass this prop down the App.js
		//use this prop to check wether the box is clicked or not and display the results
		//Kind of a silly solution but will work possibley
		SetDisplay(true);
		setMovieInfodata(data)
	}

	return(
		<>
			<Card onClick={(e)=>{handleClick(e) }} className="movieCard" sx={{maxWidth:250 ,backgroundColor:"black"}}>

				<CardMedia sx={{width : 250}} component="img" src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}>
				</CardMedia>

				<CardContent>

					<Typography variant="h5" color="white">
						{data.title}
					</Typography>

				</CardContent>
				
			</Card>
		</>

		)
}
export default MovieCard