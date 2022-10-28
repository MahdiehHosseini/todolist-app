//import pakages
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import types & interfaces
import { AppDispatch, RootState } from './../../store/main'
//import store
import { toggleState } from './../../store/slices/toggleSlice'

function SettingPage() {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<>
			<h4 className=' text-xl font-semibold text-center my-4'>Setting</h4>
			<div className=" h-2/3 flex flex-col justify-center">
				<span>
					<Link to={'/lists'} ><h6 className=" text-lg font-medium my-9 text-center cursor-pointer">Lists</h6></Link>
					<hr className={`sm:mx-52 mx-28 border-[${them}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<Link to={'/habits'}><h6 className=" text-lg font-medium my-9 text-center cursor-pointer">Habits</h6></Link>
					<hr className={`sm:mx-52 mx-28 border-[${them}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<Link to={'/goals'}><h6 className=" text-lg font-medium my-9 text-center cursor-pointer">Goals</h6></Link>
					<hr className={`sm:mx-52 mx-28 border-[${them}] lg:mx-64 xl:mx-96`}></hr>
				</span>
				<span>
					<h6 onClick={()=>dispatch(toggleState('them'))} className=" text-lg font-medium my-9 text-center cursor-pointer">Thems</h6>
					<hr className={`sm:mx-52 mx-28 border-[${them}] lg:mx-64 xl:mx-96`}></hr>
				</span>
			</div>
		</>
	)
}

export default SettingPage