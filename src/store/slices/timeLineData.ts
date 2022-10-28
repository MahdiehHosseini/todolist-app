import { createSlice,PayloadAction } from '@reduxjs/toolkit'
const initialState = {
	dateStatus: 'today',
	listStatus: 'BiB'
}
const dateSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		calculatePerson: (state , action) => {},
		toggleDateStatus: (state , action:PayloadAction<string>)=>{
			state.dateStatus = action.payload
		},toggleListStatus: (state , action:PayloadAction<string>)=>{
			state.listStatus = action.payload
		}
	}
})

export const { calculatePerson,toggleDateStatus,toggleListStatus } = dateSlice.actions
export default dateSlice.reducer