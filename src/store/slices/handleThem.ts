import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = '#F472B6'
const themSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		toggleThem : (state , action:PayloadAction<string>) => {
			return state = action.payload
		}
	}
})

export const { toggleThem } = themSlice.actions
export default themSlice.reducer