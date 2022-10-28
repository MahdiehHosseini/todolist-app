//import pakages
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { addList } from '../../../store/slices/handleListsDataSlice'

function AddListPopup () {
	const [title , setTitle] = useState<string>('')
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<div className=" h-auto bg-white w-5/6 pb-20 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>add list</h5>
			<form onSubmit={()=> dispatch(addList({ id : Math.random() , title : title , tasks : [] }))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='title' />
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-12`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddListPopup 