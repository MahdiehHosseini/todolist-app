//import pakages
import {lazy, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from '../../store/main'
import { toggleState } from '../../store/slices/toggleSlice'
//import components
const AddPopup = lazy(() => import('./add-popups-components/AddPopup'))
const AddTaskPopup = lazy(() => import('./add-popups-components/AddTaskPopup'))
const NotificationsPopup = lazy(() => import('./NotificationsPopup'))
const AddListPopup = lazy(() => import('./add-popups-components/AddListPopup'))
const AddGoalPopup = lazy(() => import('./add-popups-components/AddGoalPopup'))
const AddHabitPopup = lazy(() => import('./add-popups-components/AddHabitPopup'))
const EditTaskPopup = lazy(() => import('./edit-popups-components/EditTaskPopup'))
const EditGoalPopup = lazy(() => import('./edit-popups-components/EditGoalPopup'))
const EditHabitPopup = lazy(() => import('./edit-popups-components/EditHabitPopup'))
const EditListPopup = lazy(() => import('./edit-popups-components/EditListPopup'))
const ThemPopup = lazy(() => import('./ThemPopup'))

function Popups() {
	const state = useSelector((state:RootState) => state.toggle)
	const dispatch = useDispatch<AppDispatch>()
	useEffect(()=>{
		document.addEventListener('click',(event)=>{
			event.target.id === 'popup' && dispatch(toggleState('none'))
		})
	} , [])
	return (
		<div id='popup' className=' absolute h-screen w-full bg-black/50 z-20 flex items-center justify-center'>
			{state === 'notifications' && <NotificationsPopup />}
			{state === 'add' && <AddPopup />}
			{state === 'addTask' && <AddTaskPopup />}
			{state === 'addList' && <AddListPopup />}
			{state === 'addGoal' && <AddGoalPopup />}
			{state === 'addHabit' && <AddHabitPopup />}
			{state === 'editTask' && <EditTaskPopup />}
			{state === 'editList' && <EditListPopup />}
			{state === 'editHabit' && <EditHabitPopup />}
			{state === 'editGoal' && <EditGoalPopup />}
			{state === 'them' && <ThemPopup />}
		</div>
	)
}

export default Popups