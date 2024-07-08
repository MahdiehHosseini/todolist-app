//import pakages
import React, { lazy,useState, useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
//import components
const TasksList = lazy(() => import('../components/listes/TasksList'))
const SingleGoalPageLoading = lazy(() => import('../components/loading-components/SingleGoalPageLoading'))
// import mui components
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { AppDispatch,RootState } from '../store/main'
//import store
import { toggleTerm , toggleAutoReach } from '../store/slices/handleGoalsDataSlice'

function SingleGoalPage () {
	const dispatch = useDispatch<AppDispatch>()
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const { appTheme } = useContext(ThemeContext)
	const { goalId } = useParams()
	const theGoal = goals.filter(goal => goal.id === parseFloat(goalId))[0]
	const theGoalTasks = tasks.filter(task => task.goalId === theGoal.id)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(theGoal.tasks.length){
			theGoal.tasks.forEach(task => { new Date(task.date.year, task.date.month, task.date.date).getTime() > endDate && setEndDate(new Date(task.date.year, task.date.month, task.date.date).getTime()) })
			const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<>
			{theGoal 
				? <>
					<span className='flex items-center justify-center my-4 mx-6 relative'>
						<ThemeProvider theme={theme}>
							<Link to={'/goals'}>
								< ArrowBackIcon className='absolute left-0 top-2' color='error' fontSize='medium' />
							</Link>
							<Typography className={`border-b border-[${appTheme}]`} variant='h6' fontSize='1.25rem' fontWeight='400' color='error' padding='0.5rem'>{theGoal.title}</Typography>
						</ThemeProvider>
					</span>	
					<div className="mx-6">
						<Typography onClick={()=>dispatch(toggleTerm(theGoal.id))} className=" cursor-pointer text-neutral-500" variant='body1' fontSize='1rem' fontWeight='400'>{`${theGoal.term} term`}</Typography>
						<Typography className="text-neutral-500" marginY='0.5rem' variant='body1' fontSize='1rem' fontWeight='400'>{`${calculateRemainDays()} days remain`}</Typography>
						<span onClick={()=>dispatch(toggleAutoReach(theGoal.id))} className=' cursor-pointer flex items-center'>
							<Typography variant='body1' fontSize='1rem' fontWeight='400' className=" text-neutral-500">auto reach</Typography>
							<TaskAltIcon fontSize='medium' className={`ml-2 ${theGoal.autoReach ? `text-[${appTheme}]` : 'text-neutral-300'}`}/>
						</span>
					</div>
					<TasksList title="tasks for this goal" addOption={true} tasksData={theGoalTasks} /> </>
				: <SingleGoalPageLoading /> }
		</>
	)
}

export default SingleGoalPage