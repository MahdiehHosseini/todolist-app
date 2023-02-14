//import pakages
import {lazy,useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import mui components
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { createTheme, ThemeProvider  } from '@mui/material/styles'
//import components
const SingleTaskBox = lazy(() => import('../boxes/SingleTaskBox'))
//import types & interfaces
import { TasksListComponentInterface,TaskInterface,TimeInterface } from '../../Interfaces/Interfaces'
import { AppDispatch, RootState } from '../../store/main'
//import store
import { toggleState } from '../../store/slices/toggleSlice'

const TasksList = ({title ,addOption,tasksData}:TasksListComponentInterface) => {
	const [showOptions,setShowOptions] = useState<boolean>(false)
	const [showDoneTasks , setShowDoneTasks] = useState<boolean>(false)
	const [sortByTime , setSortByTime] = useState<boolean>(false)
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const dispatch = useDispatch<AppDispatch>()
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	const splitTwo = []
	const sliceIntoChunks = (data:TaskInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	useEffect(()=>{
		document.addEventListener('click',(event)=>{
			event.target?.id !== 'options' && setShowOptions(false)
		})
	} , [])
	const calculateMinutes = (time:TimeInterface)=>{
		return time.hour*60 + time.minutes
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
					<ThemeProvider theme={theme}>
						{addOption && 
						<AddIcon 
							onClick={()=>addOption && dispatch(toggleState('addTask'))} 
							fontSize='medium' 
							color='error'
							className='cursor-pointer  mt-1'
						/>
						}
						<Typography fontWeight='480' variant="h6" marginLeft='0.25rem' color='error' className={`${addOption && 'cursor-pointer'}`} gutterBottom>{title}</Typography>
					</ThemeProvider>
				</span>
				<MoreHorizIcon className='cursor-pointer z-20' fontSize='medium' id='options' onClick={()=>setShowOptions(!showOptions)} />
			</span>
			{showOptions && <span id='options' className={`absolute bg-white z-10 border border-[${appTheme}] rounded-xl p-5 top-0 -right-3`}>
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