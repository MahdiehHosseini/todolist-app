//import pakages
import React from 'react'
import { Link } from 'react-router-dom'
// import mui components
import Typography from '@mui/material/Typography'
//import types & interfaces
import { HabitBoxComponentInterface } from '../../Interfaces/Interfaces'

const SingleHabitBox = ({habitData}:HabitBoxComponentInterface) => {
	return (
		<div className=" border-b my-3 pb-3 lg:w-2/5 md:w-full md:mr-5 ">
			<Link to={`/habits/${habitData.id}`}>
				<Typography variant='subtitle1' fontSize='1rem' fontWeight='400'>{habitData.title}</Typography>
				<Typography variant='subtitle2' fontSize='0.8rem' fontWeight='420' className="text-zinc-400">{`${habitData.startTime.hour} : ${habitData.startTime.minutes}`}</Typography>
			</Link>
		</div>
	)
}

export default SingleHabitBox