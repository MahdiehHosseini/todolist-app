import { createSlice } from '@reduxjs/toolkit'
const initialState = `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`
const dateSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		setDate : (state , action) => {
			return state = `${action.payload.year}-${`${action.payload.month}`.padStart(2, '0')}-${`${action.payload.day}`.padStart(2, '0')}`
		}
	}
})

export const { setDate } = dateSlice.actions
export default dateSlice.reducer