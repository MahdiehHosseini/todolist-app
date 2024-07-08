//import pakages
import React, { useState, useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { editList } from '../../../store/slices/handleListsDataSlice'

function EditListPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const lists = useSelector((state:RootState) => state.handleListsData)
	const url = useLocation().pathname
	const listId =  parseInt(url.split('/')[2])
	const theList = lists.filter(list => list.id === listId)[0]
	const [title , setTitle] = useState<string>(theList.title)
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto pb-14 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>edit list</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						editList({ 
							id : listId , 
							title : title , 
							tasks : theList.tasks 
						})
					)
					event.preventDefault()
					alert('your list has been edited')
				}} 
			>
				<ThemeProvider theme={theme}>
					<TextField
						className={`border-b border-[${appTheme}] py-3`}
						color='error'
						label={`${title}`}
						variant="standard"
						onChange={(e)=>setTitle(e.target.value)} type='text' 
					/>
				</ThemeProvider>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditListPopup 