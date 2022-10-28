//import pakages
import {lazy,useState,FC,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import components
const SingleTaskBox = lazy(() => import('../sub-components/SingleTaskBox'))
//import types & interfaces
import { TasksListComponentInterface,TaskInterface } from './../../types-&-interfaces/Interfaces'
import { AppDispatch, RootState } from '../../store/main'
//import store
import { toggleState } from '../../store/slices/toggleSlice'

const TasksList: FC<TasksListComponentInterface> = ({title ,addOption,tasksData}) => {
	const [showOptions,setShowOptions] = useState<boolean>(false)
	const [showDoneTasks , setShowDoneTasks] = useState<boolean>(false)
	const [sortByTime , setSortByTime] = useState<boolean>(false)
	const them = useSelector((state:RootState)=> state.handleThem)
	const dispatch = useDispatch<AppDispatch>()
	const splitTwo = []
	const sliceIntoChunks = (data:TaskInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	useEffect(()=>{
		document.addEventListener('click',(event)=>{
			event.target.id !== 'options' && setShowOptions(false)
		})
	} , [])
	const calculateMinutes = (time:string)=>{
		return parseInt(time.split('-')[0])*60 + parseInt(time.split('-')[1])
	}
	sliceIntoChunks(showDoneTasks && sortByTime ? tasksData.filter(task => !task.done).slice().sort((a,b) => calculateMinutes(a.startTime) - calculateMinutes(b.startTime))
		: showDoneTasks && !sortByTime ? tasksData.filter(task => !task.done)
			: sortByTime && !showDoneTasks ? tasksData.slice().sort((a,b) => calculateMinutes(a.startTime) - calculateMinutes(b.startTime))
				: tasksData)
	const boxes = splitTwo.map(twoTasks => twoTasks.length === 2 
		? <div className='md:flex md:justify-around'>
			<SingleTaskBox key={twoTasks[0].id} taskData={twoTasks[0]} />
			<SingleTaskBox key={twoTasks[1].id} taskData={twoTasks[1]} />
		</div> 
		: <div className='md:w-full md:flex md:justify-center'>
			<SingleTaskBox key={twoTasks[0].id} taskData={twoTasks[0]} />
		</div> )
	return (
		<section className='mx-6 relative mb-20'>
			<span className=' my-7 flex items-center justify-between'>
				<span className="flex">
					{addOption && <i onClick={()=>addOption && title.includes('goal') ? dispatch(toggleState('addGoal')) : dispatch(toggleState('addTask'))} className={`cursor-pointer material-icons text-[${them}] text-2xl`}>add</i>}
					<p className={` font-semibold text-[${them}] text-xl ml-1 ${addOption && 'cursor-pointer'}`}>{title}</p>
				</span>
				<p id='options' onClick={()=>setShowOptions(!showOptions)} className=' cursor-pointer text-xl font-semibold z-20'>...</p>
			</span>
			{showOptions && <span id='options' className={`absolute bg-white z-10 border border-[${them}] rounded-xl p-5 top-0 -right-3`}>
				<p onClick={()=>{setSortByTime(!sortByTime) 
					setShowOptions(false)}} className=' font-medium text-lg my-2 cursor-pointer'>sort by time</p>
				<p onClick={()=>{setShowDoneTasks(!showDoneTasks) 
					setShowOptions(false)}} className=' font-medium text-lg cursor-pointer'>show/hidden done <br /> tasks</p>
			</span>}
			<div>{boxes}</div>
		</section>
	)
}

export default TasksList