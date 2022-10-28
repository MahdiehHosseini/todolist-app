//import pakages
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from './../../store/main'
//import store
import { toggleState } from './../../store/slices/toggleSlice'
import { toggleThem } from '../../store/slices/handleThem'

function ThemPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<div className=" h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-medium`}>Select Them</h5>
			<span className=" mx-6 my-20 block">
				<div className='w-full flex justify-around items-center mb-8'>
					<span onClick={()=>dispatch(toggleThem('#4ADE80'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#4ADE80]'></span>
					<span onClick={()=>dispatch(toggleThem('#000'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#000]'></span>
					<span onClick={()=>dispatch(toggleThem('#FACC15'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#FACC15]'></span>
				</div>
				<div className='w-full flex justify-around items-center'>
					<span onClick={()=>dispatch(toggleThem('#22D3EE'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#22D3EE]'></span>
					<span onClick={()=>dispatch(toggleThem('#C084FC'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#C084FC]'></span>
					<span onClick={()=>dispatch(toggleThem('#F472B6'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#F472B6]'></span>
				</div>
			</span>
		</div>
	)
}

export default ThemPopup 