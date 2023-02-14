// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { HabitInterface } from '../../Interfaces/Interfaces'

const initialState: HabitInterface[] = [{
	id : 5 ,
	title : 'exercise' ,
	startTime : {
		hour: 12,
		minutes: 3
	} ,
	endTime : {
		hour: 14,
		minutes: 3
	} ,
	reminder : true ,
	addDate : {
		year: 2023,
		month: 2,
		date: 1
	}
},{
	id : 6 ,
	title : 'new' ,
	startTime : {
		hour: 17,
		minutes: 5
	} ,
	endTime : {
		hour: 17,
		minutes: 30
	} ,
	reminder : false ,
	addDate : {
		year: 2023,
		month: 2,
		date: 1
	}
}]
const handleHabitsDataSlice = createSlice({
	name: 'handleHabitsData',
	initialState,
	reducers: {
		getData : (state:HabitInterface[] , action:PayloadAction<HabitInterface[]>) => {
			//axios request
			return state = action.payload
		},toggleReminder : (state:HabitInterface[] , action:PayloadAction<number>) => {
			state.map(habit => habit.id === action.payload ? habit.reminder = !habit.reminder : habit)
		},addHabit : (state:HabitInterface[] , action:PayloadAction<HabitInterface>)=>{
			state.push(action.payload)
		},editHabit : (state:HabitInterface[] , action:PayloadAction<HabitInterface>)=>{
			return state.map((habit) => {
				return habit.id === action.payload.id  
					? {
						...habit ,
						title : action.payload.title ,
						startTime : action.payload.startTime ,
						endTime : action.payload.endTime 
					}
					: habit
			})
		}
	}
})

export const { toggleReminder,addHabit,editHabit } = handleHabitsDataSlice.actions
export default handleHabitsDataSlice.reducer