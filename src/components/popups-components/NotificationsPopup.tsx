//import pakages
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from './../../store/main'
//import store
import { toggleState } from './../../store/slices/toggleSlice'
function NotificationsPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<div className=" h-2/3 bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-medium`}>notifications</h5>
			<span className=" mx-6 block">
				{<><div className={`border-b border-[${them}] py-4 px-1`}>
					<span className=" flex items-center">
						<h6 className=" font-normal text-base">reminder</h6>
						<i className={`material-icons text-[${them}] text-lg ml-2`}>access_alarm</i>
					</span>
					<p className=" font-light text-sm my-1">you have 3 tasks to do for today</p>
				</div>
				<div className={`border-b border-[${them}] py-4 px-1`}>
					<span className=" flex items-center">
						<h6 className=" font-normal text-base">reminder</h6>
						<i className={`material-icons text-[${them}] text-lg ml-2`}>access_alarm</i>
					</span>
					<p className=" font-light text-sm my-1">you have 3 tasks to do for today</p>
				</div></>}
			</span>
		</div>
	)
}

export default NotificationsPopup 