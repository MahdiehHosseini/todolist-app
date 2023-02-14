//import pakages
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import DateRangeIcon from '@mui/icons-material/DateRange'
import TimelineIcon from '@mui/icons-material/Timeline'
//import types & interfaces
import { AppDispatch, RootState } from '../store/main'
//import store
import { toggleState } from '../store/slices/toggleSlice'

function BottomNav () {
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const location = useLocation().pathname
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<nav className={`fixed bottom-0 py-3 bg-white border-t border-[${appTheme}] w-full flex justify-between lg:px-32 xl:px-52`}>
			<span className="flex w-full justify-around mr-10 lg:ml-40">
				<Link to={'setting'}><SettingsIcon fontSize='large' className={`${ location.includes('setting') && `text-[${appTheme}] border-b border-[${appTheme}]`}`} /></Link>
				<Link to={'calendar'}><DateRangeIcon fontSize='large' className={`${ location.includes('calendar') && `text-[${appTheme}] border-b border-[${appTheme}]`}`} /></Link>
			</span>
			<span className=' flex justify-center'>
				<ThemeProvider theme={theme}>
					{/\d/.test(location)
						
						? <Fab className=' bottom-10 z-30 cursor-pointer' size="medium" color="error" aria-label="edit" onClick={()=>dispatch(toggleState(`edit${location.split('/')[0] + location.split('/')[1].charAt(0).toUpperCase() + location.split('/')[1].slice(1,-1)}`))}> 
							<EditIcon className='text-white' fontSize='medium' />
						</Fab>
						:<Fab className=' bottom-10 z-30 cursor-pointer' size="medium" color="error" aria-label="add" onClick={()=>dispatch(toggleState('add'))}>  
							<AddIcon className='text-white' fontSize='medium' />
						</Fab>
					}
				</ThemeProvider>
			</span>
			<span className="flex w-full justify-around ml-10 lg:mr-40">
				<Link to={'time-line'}><TimelineIcon fontSize='large' className={`${ location.includes('time-line') && `text-[${appTheme}] border-b border-[${appTheme}]`}`} /></Link>
				<Link to={'/'}><HomeIcon fontSize='large' className={`${ location === '/' && `text-[${appTheme}] border-b border-[${appTheme}]`}`} /></Link>
			</span>
		</nav>
	)
}

export default BottomNav