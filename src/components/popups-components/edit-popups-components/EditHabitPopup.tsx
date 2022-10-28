//import pakages
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import { View } from '@adobe/react-spectrum'
import {TimeField} from '@react-spectrum/datepicker'
import { useLocation } from 'react-router-dom'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { editHabit } from '../../../store/slices/handleHabitsDataSlice'

function EditHabitPopup () {
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const url = useLocation().pathname
	const habitId =  parseInt(url.split('/')[2])
	const theHabit = habits.filter(habit => habit.id === habitId)[0]
	const [title , setTitle] = useState<string>(theHabit.title)
	const [startTime , setStartTime] = useState({ hour : parseInt(theHabit.startTime.split('-')[0]) , minute : parseInt(theHabit.startTime.split('-')[1]) , second : 0 , millisecond : 0 })
	const [endTime , setEndTime] = useState({ hour : parseInt(theHabit.endTime.split('-')[0]) , minute : parseInt(theHabit.endTime.split('-')[1]) , second : 0 , millisecond : 0 })
	return (
		<div className="  h-auto pb-14 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>edit habit</h5>
			<form onSubmit={()=>dispatch(editHabit({ id : habitId , title : title , startTime : `${startTime.hour}-${startTime.minute}` , endTime : `${endTime.hour}-${endTime.minute}` , reminder : theHabit.reminder , addDate : theHabit.addDate}))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-xl placeholder:font-semibold`} type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='title' />
				<div className={`border-b border-[${them}] p-3 text-center`}>
					<Provider theme={theme} colorScheme="light" zIndex={100} position={'sticky'}>
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
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditHabitPopup 