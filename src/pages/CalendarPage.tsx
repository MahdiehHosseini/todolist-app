// import pakages
import React, { lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import mui components
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
// import components
const TasksList = lazy(() => import('../components/listes/TasksList'))
const CalendarPageLoading = lazy(() => import('../components/loading-components/CalendarPageLoading'))
//import types & interfaces
import { RootState,AppDispatch } from '../store/main'
import { setDate } from '../store/slices/dateSlice'

function CalendarPage() {
	const date = useSelector((state:RootState) => state.date)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const dispatch = useDispatch<AppDispatch>()
	const filteredTasks = tasks.filter(task => new Date(task.date.year, task.date.month-1, task.date.date).getTime() === new Date(date).getTime())
	return (
		<>
			{date && tasks ? <>
				<div className='text-center my-10 '>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							value={date}
							onChange={(newDate) => dispatch(setDate(newDate))}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<TasksList title="today's tasks" tasksData={filteredTasks} addOption={false} /> 
			</> : <CalendarPageLoading />}
		</>
	)
}

export default CalendarPage