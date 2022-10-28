//import pakages
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
function AddPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<div className='flex absolute bottom-12'>
			<span onClick={()=>dispatch(toggleState('addTask'))} className={`rounded-full bg-[${them}] absolute px-2 py-3 bottom-0 cursor-pointer right-11`}>
				<p className=' text-base text-white font-normal'>task</p>
			</span>
			<span onClick={()=>dispatch(toggleState('addList'))} className={`rounded-full bg-[${them}] px-3 absolute cursor-pointer bottom-16 py-3 right-3`}>
				<p className=' text-base text-white font-normal'>list</p>
			</span>
			<span onClick={()=>dispatch(toggleState('addGoal'))} className={`rounded-full bg-[${them}] px-2 py-3 cursor-pointer absolute bottom-16 left-3`}>
				<p className=' text-base text-white font-normal '>goal</p>
			</span>
			<span onClick={()=>dispatch(toggleState('addHabit'))} className={`rounded-full bg-[${them}] px-1 cursor-pointer absolute bottom-0 left-11 py-3`}>
				<p className=' text-base text-white font-normal'>habit</p>
			</span>
		</div>
	)
}

export default AddPopup 