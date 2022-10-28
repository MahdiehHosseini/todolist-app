//import pakages
import {lazy,Suspense, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import types & interfaces
import { AppDispatch, RootState } from './store/main'
//import components
const HomePage = lazy(() => import('./components/home-page-components/HomePage'))
const BottomNav = lazy(() => import('./components/main-components/BottomNav'))
const CalendarPage = lazy(() => import('./components/calendar-page-components/CalendarPage'))
const SettingPage = lazy(() => import('./components/setting-page-components/SettingPage'))
const TimeLinePage = lazy(() => import('./components/time-line-page-components/TimeLinePage'))
const Popups = lazy(() => import('./components/popups-components/Popups'))
const SingleLIstPage = lazy(() => import('./components/sub-components/SingleListPage'))
const SingleTaskPage = lazy(() => import('./components/sub-components/SingleTaskPage'))
const SingleGoalPage = lazy(() => import('./components/sub-components/SingleGoalPage'))
const SingleHabitPage = lazy(() => import('./components/sub-components/SingleHabitPage'))
const HabitsPage = lazy(() => import('./components/sub-components/HabitsPage'))
const GoalsPage = lazy(() => import('./components/sub-components/GoalsPage'))
const ListsPage = lazy(() => import('./components/sub-components/ListsPage'))
const NotFoundPage = lazy(() => import('./components/sub-components/NotFoundPage'))
//import store 
import { autoDone } from './store/slices/handleTasksDataSlice'
//import styles
import 'animate.css'

function App() {
	const state = useSelector((state:RootState) => state.toggle)
	const dispatch = useDispatch<AppDispatch>()
	useEffect(()=>{
		dispatch(autoDone())
	} , [])
	return (
		<>
			<div className={`App font-inter relative h-screen ${state !== 'none' && 'overflow-hidden '}`}>
				<Suspense fallback={<></>}>
					<BrowserRouter>
						{state !== 'none' && <Popups />}
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='setting' element={<SettingPage />} />
							<Route path='time-line' element={<TimeLinePage />} />
							<Route path='calendar' element={<CalendarPage />} />
							<Route path='/habits' element={<HabitsPage />} />
							<Route path='/goals' element={<GoalsPage />} />
							<Route path='/lists' element={<ListsPage />} />
							<Route path='lists/:listId' element={<SingleLIstPage />} />
							<Route path='/tasks/:taskId' element={<SingleTaskPage />} />
							<Route path='/goals/:goalId' element={<SingleGoalPage />} />
							<Route path='/habits/:habitId' element={<SingleHabitPage />} />
							<Route path='/*' element={<NotFoundPage />} />
						</Routes>
						<BottomNav />
					</BrowserRouter>
				</Suspense>
			</div>
			{/* classes */}
			<span className='hidden text-[#4ADE80] text-[#000] text-[#FACC15] text-[#22D3EE] text-[#C084FC] text-[#F472B6]
									border-[#4ADE80] border-[#000] border-[#FACC15] border-[#22D3EE] border-[#C084FC] border-[#F472B6]'></span>
		</>
	)
}

export default App