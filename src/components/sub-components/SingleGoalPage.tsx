//import pakages
import { Link } from 'react-router-dom'
import { lazy,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch,RootState } from '../../store/main'
//import components
const TasksList = lazy(() => import('../main-components/TasksList'))
const SingleGoalPageLoading = lazy(() => import('../loading-components/SingleGoalPageLoading'))
//import store
import { toggleTerm , toggleAutoReach } from '../../store/slices/handleGoalsDataSlice'

function SingleGoalPage () {
	const dispatch = useDispatch<AppDispatch>()
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const { goalId } = useParams()
	const theGoal = goals.filter(goal => goal.id === parseFloat(goalId))[0]
	const theGoalTasks = tasks.filter(task => task.goalId === theGoal.id)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(theGoalTasks.length){
			theGoalTasks.map(task => { new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() > endDate && setEndDate(new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime()) })
			const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	return (
		<>
			{theGoal 
				? <>
					<span className='flex items-center justify-center my-4 mx-6 relative'>
						<Link to={'/goals'}><i className={`material-icons text-3xl text-[${them}] absolute left-0 top-2`}>arrow_back</i></Link> 
						<h6 className={`text-xl border-b border-[${them}] p-2 text-[${them}] font-semibold`}>{theGoal.title}</h6>
					</span>	
					<div className=" mx-6">
						<p onClick={()=>dispatch(toggleTerm(theGoal.id))} className=" cursor-pointer text-base font-normal text-neutral-500">{`${theGoal.term} term`}</p>
						<p className=" text-base font-normal text-neutral-500">{`${calculateRemainDays()} days remain`}</p>
						<span onClick={()=>dispatch(toggleAutoReach(theGoal.id))} className=' cursor-pointer flex items-center'>
							<p className=" text-base font-normal text-neutral-500">auto reach</p>
							<i className={`text-lg-without-lineheigh material-icons ml-2 ${theGoal.autoReach ? `text-[${them}]` : 'text-neutral-300'}`}>file_download_done</i>
						</span>
					</div>
					<TasksList title="tasks for this goal" addOption={true} tasksData={theGoalTasks} /> </>
				: <SingleGoalPageLoading /> }
		</>
	)
}

export default SingleGoalPage