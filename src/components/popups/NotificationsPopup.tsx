//import pakages
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
//import context
import { ThemeContext, ToggleContext } from '../../store/context'
//import types & interfaces
import { AppDispatch } from './../../store/main'

function NotificationsPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-2/3 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>notifications</Typography>
			</ThemeProvider>
			<span className=" mx-6 block">
				{<><div className={`border-b border-[${appTheme}] py-4 px-1`}>
					<span className=" flex items-center">
						<Typography fontWeight='400' fontSize='medium' >reminder</Typography>
						<ThemeProvider theme={theme}>
							<AccessAlarmIcon 
								fontSize='small'
								color='error'
								className='ml-2'
							/>
						</ThemeProvider>
					</span>
					<Typography fontSize='small' className="my-1">you have 3 tasks to do for today</Typography>
				</div>
				<div className={`border-b border-[${appTheme}] py-4 px-1`}>
					<span className=" flex items-center">
						<Typography fontWeight='400' fontSize='medium' >reminder</Typography>
						<ThemeProvider theme={theme}>
							<AccessAlarmIcon 
								color='error'
								className='ml-2'
							/>
						</ThemeProvider>
					</span>
					<Typography fontSize='small' className="my-1">you have 3 tasks to do for today</Typography>
				</div></>}
			</span>
		</div>
	)
}

export default NotificationsPopup 