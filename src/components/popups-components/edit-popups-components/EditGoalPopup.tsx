//import pakages
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {DatePicker } from '@react-spectrum/datepicker'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import { View } from '@adobe/react-spectrum'
import {parseDate} from '@internationalized/date'
import { useLocation } from 'react-router-dom'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { editGoal } from '../../../store/slices/handleGoalsDataSlice'

function EditGoalPopup () {
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const url = useLocation().pathname
	const goalId =  parseInt(url.split('/')[2])
	const theGoal = goals.filter(goal => goal.id === goalId)[0]
	const [title , setTitle] = useState<string>(theGoal.title)
	const [date , setDate] = useState(parseDate(theGoal.reachDate))
	return (
		<div className=" h-auto bg-white pb-12 w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>edit goal</h5>
			<form onSubmit={()=>dispatch(editGoal({ id : goalId, title : title , term : theGoal.term , autoReach : theGoal.autoReach , reachDate : `${date}` , tasks : theGoal.tasks}))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='title' />
				<div className={`border-b border-[${them}] p-3 my-5 text-center flex flex-col items-center justify-around`}>
					<label className=' text-lg font-medium text-center mb-1'>reach date</label>
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
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditGoalPopup