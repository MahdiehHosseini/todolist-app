//import pakages
import { FC,useRef,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import types & interfaces
import { TaskBoxComponentInterface } from './../../types-&-interfaces/Interfaces'
import { AppDispatch, RootState } from '../../store/main'
//import store
import { toggleDone,deleteTask } from '../../store/slices/handleTasksDataSlice'

const SingleTaskBox : FC<TaskBoxComponentInterface> = ({taskData}) => {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const element = useRef(null)
	const [showDeleteIcon , setShowDeleteIcon] = useState(false)
	return (
		<div ref={element} className='flex items-center justify-between w-full border-b md:mx-3 py-3 md:w-11/12 lg:w-2/5 relative' onMouseOver={()=>setShowDeleteIcon(true)} onMouseOut={()=>setShowDeleteIcon(false)}>
			<span className={`${taskData.done && 'order-2'}`}>
				<Link to={`/tasks/${taskData.id}`}>
					<span className="flex items-center">
						<h6 className={`text-base font-medium ${taskData.done && 'text-neutral-400'}`}>{taskData.done ? <s>{taskData.title}</s> : taskData.title}</h6>
						<i className={`material-icons text-[${them}] text-lg ml-2 ${taskData.done ? 'text-neutral-300' : taskData.reminder ? `text-[${them}]` : 'text-neutral-400'}`}>access_alarm</i>
					</span>
					<p className={` text-sm font-normal ${taskData.done ? 'text-neutral-300' : 'text-neutral-500'}`}>{`${taskData.startTime.split('-').map(string => string.padStart(2, '0')).join(':')} to ${taskData.endTime.split('-').map(string => string.padStart(2, '0')).join(':')}`}</p>
				</Link>
			</span>
			<span onClick={()=>dispatch(toggleDone(taskData.id))} className={`rounded-full cursor-pointer border-black p-0.5 border flex ${taskData.done && `order-1 border-none bg-[${them}]`}`}><i className={`text-lg-without-lineheigh material-icons ${taskData.done && 'text-white'}`}>done</i></span>
			{showDeleteIcon && <span className={`w-full animate__animated animate__fadeInRight animate__faster absolute top-0 bg-[${them}] h-full flex justify-center items-center`}><i onClick={()=>dispatch(deleteTask(taskData.id))}  className='cursor-pointer text-3xl-without-lineheigh text-white material-icons'>delete</i></span>}
		</div>
	)
}

export default SingleTaskBox