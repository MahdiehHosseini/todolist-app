//import pakages
import React, {lazy, useContext, useEffect} from 'react'
//import components
const AddPopup = lazy(() => import('./add-popups/AddPopup'))
const AddTaskPopup = lazy(() => import('./add-popups/AddTaskPopup'))
const NotificationsPopup = lazy(() => import('./NotificationsPopup'))
const AddListPopup = lazy(() => import('./add-popups/AddListPopup'))
const AddGoalPopup = lazy(() => import('./add-popups/AddGoalPopup'))
const AddHabitPopup = lazy(() => import('./add-popups/AddHabitPopup'))
const EditTaskPopup = lazy(() => import('./edit-popups/EditTaskPopup'))
const EditGoalPopup = lazy(() => import('./edit-popups/EditGoalPopup'))
const EditHabitPopup = lazy(() => import('./edit-popups/EditHabitPopup'))
const EditListPopup = lazy(() => import('./edit-popups/EditListPopup'))
const ThemePopup = lazy(() => import('./ThemePopup'))
//import context
import { ToggleContext } from '../../store/context'

function Popups() {
	const { state, setState } = useContext(ToggleContext)
	useEffect(()=>{
		document.addEventListener('click',(event)=>{
			event.target?.id === 'popup' && setState('none')
		})
	} , [])
	return (
		<div id='popup' className=' absolute h-screen w-full bg-black/50 z-30 flex items-center justify-center'>
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
			{state === 'them' && <ThemePopup />}
		</div>
	)
}

export default Popups