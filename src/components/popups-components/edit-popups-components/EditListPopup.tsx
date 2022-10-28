//import pakages
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
import { editList } from '../../../store/slices/handleListsDataSlice'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
function EditListPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const lists = useSelector((state:RootState) => state.handleListsData)
	const url = useLocation().pathname
	const listId =  parseInt(url.split('/')[2])
	const theList = lists.filter(list => list.id === listId)[0]
	const them = useSelector((state:RootState)=> state.handleThem)
	const [title , setTitle] = useState<string>(theList.title)
	return (
		<div className=" h-auto pb-14 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>edit list</h5>
			<form onSubmit={()=>dispatch(editList({ id : listId , title : title , tasks : theList.tasks }))} className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] p-3 focus:outline-none placeholder:text-xl placeholder:font-semibold`} type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='title' />
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditListPopup 