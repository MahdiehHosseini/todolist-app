//import pakages
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from './../../store/main'
//import store
import { toggleState } from './../../store/slices/toggleSlice'

function BottomNav () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const location = useLocation().pathname
	return (
		<nav className={`fixed bottom-0 py-3 bg-white border-t border-[${them}] w-full flex justify-between lg:px-32 xl:px-52`}>
			<span className="flex w-full justify-around mr-10 lg:ml-40">
				<Link to={'setting'}><i className={`material-icons text-3xl ${ location.includes('setting') && `text-[${them}] border-b border-[${them}]`}`}>settings</i></Link>
				<Link to={'calendar'}><i className={`material-icons text-3xl ${ location.includes('calendar') && `text-[${them}] border-b border-[${them}]`}`}>date_range</i></Link>
			</span>
			<span className=' flex justify-center'>
				<span className={`rounded-full bg-[${them}] flex absolute bottom-10 shadow-md z-30 cursor-pointer`}>
					{/\d/.test(location) 
						? <i onClick={()=>dispatch(toggleState(`edit${location.split('/')[0] + location.split('/')[1].charAt(0).toUpperCase() + location.split('/')[1].slice(1,-1)}`))} className="material-icons text-3xl-without-lineheigh text-white m-2">edit</i>
						: <i onClick={()=>dispatch(toggleState('add'))} className="material-icons text-4xl-without-lineheigh text-white m-1">add</i>}
				</span>
			</span>
			<span className="flex w-full justify-around ml-10 lg:mr-40">
				<Link to={'time-line'}><i className={`material-icons text-3xl ${ location.includes('time-line') && `text-[${them}] border-b border-[${them}]`}`}>timeline</i></Link>
				<Link to={'/'}><i className={`material-icons text-3xl ${ location === '/' && `text-[${them}] border-b border-[${them}]`}`}>home</i></Link>
			</span>
		</nav>
	)
}

export default BottomNav