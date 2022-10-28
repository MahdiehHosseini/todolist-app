//import pakages
import { FC } from 'react'
import { Link } from 'react-router-dom'
//import types & interfaces
import { HabitBoxComponentInterface } from '../../types-&-interfaces/Interfaces'

const SingleHabitBox : FC<HabitBoxComponentInterface> = ({habitData}) => {
	return (
		<div className=" border-b my-3 pb-3 lg:w-2/5 md:w-full md:mr-5">
			<Link to={`/habits/${habitData.id}`}>
				<p className=" text-base font-medium">{habitData.title}</p>
				<p className=" text-sm font-normal text-zinc-400">{habitData.startTime.split('-').map(string => string.padStart(2, '0')).join(':')}</p>
			</Link>
		</div>
	)
}

export default SingleHabitBox