//import pakages
import { lazy,useState } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
import { HabitInterface } from '../../types-&-interfaces/Interfaces'
//import components
const SingleHabitBox = lazy(() => import('./SingleHabitBox'))
const HabitsPageLoaing = lazy(() => import('./../loading-components/HabitsPageLoading'))

function HabitsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const habits = useSelector((state:RootState) => state.handleHabitsData)
	const them = useSelector((state:RootState)=> state.handleThem)
	const splitTwo = []
	const sliceIntoChunks = (data:HabitInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	sliceIntoChunks(
		filterValue === 'old' ? habits.filter(habit =>  new Date(new Date().getFullYear(),new Date().getMonth() , 1).getTime() > new Date(habit.addDate.split('-').join(',').replace(/"/g, '')).getTime() && new Date(habit.addDate.split('-').join(',').replace(/"/g, '')).getTime() >= new Date(new Date().getFullYear(),1, 1).getTime())
			: filterValue === 'new' ? habits.filter(habit => new Date(habit.addDate.split('-').join(',').replace(/"/g, '')).getTime() >= new Date(new Date().getFullYear(),new Date().getMonth() , 1).getTime())
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
	return (
		<>
			{ habits ?
				<>
					<div className={`flex relative w-64 text-[${them}] font-semibold text-lg mt-5`}>
						<div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
							<i className='material-icons text-2xl cursor-pointer'>play_arrow</i>
						</div>
						<select onChange={(e=>setFilterValue(e.target.value))} className="block appearance-none w-full bg-white ml-2 py-2 pl-10">
							<option value='all' >all habits</option>
							<option value='old' >old habits</option>
							<option value='new' >new habits</option>
						</select>
					</div>
					<div className="mx-6">{boxes}</div>
				</>
				: <HabitsPageLoaing />}
		</>
	)
}
export default HabitsPage