//import pakages
import { FC } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { TimerComponentInterface } from './../../types-&-interfaces/Interfaces'
import { RootState } from '../../store/main'

const TimerSecion : FC<TimerComponentInterface> = ({time}) => {
	const them = useSelector((state:RootState)=> state.handleThem)
	return (
		<span className=" flex justify-center mt-2/3 sm:mt-1/10"> 
			<div className=" border-zinc-300 border-8 absolute flex justify-center rounded-full">
				<div className={` border-[${them}] border-8 relative -m-2 rounded-full`}>
					<div className='sm:p-52 p-80 flex justify-center'>
						<p className=" font-medium text-lg sm:w-full absolute sm:text-center top-24 sm:top-44 inset-y-0">{time/60 < 1 ? `${time%60} minutes` :`${Math.floor(time/60)} hour & ${time%60} minutes`}</p>
					</div>
				</div>
			</div>
		</span>
	)
}

export default TimerSecion