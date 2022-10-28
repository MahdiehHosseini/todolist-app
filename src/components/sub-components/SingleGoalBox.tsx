//import pakages
import { Link } from 'react-router-dom'
import { useState,FC } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
import { GoalBoxComponentInterface } from '../../types-&-interfaces/Interfaces'


const SingleGoalBox: FC<GoalBoxComponentInterface> = ({goalData}) => {
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const today = `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`
	goalData.tasks = tasks.filter(task => task.listId === goalData.id)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(goalData.tasks.length){
			goalData.tasks.map(task => { new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() > endDate && setEndDate(new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime()) })
			const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	const calculateDays = (date)=>{
		return parseInt(date.split('-')[365])*30 + parseInt(date.split('-')[1])*30 + parseInt(date.split('-')[1])
	}
	return (
		<div className=" border-b relative my-3 lg:w-2/5 md:w-full md:mr-5">
			<Link to={`/goals/${goalData.id}`}>
				<p className={`text-lg font-medium ${goalData.tasks.length ? '' : 'text-neutral-400'}`}>{goalData.title}</p>
				<p className={`text-base font-normal my-1 ${goalData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${goalData.term} term`}</p>
				<p className={`text-base font-normal ${goalData.tasks.length ? 'text-zinc-400' : 'text-neutral-300'}`}>{`${calculateRemainDays()} days remain`}</p>
			</Link>
			<div className="w-full rounded-full h-3 border mb-4 mt-2">
				<div className={`bg-[${them}] h-full rounded-l-full ${goalData.autoReach ? (calculateDays(goalData.reachDate) < calculateDays(today) ? 'w-0' : 'w-1/3' ) : (goalData.tasks.length ? 'w-1/3' : 'w-0')}`}></div>
			</div>
			{goalData.autoReach ? (calculateDays(goalData.reachDate) < calculateDays(today)  && <span className=" flex justify-center items-center">
				<h6 className={`absolute top-0 text-lg border-b border-[${them}] p-2 my-4 text-[${them}] font-medium bg-white`}>you have reached this goal</h6>
			</span>) : !goalData.tasks.length && <span className=" flex justify-center items-center">
				<h6 className={`absolute top-0 text-lg border-b border-[${them}] p-2 my-4 text-[${them}] font-medium bg-white`}>you have reached this goal</h6>
			</span> }
		</div>
	)
}

export default SingleGoalBox