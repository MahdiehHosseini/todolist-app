//import pakages
import { lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
//import components
const SingleListBox = lazy(() => import('./SingleListBox'))
//import store 

function ListsList () {
	const lists = useSelector((state:RootState) => state.handleListsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const them = useSelector((state:RootState)=> state.handleThem)
	useEffect(()=>{
		lists.map(list => list.tasks = tasks.filter(task => task.listId === list.id))
	} , [])
	const filteredLists = lists.filter(list => list.tasks.length !== 0 && list.tasks?.filter(task => task.done === false).length !== 0)
	return (
		<section>
			<h4 className={`text-[${them}] font-semibold text-xl inline-block my-3 ml-6`}>Lists on progress</h4>
			<div className='flex snap-x overflow-x-auto overflow-y-hidden snap-mandatory ml-6 '>
				{filteredLists.map(list => <SingleListBox listData={list} key={list.id} />)}
			</div>
		</section>
	)
}

export default ListsList