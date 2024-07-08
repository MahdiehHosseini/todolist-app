//import pakages
import React, { useState, useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../../../store/context'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { editHabit } from '../../../store/slices/handleHabitsDataSlice'

function EditHabitPopup () {
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const dispatch = useDispatch<AppDispatch>()
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const url = useLocation().pathname
	const habitId =  parseInt(url.split('/')[2])
	const theHabit = habits.filter(habit => habit.id === habitId)[0]
	const [title , setTitle] = useState<string>(theHabit.title)
	const [startTime , setStartTime] = useState(new Date())
	const [endTime , setEndTime] = useState(new Date())
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className="  h-auto pb-14 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>edit habit</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						editHabit({ 
							id : habitId , 
							title : title , 
							startTime : {
								hour: startTime.getHours() ,
								minutes: startTime.getMinutes()
							} , 
							endTime : {
								hour: endTime.getHours() ,
								minutes: endTime.getMinutes()
							} , 
							reminder : theHabit.reminder , 
							addDate : theHabit.addDate
						})
					)
					event.preventDefault()
					alert('your habit has been edited')
				}} 
			>
				<ThemeProvider theme={theme}>
					<TextField
						className={`border-b border-[${appTheme}] py-4`}
						color='error'
						label={`${title}`}
						variant="standard"
						onChange={(e)=>setTitle(e.target.value)} type='text' 
					/>
				</ThemeProvider>
				<div className='p-3'>
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
				</div>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-5`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditHabitPopup 