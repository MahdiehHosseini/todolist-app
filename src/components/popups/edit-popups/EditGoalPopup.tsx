//import pakages
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
//import types & interfaces
import { AppDispatch,RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { editGoal } from '../../../store/slices/handleGoalsDataSlice'

function EditGoalPopup () {
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const url = useLocation().pathname
	const goalId =  parseInt(url.split('/')[2])
	const theGoal = goals.filter(goal => goal.id === goalId)[0]
	const [title , setTitle] = useState<string>(theGoal.title)
	const [date , setDate] = useState(new Date(theGoal.reachDate.year, theGoal.reachDate.month, theGoal.reachDate.date))
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto bg-white pb-12 w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>dispatch(toggleState('none'))} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>edit goal</Typography>
			</ThemeProvider>
			<form 
				className='mx-9 flex flex-col relative h-full'
				onSubmit={ (event)=> {
					dispatch(
						editGoal({ 
							id : goalId, 
							title : title , 
							term : theGoal.term , 
							autoReach : theGoal.autoReach , 
							reachDate : {
								year: date.getFullYear(),
								month: date.getMonth(),
								date: date.getDate()
							} , 
							tasks : theGoal.tasks
						})
					)
					event.preventDefault()
					alert('your goal has been edited')
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
				<div className='p-3 my-5 text-center flex flex-col items-center justify-around'>
					<label className=' text-lg font-medium text-center mb-1'>reach date</label>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							value={date}
							onChange={(newDate) => setDate(newDate)}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${appTheme}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>edit</button>
				</span>
			</form>
		</div>
	)
}

export default EditGoalPopup