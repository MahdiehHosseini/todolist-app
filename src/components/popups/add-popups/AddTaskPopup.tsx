//import pakages
import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
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
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import types & interfaces
import { AppDispatch } from '../../../store/main'
//import store
import { addTask } from '../../../store/slices/handleTasksDataSlice'

function AddTaskPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const [title , setTitle] = useState<string>('')
	const todayDate = new Date()
	const [date , setDate] = useState(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0))
	const [startTime , setStartTime] = useState(new Date())
	const [endTime , setEndTime] = useState(new Date())
	const [autoDone , setAutoDone] = useState<boolean>(false)
	const [reminder , setReminder] = useState<boolean>(false)
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const url = useLocation().pathname
	const parentId =  parseFloat(url.split('/')[2])
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className="  h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 pb-14 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>add task</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						addTask({ 
							id : Math.floor(Math.random() * 100) , 
							title : title , 
							startTime : {
								hour: startTime.getHours() ,
								minutes: startTime.getMinutes()
							} , 
							endTime : {
								hour: endTime.getHours() ,
								minutes: endTime.getMinutes()
							} , 
							reminder : reminder ,
							autoDone : autoDone , 
							date : {
								year: date.getFullYear(),
								month: date.getMonth()+1,
								date: date.getDate(),
							} , 
							listId : url.includes('lists') ? parentId : 0 , 
							goalId : url.includes('goals') ? parentId : 0 , 
							done : false
						})
					)
					console.log(date.getMonth())
					event.preventDefault()
					alert('your task has been added')
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
				<div className={`border-b border-[${appTheme}] p-3 my-5 text-center`}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							value={date}
							onChange={(newDate) => setDate(newDate)}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<div className={`border-b border-[${appTheme}] p-3`}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<div className='flex justify-around h-full my-2'>
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
				</div>
				<span className={`border-b border-[${appTheme}] p-3 my-5 flex justify-center items-center`}>
					<Typography fontWeight='400' fontSize='large' >auto done</Typography>
					<TaskAltIcon
						onClick={()=>setAutoDone(!autoDone)} 
						fontSize='medium'
						className={`${autoDone ? `text-[${appTheme}]` : 'text-neutral-300'} cursor-pointer ml-2`}
					/>
				</span>
				<span className='items-center flex justify-center p-3'>
					<Typography fontWeight='400' fontSize='large' >reminder</Typography>
					<AccessAlarmIcon
						fontSize='medium'
						className={`${reminder ? `text-[${appTheme}]` : 'text-neutral-300'} ml-2 cursor-pointer`}
						onClick={()=>setReminder(!reminder)} 
					/>
				</span>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddTaskPopup 
