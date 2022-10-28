// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { HabitInterface } from './../../types-&-interfaces/Interfaces'

const initialState: HabitInterface[] = [{
	id : 5 ,
	title : 'exercise' ,
	startTime : '2-5' ,
	endTime : '3-8' ,
	reminder : true ,
	addDate : '2022-04-06'
},{
	id : 6 ,
	title : 'new' ,
	startTime : '3-5' ,
	endTime : '8-8' ,
	reminder : false ,
	addDate : '2022-09-06'
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