//import pakages
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import mui components
import Typography from '@mui/material/Typography'
//import types & interfaces
import { RootState } from '../../store/main'
import { ListBoxComponentInterface } from '../../Interfaces/Interfaces'

const SingleListBox = ({listData}:ListBoxComponentInterface) => {
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	listData.tasks = tasks.filter(task => task.listId === listData.id)
	const doneTasks =  listData.tasks.filter(task => task.done === true).length
	const doneTasksPercent = Math.round((doneTasks*100)/listData.tasks.length)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(listData.tasks.length){
			listData.tasks.forEach(task => { new Date(task.date.year, task.date.month, task.date.date).getTime() > endDate && setEndDate(new Date(task.date.year, task.date.month, task.date.date).getTime()) })
			const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	return (
		<div className=" border-b my-3 md:w-full lg:w-2/5 md:mx-5">
			<Link to={`/lists/${listData.id}`}>
				<Typography variant='subtitle1'  fontSize='1.25rem' fontWeight='400' className={`text-lg font-medium ${listData.tasks.length ? '' : 'text-neutral-400'}`}>{listData.tasks.length ? listData.title : <s>{listData.title}</s> }</Typography>
				<Typography variant='subtitle2' marginY='0.5rem' fontSize='1rem' fontWeight='400' className={`text-base font-normal ${listData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${calculateRemainDays()} days remain`}</Typography>
				<Typography variant='subtitle2' fontSize='1rem' fontWeight='400' className={`${listData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${listData.tasks.length} tasks left`}</Typography>
			</Link>
			<div className="w-full rounded-full h-3 border mb-4 mt-2">
				<div className={`bg-[${appTheme}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPercent}%`}}></div>
			</div>
		</div>
	)
}

export default SingleListBox