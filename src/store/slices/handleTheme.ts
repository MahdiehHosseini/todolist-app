import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState = '#F472B6'
const themeSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		toggleTheme : (state , action:PayloadAction<string>) => {
			return state = action.payload
		}
	}
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer