//import pakages
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
//import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../store/context'
//import types & interfaces
import { AppDispatch } from '../store/main'

function Header () {
	const houre = new Date().getHours()
	const dispatch = useDispatch<AppDispatch>()
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<header className=' flex justify-between items-center mb-5 mx-6 pt-6'>
			<span className="flex flex-col">
				<ThemeProvider theme={theme}>
					<Typography color='error' display='inline-block' fontWeight='500' variant="h5" gutterBottom>Hi user :)</Typography>
				</ThemeProvider>	
				<Typography color='#78716C' display='inline-block' marginTop='0.5rem' fontWeight='500' variant="subtitle1" gutterBottom>Good { (5 <= houre && houre < 12) ? 'morning' : (12 <= houre && houre < 17) ? 'afternoon' : (17 <= houre && houre < 21) ? 'evening' : 'night'}</Typography>
			</span>
			<ThemeProvider theme={theme}>
				<Badge color='error' overlap="circular" badgeContent="" variant="dot">
					<NotificationsIcon onClick={() => setState('notifications')} className='cursor-pointer -mt-1 -mr-1'/>
				</Badge>
			</ThemeProvider>
		</header>
	)
}

export default Header 