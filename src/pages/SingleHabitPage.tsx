//import pakages
import React, { lazy, useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import components
const TimerSection = lazy(() => import('../components/TimerSection'))
const SingleHabitPageLoading = lazy(() => import('../components/loading-components/SingleHabitPageLoading'))
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { RootState,AppDispatch } from '../store/main'
import { toggleReminder } from '../store/slices/handleHabitsDataSlice'

function SingleHabitPage () {
	const dispatch = useDispatch<AppDispatch>()
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const { appTheme } = useContext(ThemeContext)
	const { habitId } = useParams()
	const theHabit = habits.filter(habit => habit.id === parseFloat(habitId))[0]
	const calculateExistenceTime = ()=>{
		const addDate = new Date(theHabit.addDate.year, theHabit.addDate.month, theHabit.addDate.date).getTime()
		const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
		return `set ${Math.round((today - addDate)/(1000*60*60*24))*-1} days ago`
	}
	const timeItTakes = (theHabit.endTime.hour*60 + theHabit.endTime.minutes) - (theHabit.startTime.hour*60 + theHabit.startTime.minutes)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<>
			{ theHabit 
				? <>
					<div className='relative h-screen overflow-hidden'>
						<span className='flex justify-center'>
							<ThemeProvider theme={theme}>
								<Typography variant='h6' fontSize='1.25rem' fontWeight='400' marginY='1rem' padding='0.5rem' color='error' className={`border-b border-[${appTheme}]`}>{theHabit.title}</Typography>
							</ThemeProvider>
						</span>	
						<div className=" mx-6 block">
							<Typography fontSize='1rem' fontWeight='300' className="text-neutral-500">{`${theHabit.startTime.hour} : ${theHabit.startTime.minutes} to ${theHabit.endTime.hour} : ${theHabit.endTime.minutes}`}</Typography>
							<Typography fontSize='1rem' marginY='0.5rem' fontWeight='300' className="text-neutral-500">{calculateExistenceTime()}</Typography>
							<span onClick={()=>dispatch(toggleReminder(theHabit.id))} className=' cursor-pointer flex items-center'>
								<Typography fontSize='1rem' fontWeight='300' className="text-neutral-500">reminder</Typography>
								<AccessAlarmIcon fontSize='medium' className={`ml-2 ${theHabit.reminder ? `text-[${appTheme}]` : 'text-neutral-400'}`} />
							</span>
						</div>
						<TimerSection time={timeItTakes} />
					</div>
				</> 
				: <SingleHabitPageLoading /> }
		</>
	)
}

export default SingleHabitPage