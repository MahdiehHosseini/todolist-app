//import pakages
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {DatePicker } from '@react-spectrum/datepicker'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import {parseDate} from '@internationalized/date'
import { View } from '@adobe/react-spectrum'
import {TimeField} from '@react-spectrum/datepicker'
import {Time} from '@internationalized/date'
import { useLocation } from 'react-router-dom'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { addTask } from '../../../store/slices/handleTasksDataSlice'
function AddTaskPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const [title , setTitle] = useState<string>('')
	const [date , setDate] = useState(parseDate(`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`))
	const [startTime , setStartTime] = useState(new Time())
	const [endTime , setEndTime] = useState(new Time())
	const [autoDone , setAutoDone] = useState<boolean>(false)
	const [reminder , setReminder] = useState<boolean>(false)
	const them = useSelector((state:RootState)=> state.handleThem)
	const url = useLocation().pathname
	const parentId =  parseFloat(url.split('/')[2])
	return (
		<div className="  h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 pb-14 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>add task</h5>
			<form onSubmit={()=>dispatch(addTask({ id : Math.random() , title : title , startTime : `${startTime.hour}-${startTime.minute}` , endTime : `${endTime.hour}-${endTime.minute}` , reminder : reminder , autoDone : autoDone , date : `${date}` , listId : url.includes('lists') ? parentId : 0 , goalId : url.includes('goals') ? parentId : 0 , done : false}))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} value={title} onChange={(e)=> setTitle(e.target.value)} type='text' placeholder='title' />
				<div className={`border-b border-[${them}] p-3 my-5 text-center`}>
					<Provider theme={theme} colorScheme="light" zIndex={100} position={'sticky'}>
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
				<span className={`border-b border-[${them}] p-3 my-5 flex justify-center items-center`}>
					<p className='font-medium text-lg'>auto done</p>
					<i onClick={()=>setAutoDone(!autoDone)} className={`${autoDone ? `text-[${them}]` : 'text-neutral-300'} cursor-pointer text-xl-without-lineheigh material-icons ml-2`}>file_download_done</i>
				</span>
				<span className={`border-b border-[${them}] items-center flex justify-center p-3`}>
					<p className='font-medium text-lg'>reminder</p>
					<i onClick={()=>setReminder(!reminder)} className={`${reminder ? `text-[${them}]` : 'text-neutral-300'}  text- text-xl-without-lineheigh material-icons ml-2 cursor-pointer`}>access_alarm</i>
				</span>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddTaskPopup 
