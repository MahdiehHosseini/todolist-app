//import pakages
import React, { lazy } from 'react'
//import components
const SingleHabitBox = lazy(() => import('../boxes/SingleHabitBox'))
//import types & interfaces
import { HabitInterface, HabitsListComponentInterface } from '../../Interfaces/Interfaces'

const HabitsList = ({habitData}:HabitsListComponentInterface) => {
	const splitTwo = []
	const sliceIntoChunks = (data:HabitInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	sliceIntoChunks(habitData)
	const boxes = splitTwo.map(twoHabits => twoHabits.length === 2 
		? <div className='md:flex md:justify-around'>
			<SingleHabitBox key={twoHabits[0].id} habitData={twoHabits[0]} />
			<SingleHabitBox key={twoHabits[1].id} habitData={twoHabits[1]} />
		</div> 
		: <div className='md:w-full md:flex md:justify-center'>
			<SingleHabitBox key={twoHabits[0].id} habitData={twoHabits[0]} />
		</div> )
	return (
		<section className='mx-6 relative mb-20'>
			<div>{boxes}</div>
		</section>
	)
}

export default HabitsList