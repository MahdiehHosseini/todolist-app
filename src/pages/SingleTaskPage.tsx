//import pakages
import { lazy } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
//import types & interfaces
import { AppDispatch,RootState } from '../store/main'
//import components
const TimerSection = lazy(() => import('../components/TimerSection'))
const SingleTaskageLoading = lazy(() => import('../components/loading-components/SingleTaskPageLoading'))
//import store
import { toggleReminder,toggleAutoDone } from '../store/slices/handleTasksDataSlice'
function SingleTaskPage () {
	const dispatch = useDispatch<AppDispatch>()
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const { taskId } = useParams()
	const theTask = tasks.filter(task => task.id === parseFloat(taskId))[0]
	const timeItTakes = (theTask.endTime.hour*60 + theTask.endTime.minutes) - (theTask.startTime.hour*60 + theTask.startTime.minutes)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<>
			{ tasks
				? <div className=' h-screen overflow-hidden relative'>
					<span className='flex justify-center'>
						<ThemeProvider theme={theme}>
							<Typography variant='h6' fontSize='1.25rem' fontWeight='400' marginY='1rem' padding='0.5rem' color='error' className={`border-b border-[${appTheme}]`}>{theTask.title}</Typography>
						</ThemeProvider>
					</span>	
					<div className=" mx-6">
						<Typography fontSize='1rem' fontWeight='300' className="text-neutral-500">{`${theTask.startTime.hour} : ${theTask.startTime.minutes} to ${theTask.endTime.hour} : ${theTask.endTime.minutes}`}</Typography>
						<span onClick={()=>dispatch(toggleReminder(theTask.id))} className='cursor-pointer my-2 flex items-center'>
							<Typography fontSize='1rem' fontWeight='300' className="text-neutral-500">reminder</Typography>
							<AccessAlarmIcon fontSize='medium' className={`ml-2 ${theTask.reminder ? `text-[${appTheme}]` : 'text-neutral-400'}`} />
						</span>
						<span onClick={()=>dispatch(toggleAutoDone(theTask.id))} className='cursor-pointer flex items-center'>
							<Typography variant='body1' fontSize='1rem' fontWeight='400' className=" text-neutral-500">auto reach</Typography>
							<TaskAltIcon fontSize='medium' className={`ml-2 ${theTask.autoDone ? `text-[${appTheme}]` : 'text-neutral-300'}`}/>
						</span>
					</div>
					<TimerSection time={timeItTakes} />
				</div> 
				: <SingleTaskageLoading />}
		</>
	)
}

export default SingleTaskPage