//import pakages
import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext } from '../../store/context'
//import types & interfaces
import { RootState } from '../../store/main'
import { GoalBoxComponentInterface } from '../../Interfaces/Interfaces'


const SingleGoalBox = ({goalData}:GoalBoxComponentInterface) => {
	const { appTheme } = useContext(ThemeContext)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const goalTasks = tasks.filter(task => task.goalId === goalData.id)
	const doneTasks =  goalTasks.filter(task => task.done === true)
	const doneTasksPercent = Math.round((doneTasks.length*100)/ goalTasks.length)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(goalTasks.length){
			goalTasks.forEach(task => { new Date(task.date.year, task.date.month, task.date.date).getTime() > endDate && setEndDate(new Date(task.date.year, task.date.month, task.date.date).getTime()) })
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
		},
	})
	return (
		<div className=" border-b relative my-3 lg:w-2/5 md:w-full md:mr-5">
			<Link to={`/goals/${goalData.id}`}>
				<Typography variant='subtitle1' fontSize='1.25rem' fontWeight='400' className={`${goalTasks.length ? '' : 'text-neutral-400'}`}>{goalData.title}</Typography>
				<Typography variant='subtitle2' fontSize='1rem' fontWeight='300' className={`${goalTasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${goalData.term} term`}</Typography>
				<Typography variant='subtitle2' fontSize='1rem' fontWeight='300' className={`${goalTasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${calculateRemainDays()} days remain`}</Typography>
			</Link>
			<div className="w-full rounded-full h-3 border mb-4 mt-2">
				<div className={`bg-[${appTheme}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPercent}%`}}></div>
			</div>
			{ !goalTasks.length  && <span className=" flex justify-center items-center">
				<ThemeProvider theme={theme}>
					<Typography variant='subtitle2' fontSize='large' fontWeight='500' marginY='1rem' padding='0.5rem' top='0'position='absolute' color='error' className={`bg-white border-b border-[${appTheme}]`}>you have reached this goal</Typography>
				</ThemeProvider>
			</span> }
		</div>
	)
}

export default SingleGoalBox