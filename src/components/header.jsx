import React from 'react'
import { AppBar,Toolbar ,TextField,Typography } from '@mui/material';
import '../App.css'
function Header(){
	return (

		<AppBar postion="sticky" sx={{paddingTop:'2.5px'}} >
			<Toolbar sx={{justifyContent : 'space-between'}}>
				<Typography color="black" variant="h4">
					Movie App
				</Typography>
				<TextField label="Search" variant="filled" size="small" color="secondary" />

			</Toolbar>
		</AppBar>
		)
}
export default Header;
