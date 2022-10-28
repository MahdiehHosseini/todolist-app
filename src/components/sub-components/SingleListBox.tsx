//import pakages
import { Link } from 'react-router-dom'
import { useState, FC } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
import { ListBoxComponentInterface } from '../../types-&-interfaces/Interfaces'

const SingleListBox : FC<ListBoxComponentInterface> = ({listData}) => {
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const tasksForList = listData.tasks.length
	listData.tasks = tasks.filter(task => task.listId === listData.id)
	const them = useSelector((state:RootState)=> state.handleThem)
	const doneTasks =  listData.tasks.filter(task => task.done === true).length
	const doneTasksPerson = Math.round((doneTasks*100)/tasksForList)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(listData.tasks.length){
			listData.tasks.map(task => { new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() > endDate && setEndDate(new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime()) })
			const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	return (
		<div className=" border-b my-3 md:w-full lg:w-2/5 md:mx-5">
			<Link to={`/lists/${listData.id}`}>
				<p className={`text-lg font-medium ${listData.tasks.length ? '' : 'text-neutral-400'}`}>{listData.tasks.length ? listData.title : <s>{listData.title}</s> }</p>
				<p className={`text-base font-normal my-1 ${listData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${calculateRemainDays()} days remain`}</p>
				<p className={`text-base font-normal ${listData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${listData.tasks.length} tasks left`}</p>
			</Link>
			<div className="w-full rounded-full h-3 border mb-4 mt-2">
				<div className={`bg-[${them}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPerson}%`}}></div>
			</div>
		</div>
	)
}

export default SingleListBox