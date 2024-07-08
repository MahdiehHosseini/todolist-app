//import pakages
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useCookies } from 'react-cookie'
//import types & interfaces
import { AppDispatch, RootState } from './store/main'
//import components
const HomePage = lazy(() => import('./pages/HomePage'))
const BottomNav = lazy(() => import('./components/BottomNav'))
const CalendarPage = lazy(() => import('./pages/CalendarPage'))
const SettingPage = lazy(() => import('./pages/SettingPage'))
const TimeLinePage = lazy(() => import('./pages/TimeLinePage'))
const Popups = lazy(() => import('./components/popups/Popups'))
const SingleLIstPage = lazy(() => import('./pages/SingleListPage'))
const SingleTaskPage = lazy(() => import('./pages/SingleTaskPage'))
const SingleGoalPage = lazy(() => import('./pages/SingleGoalPage'))
const SingleHabitPage = lazy(() => import('./pages/SingleHabitPage'))
const HabitsPage = lazy(() => import('./pages/HabitsPage'))
const GoalsPage = lazy(() => import('./pages/GoalsPage'))
const ListsPage = lazy(() => import('./pages/ListsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
//import context
import { ThemeContext, ToggleContext } from './store/context'
//import store 
import { autoDone } from './store/slices/handleTasksDataSlice'
//import styles
import 'animate.css'

function App() {
	const dispatch = useDispatch<AppDispatch>()
	const [cookies, setCookie] = useCookies(['appTheme'])
	const [appTheme, setAppTheme] = useState(cookies.appTheme ? cookies.appTheme : '#C084FC')
	const [state, setState] = useState('none')
	useEffect(() => {
		setCookie('appTheme', appTheme, { path: '/' })
	}, [appTheme])
	useEffect(()=>{
		dispatch(autoDone())
	} , [])
	return (
		<>
			<div className={`App font-rubik relative h-screen ${state !== 'none' && 'overflow-hidden '}`}>
				<Suspense fallback={<></>}>
					<BrowserRouter>
						<ThemeContext.Provider value={{appTheme, setAppTheme}}>
							<ToggleContext.Provider value={{state, setState}}>
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
							</ToggleContext.Provider>
						</ThemeContext.Provider>
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