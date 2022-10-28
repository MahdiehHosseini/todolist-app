// import pakages
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import types & interfaces
import { ListInterface } from './../../types-&-interfaces/Interfaces'

const initialState: ListInterface[] = [{
	id : 24 ,
	title : 'English' ,
	tasks : []
},{
	id : 25 ,
	title : 'BiB' ,
	tasks : []
},{
	id : 26 ,
	title : 'den' ,
	tasks : []
}]
const handleListsDataSlice = createSlice({
	name: 'handleListsData',
	initialState,
	reducers: {
		getData : (state:ListInterface[] , action:PayloadAction<ListInterface[]>) => {
			//axios request
			return state = action.payload
		},addList : (state:ListInterface[] , action:PayloadAction<ListInterface>)=>{
			state.push(action.payload)
		},editList : (state:ListInterface[] , action:PayloadAction<ListInterface>)=>{
			return state.map((list) => {
				return list.id === action.payload.id  
					? {
						...list ,
						title : action.payload.title 
					}
					: list
			})
		}
	}
})

export const { getData,addList,editList } = handleListsDataSlice.actions
export default handleListsDataSlice.reducer