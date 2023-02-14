//import pakages
import {lazy} from 'react'
import { useSelector } from 'react-redux'
//import ypes & interfaces
import { RootState } from '../store/main'
//import components
const Header = lazy(() => import('../components/Header'))
const ListsList = lazy(() => import('../components/listes/ListsList'))
const TasksList = lazy(() => import('../components/listes/TasksList'))
const HabitsList = lazy(() => import('../components/listes/HabitsList'))
const HomePageLoading = lazy(() => import('../components/loading-components/HomePageLoading'))

function HomePage () {
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const todayDate = new Date()
	const todayTasks = tasks.filter(task => new Date(task.date.year, task.date.month-1, task.date.date).getTime() === new Date(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0)).getTime())
	const habits = useSelector((state:RootState)=> state.handleHabitsData)
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	return (
		<>
			{tasks && habits ?
				<div className=' h-screen overflow-x-hidden'>
					<Header />
					<ListsList />
					<TasksList title="today's tasks" addOption={false} tasksData={todayTasks} />
					<hr className={`sm:mx-52 mx-28 my-10 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
					<HabitsList habitData={habits} />
				</div> : < HomePageLoading />}
		</>
	)
}

export default HomePage