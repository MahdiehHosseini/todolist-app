//import pakages
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { addList } from '../../../store/slices/handleListsDataSlice'

function AddListPopup () {
	const [title , setTitle] = useState<string>('')
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto bg-white w-5/6 pb-20 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>dispatch(toggleState('none'))} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>add list</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						addList({ 
							id : Math.floor(Math.random() * 100) , 
							title : title ,
							tasks : [] 
						})
					)
					event.preventDefault()
					alert('your list has been added')
				}}
			>
				<ThemeProvider theme={theme}>
					<TextField
						className={`border-b border-[${appTheme}] py-3`}
						color='error'
						label='title'
						variant="standard"
						onChange={(e)=>setTitle(e.target.value)} type='text' 
					/>
				</ThemeProvider>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-12`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddListPopup 