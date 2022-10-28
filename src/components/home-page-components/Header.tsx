//import pakages
import { useDispatch, useSelector } from 'react-redux'
//import types & interfaces
import { AppDispatch, RootState } from './../../store/main'
//import store
import { toggleState } from './../../store/slices/toggleSlice'
function Header () {
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<header className=' flex justify-between items-center mb-5 mx-6 pt-6'>
			<span className="flex flex-col">
				<h2 className={`text-[${them}] font-semibold text-xl inline-block`}>Hi user :)</h2>
				<p className=' font-medium text-lg text-stone-500 inline-block mt-2'>Good afternoon</p>
			</span>
			<span className=" relative">
				<i onClick={() => dispatch(toggleState('notifications'))} className='material-icons cursor-pointer text-2xl'>notifications</i>
				<span className={`absolute bg-[${them}] h-2 w-2 rounded-full right-1 top-2`}></span>
			</span>
		</header>
	)
}

export default Header 