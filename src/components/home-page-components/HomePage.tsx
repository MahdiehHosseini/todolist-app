//import pakages
import {lazy} from 'react'
import { useSelector } from 'react-redux'
//import ypes & interfaces
import { RootState } from '../../store/main'
//import components
const Header = lazy(() => import('./Header'))
const ListsList = lazy(() => import('./ListsList'))
const TasksList = lazy(() => import('./../main-components/TasksList'))
const HabitsList = lazy(() => import('./../main-components/HabitsList'))
const HomePageLoading = lazy(() => import('./../loading-components/HomePageLoading'))

function HomePage () {
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const todayTasks = tasks.filter(task => task.date === `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`)
	const habits = useSelector((state:RootState)=> state.handleHabitsData)
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<>
			{tasks && habits ?
				<div className=' h-screen overflow-x-hidden'>
					<Header />
					<ListsList />
					<TasksList title="today's tasks" addOption={false} tasksData={todayTasks} />
					<hr className={`sm:mx-52 mx-28 my-10 border-[${them}] lg:mx-64 xl:mx-96`}></hr>
					<HabitsList habitData={habits} />
				</div> : < HomePageLoading />}
		</>
	)
}

export default HomePage