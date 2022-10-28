//import pakages
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {DatePicker } from '@react-spectrum/datepicker'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import {parseDate} from '@internationalized/date'
import { View } from '@adobe/react-spectrum'
import {TimeField} from '@react-spectrum/datepicker'
import { useLocation } from 'react-router-dom'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { editTask } from '../../../store/slices/handleTasksDataSlice'
function EditTaskPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const url = useLocation().pathname
	const taskId =  parseInt(url.split('/')[2])
	const theTask = tasks.filter(task => task.id === taskId)[0]
	const [title , setTitle] = useState<string>(theTask.title)
	const [date , setDate] = useState(parseDate(theTask.date))
	const [startTime , setStartTime] = useState({ hour : theTask.startTime.split('-')[0] , minute : theTask.startTime.split('-')[1] , second : 0 , millisecond : 0 })
	const [endTime , setEndTime] = useState({ hour : theTask.endTime.split('-')[0] , minute : theTask.endTime.split('-')[1] , second : 0 , millisecond : 0 })
	return (
		<div className=" h-auto pb-12 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>edit task</h5>
			<form onSubmit={()=>dispatch(editTask({ id : taskId , title : title , startTime : `${startTime.hour}-${startTime.minute}` , endTime : `${endTime.hour}-${endTime.minute}` , reminder : theTask.reminder , autoDone : theTask.autoDone , date : `${date}` , listId : theTask.listId , goalId : theTask.goalId , done : theTask.done}))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} type='text' />
				<div className={`border-b border-[${them}] p-3 my-5 text-center`}>
					<Provider theme={theme} colorScheme="light">
						<View
							backgroundColor="static-white"
						>
							<DatePicker
								aria-label='date'
								isQuiet 
								value={date}
								onChange={setDate} />
						</View>
					</Provider>
				</div>
				<div className={`border-b border-[${them}] p-3 text-center`}>
					<Provider theme={theme} colorScheme="light">
						<View
							backgroundColor="static-white"
						>
							<div className='flex flex-col items-center'>
								<TimeField
									aria-label='startTime'
									isQuiet 
									value={startTime}
									onChange={setStartTime} />
								<p className='my-2'>to</p>
								<TimeField
									aria-label='endTime'
									isQuiet 
									value={endTime}
									onChange={setEndTime} />
							</div>
						</View>
					</Provider>
				</div>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditTaskPopup 