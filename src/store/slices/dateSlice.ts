import { createSlice } from '@reduxjs/toolkit'
const todayDate = new Date()
const initialState = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0)
const dateSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		setDate : (state , action) => {
			const date = action.payload
			return state = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
		}
	}
})

export const { setDate } = dateSlice.actions
export default dateSlice.reducer