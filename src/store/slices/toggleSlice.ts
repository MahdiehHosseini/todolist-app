import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const toggleSlice = createSlice({
	name: 'toggle',
	initialState: 'none',
	reducers: {
		toggleState : (state:string , action : PayloadAction<string>)=>{
			return state = action.payload
		}
	}
})

export const { toggleState } = toggleSlice.actions
export default toggleSlice.reducer