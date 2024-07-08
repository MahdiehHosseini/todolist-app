//import pakages
import React, { useContext } from 'react'
// import mui components
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'

function AddPopup () {
	const { state, setState } = useContext(ToggleContext)
	const { appTheme } = useContext(ThemeContext)
	return (
		<div className='flex absolute bottom-12'>
			<span onClick={()=>setState('addTask')} className={`rounded-full bg-[${appTheme}] absolute px-2 py-3 bottom-0 cursor-pointer right-11`}>
				<Typography fontSize='medium' className=' text-white'>task</Typography>
			</span>
			<span onClick={()=>setState('addList')} className={`rounded-full bg-[${appTheme}] px-3 absolute cursor-pointer bottom-16 py-3 right-3`}>
				<Typography fontSize='medium' className=' text-white'>list</Typography>
			</span>
			<span onClick={()=>setState('addGoal')} className={`rounded-full bg-[${appTheme}] px-2 py-3 cursor-pointer absolute bottom-16 left-3`}>
				<Typography fontSize='medium' className=' text-white '>goal</Typography>
			</span>
			<span onClick={()=>setState('addHabit')} className={`rounded-full bg-[${appTheme}] px-1 cursor-pointer absolute bottom-0 left-11 py-3`}>
				<Typography fontSize='medium' className=' text-white'>habit</Typography>
			</span>
		</div>
	)
}

export default AddPopup 