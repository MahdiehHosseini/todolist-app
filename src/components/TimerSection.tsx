//import pakages
import React, { useContext } from 'react'
// import mui components
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { TimerComponentInterface } from '../Interfaces/Interfaces'

const TimerSecion = ({time}:TimerComponentInterface) => {
	const { appTheme } = useContext(ThemeContext)
	return (
		<span className=" flex justify-center mt-2/3 sm:mt-1/10"> 
			<div className=" border-zinc-300 border-8 absolute flex justify-center rounded-full">
				<div className={` border-[${appTheme}] border-8 relative -m-2 rounded-full`}>
					<div className='sm:p-52 p-80 flex justify-center'>
						<Typography fontSize='1.25rem' fontWeight='400' position='absolute' className="sm:w-full sm:text-center top-24 sm:top-44 inset-y-0">{time/60 < 1 ? `${time%60} minutes` :`${Math.floor(time/60)} hour & ${time%60} minutes`}</Typography>
					</div>
				</div>
			</div>
		</span>
	)
}

export default TimerSecion