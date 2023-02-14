//import pakages
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import mui components
import Typography from '@mui/material/Typography'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import DeleteIcon from '@mui/icons-material/Delete'
//import types & interfaces
import { TaskBoxComponentInterface } from '../../Interfaces/Interfaces'
import { AppDispatch, RootState } from '../../store/main'
//import store
import { toggleDone,deleteTask } from '../../store/slices/handleTasksDataSlice'

const SingleTaskBox = ({taskData}:TaskBoxComponentInterface) => {
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	return (
		<div className='flex items-center justify-between w-full border-b md:mx-3 py-3 md:w-11/12 lg:w-2/5 relative'>
			<span className={`${taskData.done && 'order-2'}`}>
				<Link to={`/tasks/${taskData.id}`}>
					<span className="flex items-center">
						<Typography variant='subtitle1' fontSize='1rem' fontWeight='400' className={`${taskData.done && 'text-neutral-400'}`}>{taskData.done ? <s>{taskData.title}</s> : taskData.title}</Typography>
						<AccessAlarmIcon fontSize='medium' className={`ml-2 ${taskData.done ? 'text-neutral-300' : taskData.reminder ? `text-[${appTheme}]` : 'text-neutral-400'}`} />
					</span>
					<Typography variant='subtitle2' fontSize='0.8rem' fontWeight='500' className={`${taskData.done ? 'text-neutral-300' : 'text-neutral-500'}`}>{`${taskData.startTime.hour} : ${taskData.startTime.minutes} to ${taskData.endTime.hour} : ${taskData.endTime.minutes}`}</Typography>
				</Link>
			</span>
			<span 
				className='felx'
			>
				<TaskAltIcon fontSize='medium' className={`cursor-pointer mr-2 ${taskData.done && `order-2 text-[${appTheme}]`}`}
					onClick={()=>dispatch(toggleDone(taskData.id))}  />
				<DeleteIcon className='cursor-pointer' onClick={()=>dispatch(deleteTask(taskData.id))} />
			</span>
		</div>
	)
}

export default SingleTaskBox