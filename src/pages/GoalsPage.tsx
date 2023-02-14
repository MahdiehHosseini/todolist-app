//import pakages
import { lazy, useState } from 'react'
import { useSelector } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
//import components
const SingleGoalBox = lazy(() => import('../components/boxes/SingleGoalBox'))
const GoalsPageLoading = lazy(() => import('../components/loading-components/GoalsPageLoading'))
//import types & interfaces
import { RootState } from '../store/main'
import { GoalInterface } from '../Interfaces/Interfaces'

function GoalsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const splitTwo = []
	const sliceIntoChunks = (data:GoalInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	sliceIntoChunks(
		filterValue === 'long-term' ? goals.filter(goal => goal.term === 'long')
			: filterValue === 'short-term' ? goals.filter(goal => goal.term === 'short')
				: filterValue === 'unreached' ? goals.filter(goal => goal.tasks.length !== 0)
					: goals
	)
	const boxes = splitTwo.map(twoGoals => twoGoals.length === 2 
		? <div className='md:flex md:justify-around'>
			<SingleGoalBox key={twoGoals[0].id} goalData={twoGoals[0]} />
			<SingleGoalBox key={twoGoals[1].id} goalData={twoGoals[1]} />
		</div>
		: <div className='md:w-full md:flex md:justify-center'>
			<SingleGoalBox key={twoGoals[0].id} goalData={twoGoals[0]} />
		</div> )
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<>
			{ goals ?
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
									<option value='all'>all goals</option>
									<option value='long-term'>long term goals</option>
									<option value='short-term'>short term goals</option>
									<option value='unreached'>unreached goals</option>
								</NativeSelect>
							</FormControl>
						</ThemeProvider>
					</div>
					<div className="mx-6 my-7">{boxes}</div>
				</>
				: <GoalsPageLoading />}
		</>
	)
}
export default GoalsPage