//import pakages
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import mui components
import Typography from '@mui/material/Typography'
//import types & interfaces
import { AppDispatch, RootState } from '../store/main'
//import store
import { toggleState } from '../store/slices/toggleSlice'

function SettingPage() {
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
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
					<Typography onClick={()=>dispatch(toggleState('them'))} fontSize='large' variant='body1' marginY='2.25rem' className="cursor-pointer">Themes</Typography>
					<hr className={`sm:mx-52 mx-28 border-[${appTheme}] lg:mx-64 xl:mx-96`}></hr>
				</span>
			</div>
		</>
	)
}

export default SettingPage