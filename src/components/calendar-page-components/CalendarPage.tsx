// import pakages
import { lazy } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {DatePicker } from '@react-spectrum/datepicker'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import {parseDate} from '@internationalized/date'
import { View } from '@adobe/react-spectrum'
// import components
const TasksList = lazy(() => import('./../main-components/TasksList'))
const CalendarPageLoading = lazy(() => import('../loading-components/CalendarPageLoading'))
//import types & interfaces
import { RootState,AppDispatch } from '../../store/main'
import { setDate } from '../../store/slices/dateSlice'

function CalendarPage() {
	const date = useSelector((state:RootState) => state.date)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const dispatch = useDispatch<AppDispatch>()
	const filteredTasks = tasks.filter(task => task.date === date)
	return (
		<>
			{date && tasks ? <>
				<div className='text-center my-10 '>
					<Provider theme={theme} colorScheme="light">
						<View
							backgroundColor="static-white"
						>
							<DatePicker
								value={parseDate(date)}
								onChange={(value)=>dispatch(setDate(value))} />
						</View>
					</Provider>
				</div>
				<TasksList title="today's tasks" tasksData={filteredTasks} addOption={false} /> 
			</> : <CalendarPageLoading />}
		</>
	)
}

export default CalendarPage