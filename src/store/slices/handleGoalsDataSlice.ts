// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { GoalInterface } from './../../types-&-interfaces/Interfaces'

const initialState: GoalInterface[] = [{
	id : 24 ,
	title : 'a goal' ,
	reachDate : '2022-08-31' ,
	term : 'short' ,
	autoReach : false ,
	tasks : []
},{
	id : 45 ,
	title : 'a goal' ,
	reachDate : '2022-08-31',
	term : 'short' ,
	autoReach : false ,
	tasks : []
},{
	id : 27 ,
	title : 'a goal' ,
	reachDate : '2022-08-31',
	term : 'short' ,
	autoReach : false ,
	tasks : []
}]
const handleGoalsDataSlice = createSlice({
	name: 'handleGoalsData',
	initialState,
	reducers: {
		getData : (state:GoalInterface[] , action:PayloadAction<GoalInterface[]>) => {
			//axios request
			return state = action.payload
		},toggleAutoReach : (state:GoalInterface[] , action:PayloadAction<number>) => {
			state.map(goal => goal.id === action.payload ? goal.autoReach = !goal.autoReach : goal)
		},toggleTerm : (state:GoalInterface[] , action:PayloadAction<number>) => {
			state.map(goal => goal.id === action.payload ? goal.term === 'short' ? goal.term = 'long' : goal.term = 'short' : goal)
		},addGoal : (state:GoalInterface[] , action:PayloadAction<GoalInterface>)=>{
			state.push(action.payload)
		},editGoal : (state:GoalInterface[] , action:PayloadAction<GoalInterface>)=>{
			return state.map((goal) => {
				return goal.id === action.payload.id  
					? {
						...goal ,
						title : action.payload.title ,
						reachDate : action.payload.reachDate ,
					}
					: goal
			})
		}
	}
})

export const { getData,toggleAutoReach,addGoal,editGoal,toggleTerm } = handleGoalsDataSlice.actions
export default handleGoalsDataSlice.reducer