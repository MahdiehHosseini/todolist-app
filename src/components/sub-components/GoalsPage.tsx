//import pakages
import { lazy, useState } from 'react'
import { useSelector } from 'react-redux'
//import components
const SingleGoalBox = lazy(() => import('./SingleGoalBox'))
const GoalsPageLoading = lazy(() => import('./../loading-components/GoalsPageLoading'))
//import types & interfaces
import { RootState } from '../../store/main'
import { GoalInterface } from '../../types-&-interfaces/Interfaces'

function GoalsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const goals = useSelector((state:RootState) => state.handleGoalsData)
	const them = useSelector((state:RootState)=> state.handleThem)
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
				: filterValue === 'reached' ? goals.filter(goal => goal.tasks.length === 0)
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
	return (
		<>
			{ goals ?
				<>
					<div className={`flex relative w-64 text-[${them}] font-semibold text-lg mt-5`}>
						<div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
							<i className='material-icons text-2xl cursor-pointer'>play_arrow</i>
						</div>
						<select onChange={(e=>setFilterValue(e.target.value))} className="block appearance-none w-full bg-white ml-2 py-2 pl-10">
							<option value='all' >all goals</option>
							<option value='long-term' >long term goals</option>
							<option value='short-term' >short term goals</option>
							<option value='reached' >reached goals</option>
						</select>
					</div>
					<div className="mx-6">{boxes}</div>
				</>
				: <GoalsPageLoading />}
		</>
	)
}
export default GoalsPage