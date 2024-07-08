// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { TaskInterface } from '../../Interfaces/Interfaces'

const initialState: TaskInterface[] = [{
	id : 17 ,
	title : 'shopping24',
	startTime : {
		hour: 7 ,
		minutes: 2
	},
	endTime : {
		hour: 7 ,
		minutes: 3
	} ,
	reminder : true ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 1,
		date: 10
	},
	listId : 24 ,
	goalId : 24 ,
	done : false
},{
	id : 44 ,
	title : 'time' ,
	startTime : {
		hour: 8 ,
		minutes: 15
	},
	endTime : {
		hour: 9 ,
		minutes: 15
	} ,
	reminder : true ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 2,
		date: 8
	}  ,
	listId : 25 ,
	goalId : 25 ,
	done : true
},{
	id : 27 ,
	title : 'first' ,
	startTime : {
		hour: 8 ,
		minutes: 15
	},
	endTime : {
		hour: 9 ,
		minutes: 15
	} ,
	reminder : false ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 1,
		date: 5
	}  ,
	listId : 25 ,
	goalId : 25 ,
	done : false
},{
	id : 54 ,
	title : 'seccond' ,
	startTime : {
		hour: 20 ,
		minutes: 5
	} ,
	endTime : {
		hour: 20 ,
		minutes: 30
	} ,
	reminder : false ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 1,
		date: 6
	}  ,
	listId : 25 ,
	goalId : 24 ,
	done : false},{
	id : 67 ,
	title : 'shopping25' ,
	startTime : {
		hour: 7 ,
		minutes: 2
	},
	endTime : {
		hour: 7 ,
		minutes: 14
	} ,
	reminder : false ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 1,
		date: 6
	}  ,
	listId : 25 ,
	goalId : 24 ,
	done : false},{
	id : 69 ,
	title : 'the new' ,
	startTime : {
		hour: 4 ,
		minutes: 50
	},
	endTime : {
		hour: 6 ,
		minutes: 30
	} ,
	reminder : true ,
	autoDone : true ,
	date : {
		year: 2023,
		month: 2,
		date: 3
	}  ,
	listId : 25 ,
	goalId : 24 ,
	done : true
}]
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
			// state.map(task => 
			// 	task.autoDone ? 
			// 		new Date(task.date.split('-').join(',').replace(/"/g, '')).getTime() <= new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()).getTime() &&
			// 		parseInt(task.endTime.split('-')[0])*60 + parseInt(task.endTime.split('-')[1]) <= (new Date().getHours()*60 + new Date().getMinutes()) ? 
			// 			{ ...task  , done : true} : task : task
			// )
		}
	}
})

export const { getData,toggleReminder,toggleDone,toggleAutoDone,deleteTask,addTask,editTask,autoDone } = handleTasksDataSlice.actions
export default handleTasksDataSlice.reducer