//import pakages
import React, { lazy,useState, useContext } from 'react'
import { useSelector } from 'react-redux'
//import components
const SingleHabitBox = lazy(() => import('../components/boxes/SingleHabitBox'))
const HabitsPageLoaing = lazy(() => import('../components/loading-components/HabitsPageLoading'))
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { RootState } from '../store/main'
import { HabitInterface } from '../Interfaces/Interfaces'

function HabitsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const { appTheme } = useContext(ThemeContext)
	const splitTwo = []
	const sliceIntoChunks = (data:HabitInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	sliceIntoChunks(
		filterValue === 'old' ? habits.filter(habit =>  new Date(new Date().getFullYear(),new Date().getMonth() , 1).getTime() > new Date(habit.addDate.year, habit.addDate.month-1, habit.addDate.date).getTime())
			: filterValue === 'new' ? habits.filter(habit => new Date(habit.addDate.year, habit.addDate.month-1, habit.addDate.date).getTime() >= new Date(new Date().getFullYear(),new Date().getMonth() , 1).getTime())
				: habits
	)
	const boxes = splitTwo.map(twoHabits => twoHabits.length === 2 
		? <div className='md:flex md:justify-around'>
			<SingleHabitBox key={twoHabits[0].id} habitData={twoHabits[0]} />
			<SingleHabitBox key={twoHabits[1].id} habitData={twoHabits[1]} />
		</div> 
		: <div className='md:w-full md:flex md:justify-center'>
			<SingleHabitBox key={twoHabits[0].id} habitData={twoHabits[0]} />
		</div>)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<>
			{ habits ?
				<>
					<div className={`w-52 text-[${appTheme}] mt-5 ml-6`}>
						<ThemeProvider theme={theme}>
							<FormControl fullWidth>
								<NativeSelect
									color='error'
									onChange={(e=>setFilterValue(e.target.value))}
									defaultValue='all'
									inputProps={{}}
								>
									<option value='all'>all habits</option>
									<option value='old'>old habits</option>
									<option value='new'>new habits</option>
								</NativeSelect>
							</FormControl>
						</ThemeProvider>
					</div>
					<div className="mx-6 my-7">{boxes}</div>
				</>
				: <HabitsPageLoaing />}
		</>
	)
}
export default HabitsPage