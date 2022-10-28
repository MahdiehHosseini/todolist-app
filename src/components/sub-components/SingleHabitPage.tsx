//import pakages
import { lazy } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import types & interfaces
import { RootState,AppDispatch } from '../../store/main'
import { toggleReminder } from '../../store/slices/handleHabitsDataSlice'
//import components
const TimerSection = lazy(() => import('./TimerSection'))
const SingleHabitPageLoading = lazy(() => import('./../loading-components/SingleHabitPageLoading'))

function SingleHabitPage () {
	const dispatch = useDispatch<AppDispatch>()
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const { habitId } = useParams()
	const theHabit = habits.filter(habit => habit.id === parseFloat(habitId))[0]
	const calculateExistenceTime = ()=>{
		const addDate = new Date(theHabit.addDate.replace(/-0+/g, '-').split('-').join(',').replace(/"/g, '')).getTime()
		const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
		return `set ${Math.round((today - addDate)/(1000*60*60*24))} days ago`
	}
	const timeItTakes = parseInt(theHabit.endTime.split('-')[0])*60 + parseInt(theHabit.endTime.split('-')[1]) - parseInt(theHabit.startTime.split('-')[0])*60 + parseInt(theHabit.startTime.split('-')[1])
	return (
		<>
			{ theHabit 
				? <>
					<div className='relative h-screen overflow-hidden'>
						<span className='flex justify-center'>
							<h6 className={`text-xl border-b border-[${them}] p-2 my-4 text-[${them}] font-semibold`}>{theHabit.title}</h6>
						</span>	
						<div className=" mx-6 block">
							<p className=" text-base font-normal text-neutral-500">{`${theHabit.startTime.split('-').map(string => string.padStart(2, '0')).join(':')} to ${theHabit.endTime.split('-').map(string => string.padStart(2, '0')).join(':')}`}</p>
							<p className=" text-base font-normal text-neutral-500">{calculateExistenceTime()}</p>
							<span onClick={()=>dispatch(toggleReminder(theHabit.id))} className=' cursor-pointer flex items-center'>
								<p className=" text-base font-normal text-neutral-500">reminder</p>
								<i className={`text-lg-without-lineheigh material-icons ml-2 ${theHabit.reminder ? `text-[${them}]` : 'text-neutral-400'}`}>access_alarm</i>
							</span>
						</div>
						<TimerSection time={timeItTakes} />
					</div>
				</> 
				: <SingleHabitPageLoading /> }
		</>
	)
}

export default SingleHabitPage