//import pakages
import { lazy } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import types & interfaces
import { AppDispatch,RootState } from '../../store/main'
//import components
const TimerSection = lazy(() => import('./TimerSection'))
const SingleTaskageLoading = lazy(() => import('./../loading-components/SingleTaskPageLoading'))
//import store
import { toggleReminder,toggleAutoDone } from '../../store/slices/handleTasksDataSlice'
function SingleTaskPage () {
	const dispatch = useDispatch<AppDispatch>()
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const { taskId } = useParams()
	const theTask = tasks.filter(task => task.id === parseFloat(taskId))[0]
	const timeItTakes = parseInt(theTask.endTime.split('-')[0])*60 + parseInt(theTask.endTime.split('-')[1]) - parseInt(theTask.startTime.split('-')[0])*60 + parseInt(theTask.startTime.split('-')[1])
	return (
		<>
			{ tasks
				? <div className=' h-screen overflow-hidden relative'>
					<span className='flex justify-center'>
						<h6 className={`text-xl border-b border-[${them}] p-2 my-4 text-[${them}] font-semibold`}>{theTask.title}</h6>
					</span>	
					<div className=" mx-6 block">
						<p className=" text-base font-normal text-neutral-500">{theTask.startTime.split('-').map(string => string.padStart(2, '0')).join(':')}</p>
						<span onClick={()=>dispatch(toggleReminder(theTask.id))} className='cursor-pointer flex items-center'>
							<p className=" text-base font-normal text-neutral-500">reminder</p>
							<i className={` text-lg-without-lineheigh material-icons ml-2 ${theTask.reminder ? `text-[${them}]` : 'text-neutral-400'}`}>access_alarm</i>
						</span>
						<span onClick={()=>dispatch(toggleAutoDone(theTask.id))} className='cursor-pointer flex items-center'>
							<p className=" text-base font-normal text-neutral-500">auto done</p>
							<i className={` text-lg-without-lineheigh material-icons ml-2 ${theTask.autoDone ? `text-[${them}]` : 'text-neutral-400'}`}>file_download_done</i>
						</span>
					</div>
					<TimerSection time={timeItTakes} />
				</div> 
				: <SingleTaskageLoading />}
		</>
	)
}

export default SingleTaskPage