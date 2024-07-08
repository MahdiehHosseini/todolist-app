//import pakages
import React, { useState, useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { editTask } from '../../../store/slices/handleTasksDataSlice'

function EditTaskPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const url = useLocation().pathname
	const taskId =  parseInt(url.split('/')[2])
	const theTask = tasks.filter(task => task.id === taskId)[0]
	const [title , setTitle] = useState<string>(theTask.title)
	const [date , setDate] = useState(new Date(theTask.date.year, theTask.date.month, theTask.date.date, 0, 0, 0, 0))
	const [startTime , setStartTime] = useState(new Date())
	const [endTime , setEndTime] = useState(new Date())
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
		<div className=" h-auto pb-12 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>edit task</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						editTask({
							id : taskId , 
							title : title , 
							startTime : {
								hour: startTime.getHours() ,
								minutes: startTime.getMinutes()
							} , 
							endTime : {
								hour: endTime.getHours() ,
								minutes: endTime.getMinutes()
							} , 
							reminder : theTask.reminder , 
							autoDone : theTask.autoDone , 
							date : {
								year: date.getFullYear(),
								month: date.getMonth(),
								date: date.getDate(),
							} , 
							listId : theTask.listId , 
							goalId : theTask.goalId , 
							done : theTask.done
						})
					)
					event.preventDefault()
					alert('your task has been edited')
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
				<div className={`border-b border-[${appTheme}] p-3 my-5 text-center`}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							value={date}
							onChange={(newDate) => setDate(newDate)}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<div className='flex justify-around h-full my-4'>
						<TimePicker
							className='w-40'
							label="start time"
							value={startTime}
							onChange={(newValue) => {setStartTime(newValue)}}
							renderInput={(params) => <TextField {...params} />}
						/>
						<TimePicker
							className='w-40'
							label="end time"
							value={endTime}
							onChange={(newValue) => {setEndTime(newValue)}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</div>
				</LocalizationProvider>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditTaskPopup 