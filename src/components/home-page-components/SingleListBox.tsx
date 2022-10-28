//import pakages
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import types & interfaces 
import { ListBoxComponentInterface } from './../../types-&-interfaces/Interfaces'
import { RootState } from '../../store/main'

const SingleListBox: FC<ListBoxComponentInterface> = ({listData}) => {
	const them = useSelector((state:RootState)=> state.handleThem)
	const tasks = listData.tasks.length
	const doneTasks =  listData.tasks.filter(task => task.done === true).length
	const doneTasksPerson = Math.round((doneTasks*100)/tasks)
	return (
		<Link to={`lists/${listData.id}`}>
			<div className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-4 sm:py-5 px-3 sm:w-64 w-48 my-3">
				<h5 className=" font-medium text-lg sm:text-xl">{listData.title}</h5>
				<p className=" text-zinc-500 font-normal text-sm my-3 sm:text-lg">{`${listData.tasks?.filter(task => task.date ===  `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`).length} tasks for today`}</p>
				<div className="w-full rounded-full h-3 sm:h-5 border">
					<div className={`bg-[${them}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPerson}%`}}></div>
				</div>
			</div>
		</Link>
	)
}

export default SingleListBox