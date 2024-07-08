//import pakages
import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import types & interfaces
import { AppDispatch } from '../../../store/main'
//import store
import { addGoal } from '../../../store/slices/handleGoalsDataSlice'

function AddGoalPopup () {
	const [title , setTitle] = useState<string>('')
	const [autoReach , setAutoReach] = useState<boolean>(false)
	const todayDate = new Date()
	const [date, setDate] = useState(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0))
	const [term , setTerm] = useState<string>('short')
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext) 
	const dispatch = useDispatch<AppDispatch>()
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto text-center bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl pb-12">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>add goal</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col h-full'
				onSubmit={ (event)=> {
					dispatch(
						addGoal({ 
							id: Math.floor(Math.random() * 100), 
							title : title , 
							term : term , 
							autoReach : autoReach , 
							reachDate : {
								year: date.getFullYear(),
								month: date.getMonth(),
								date: date.getDate()
							} ,
							tasks : []
						})
					)
					event.preventDefault()
					alert('your goal has been added')
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
				<div className={`border-b border-[${appTheme}] p-3 my-5 flex flex-col text-center`}>
					<label className='font-medium text-lg mb-1'>reach date :</label>
					<div className='my-2 mx-10'>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DatePicker
								value={date}
								onChange={(newDate) => setDate(newDate)}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</div>
				</div>
				<span className={`border-b border-[${appTheme}] p-3`}>
					<Typography 
						fontWeight='400'
						fontSize='large'
						onClick={()=> term === 'short' ? setTerm('long') : setTerm('short')} 
						className='cursor-pointer'
					>
						{`${term} term`}
					</Typography>
				</span>
				<span className='p-3 my-5 flex justify-center items-center'>
					<Typography fontWeight='400' fontSize='large' >auto reach</Typography>
					<TaskAltIcon
						onClick={()=>setAutoReach(!autoReach)} 
						fontSize='medium'
						className={`${autoReach ? `text-[${appTheme}]` : 'text-neutral-300'} cursor-pointer ml-2`}
					/>
				</span>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddGoalPopup 