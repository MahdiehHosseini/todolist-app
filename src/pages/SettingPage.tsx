//import pakages
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//import mui components
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../store/context'

function SettingPage() {
	const { appTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	return (
		<>
			<Typography variant='h6' fontSize='1.25rem' marginY='1rem' align='center'>Setting</Typography>
			<div className=" h-2/3 flex flex-col justify-center text-center">
				<span>
					<Link to={'/lists'} ><Typography fontSize='large' variant='body1' marginY='2.25rem' className="cursor-pointer">Lists</Typography></Link>
					<hr className={`sm:mx-52 mx-28 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<Link to={'/habits'}><Typography fontSize='large' variant='body1' marginY='2.25rem' className="cursor-pointer">Habits</Typography></Link>
					<hr className={`sm:mx-52 mx-28 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<Link to={'/goals'}><Typography fontSize='large' variant='body1' marginY='2.25rem' className="cursor-pointer">Goals</Typography></Link>
					<hr className={`sm:mx-52 mx-28 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<Typography onClick={()=>setState('them')} fontSize='large' variant='body1' marginY='2.25rem' className="cursor-pointer">Themes</Typography>
					<hr className={`sm:mx-52 mx-28 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
				</span>
			</div>
		</>
	)
}

export default SettingPage