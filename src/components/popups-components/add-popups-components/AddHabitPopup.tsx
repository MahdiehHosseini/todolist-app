//import pakages
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import { View } from '@adobe/react-spectrum'
import {TimeField} from '@react-spectrum/datepicker'
import {Time} from '@internationalized/date'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { addHabit } from '../../../store/slices/handleHabitsDataSlice'

function AddHabitPopup () {
	const [title , setTitle] = useState<string>('')
	const [startTime , setStartTime] = useState(new Time())
	const [endTime , setEndTime] = useState(new Time())
	const them = useSelector((state:RootState)=> state.handleThem)
	const [reminder , setReminder] = useState<boolean>(false)
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div className="  h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl pb-12">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>add habit</h5>
			<form onSubmit={()=>dispatch(addHabit({ id : Math.random() , title : title , startTime : `${startTime.hour}-${startTime.minute}` , endTime : `${endTime.hour}-${endTime.minute}` , reminder : reminder , addDate : `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`}))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} value={title} onChange={(e)=>setTitle(e.target.value)} type='text' placeholder='title' />
				<div className={`border-b border-[${them}] p-3 text-center`}>
					<Provider theme={theme} colorScheme="light" zIndex={100} position={'relative'}>
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
				<span className={`border-b border-[${them}] items-center flex justify-center p-3 my-5`}>
					<p className='font-medium text-lg'>reminder</p>
					<i onClick={()=>setReminder(!reminder)} className={`${reminder ? `text-[${them}]` : 'text-neutral-300'}  text- text-xl-without-lineheigh material-icons ml-2 cursor-pointer`}>access_alarm</i>
				</span>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddHabitPopup 