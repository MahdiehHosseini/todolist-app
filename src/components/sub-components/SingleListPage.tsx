//import pakages
import { Link } from 'react-router-dom'
import { lazy,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
//import components
const TasksList = lazy(() => import('../main-components/TasksList'))
const SingleListPageLoading = lazy(() => import('./../loading-components/SingleListPageLoading'))

function SingleListPage () {
	const lists = useSelector((state:RootState) => state.handleListsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const { listId } = useParams()
	const theList = lists.filter(list => list.id === parseFloat(listId))[0]
	const theListTasks = tasks.filter(task => task.listId === theList.id)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(theListTasks.length){
			theListTasks.map(task => { new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() > endDate && setEndDate(new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime()) })
			const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	return (
		<>
			{ theList ?
				<>
					<span className='flex items-center justify-center my-4 mx-6 relative'>
						<Link to={'/lists'}><i className={`material-icons text-3xl text-[${them}] absolute left-0 top-2`}>arrow_back</i></Link> 
						<h6 className={`text-xl border-b border-[${them}] p-2 text-[${them}] font-semibold`}>{theList.title}</h6>
					</span>
					<span className=" mx-6 block">
						<p className=" text-base font-normal text-neutral-500">{`${theListTasks.length} tasks left`}</p>
						<p className=" text-base font-normal text-neutral-500">{`${calculateRemainDays()} days remain`}</p>
					</span>
					<TasksList title="list's tasks" addOption={true} tasksData={theListTasks} />
				</>
				: <SingleListPageLoading /> 
			}
		</>
	)
}

export default SingleListPage