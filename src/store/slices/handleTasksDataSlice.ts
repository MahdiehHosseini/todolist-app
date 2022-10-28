// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { TaskInterface } from './../../types-&-interfaces/Interfaces'

const initialState: TaskInterface[] = [{
	id : 17 ,
	title : 'shopping24',
	startTime : '2-5',
	endTime : '2-5' ,
	reminder : true ,
	autoDone : true ,
	date : '2022-08-31' ,
	listId : 24 ,
	goalId : 24 ,
	done : false
},{
	id : 27 ,
	title : 'first' ,
	startTime :'2-5',
	endTime : '2-5' ,
	reminder : false ,
	autoDone : true ,
	date : '2022-09-04' ,
	listId : 25 ,
	goalId : 25 ,
	done : false
},{
	id : 54 ,
	title : 'seccond' ,
	startTime : '7-5' ,
	endTime :'8-5' ,
	reminder : false ,
	autoDone : true ,
	date : '2022-09-04' ,
	listId : 25 ,
	goalId : 24 ,
	done : true},{
	id : 67 ,
	title : 'shopping25' ,
	startTime : '3-5',
	endTime : '4-5' ,
	reminder : false ,
	autoDone : true ,
	date : '2022-08-31' ,
	listId : 25 ,
	goalId : 24 ,
	done : false},{
	id : 69 ,
	title : 'the new' ,
	startTime : '4-50',
	endTime : '6-30' ,
	reminder : true ,
	autoDone : true ,
	date : '2022-09-20' ,
	listId : 25 ,
	goalId : 0 ,
	done : true}]
const handleTasksDataSlice = createSlice({
	name: 'handleTasksData',
	initialState,
	reducers: {
		getData : (state:TaskInterface[] , action:PayloadAction<TaskInterface[]>) => {
			//axios request
			return state = action.payload
		},toggleReminder : (state:TaskInterface[] , action:PayloadAction<number>) => {
			state.map(task => task.id === action.payload ? task.reminder = !task.reminder : task)
		},toggleDone : (state:TaskInterface[] , action:PayloadAction<number>) => {
			return state.map(task => task.id === action.payload ? {...task , done : !task.done} : task)
		},toggleAutoDone : (state:TaskInterface[] , action:PayloadAction<number>) => {
			state.map(task => task.id === action.payload ? task.autoDone = !task.autoDone : task)
		},deleteTask : (state:TaskInterface[] , action:PayloadAction<number>) => {
			return state.filter(task => task.id !== action.payload)
		},addTask: (state:TaskInterface[] , action:PayloadAction<TaskInterface>)=>{
			state.push(action.payload)
		},editTask : (state:TaskInterface[] , action:PayloadAction<TaskInterface>)=>{
			return state.map(task => 
				task.id === action.payload.id 
					? { ...task , 
						title: action.payload.title , 
						startTime: action.payload.startTime, 
						endTime: action.payload.endTime, 
						date: action.payload.date 
					} 
					: task)
		},autoDone : (state:TaskInterface[]) => {
			state.map(task => 
				task.autoDone ? 
					new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() <= new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime() &&
					parseInt(task.endTime.split('-')[0])*60 + parseInt(task.endTime.split('-')[1]) <= (new Date().getHours()*60 + new Date().getMinutes()) ? 
						{ ...task  , done : true} : task : task
			)
		}
	}
})

export const { getData,toggleReminder,toggleDone,toggleAutoDone,deleteTask,addTask,editTask,autoDone } = handleTasksDataSlice.actions
export default handleTasksDataSlice.reducer