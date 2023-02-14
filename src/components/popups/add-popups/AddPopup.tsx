//import pakages
import { useDispatch, useSelector } from 'react-redux'
// import mui components
import Typography from '@mui/material/Typography'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
function AddPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	return (
		<div className='flex absolute bottom-12'>
			<span onClick={()=>dispatch(toggleState('addTask'))} className={`rounded-full bg-[${appTheme}] absolute px-2 py-3 bottom-0 cursor-pointer right-11`}>
				<Typography fontSize='medium' className=' text-white'>task</Typography>
			</span>
			<span onClick={()=>dispatch(toggleState('addList'))} className={`rounded-full bg-[${appTheme}] px-3 absolute cursor-pointer bottom-16 py-3 right-3`}>
				<Typography fontSize='medium' className=' text-white'>list</Typography>
			</span>
			<span onClick={()=>dispatch(toggleState('addGoal'))} className={`rounded-full bg-[${appTheme}] px-2 py-3 cursor-pointer absolute bottom-16 left-3`}>
				<Typography fontSize='medium' className=' text-white '>goal</Typography>
			</span>
			<span onClick={()=>dispatch(toggleState('addHabit'))} className={`rounded-full bg-[${appTheme}] px-1 cursor-pointer absolute bottom-0 left-11 py-3`}>
				<Typography fontSize='medium' className=' text-white'>habit</Typography>
			</span>
		</div>
	)
}

export default AddPopup 