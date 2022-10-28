//import pakages
import { useState,lazy, FC } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//import components
const LineChart = lazy(() => import('./LineChart'))
//import types & interfaces 
import { AppDispatch,RootState } from '../../store/main'
import { toggleDateStatus } from '../../store/slices/timeLineData'
import { LineChartComponentInterface } from '../../types-&-interfaces/Interfaces'

const TimeChartSection:FC<LineChartComponentInterface> = ({chartData}) => {
	const [rotate , setRotate] = useState(false)
	const them = useSelector((state:RootState)=> state.handleThem)
	const dispatch = useDispatch<AppDispatch>()
	const dateStatus = useSelector((state:RootState) => state.timeLine.dateStatus)
	return (
		<section className='my-5 w-full'>
			<div className="flex relative w-64 font-medium text-lg">
				<div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
					<i className={`material-icons text-[${them}] text-3xl ${rotate && 'rotate-90'}`}>play_arrow</i>
				</div>
				<select onChange={(e)=>dispatch(toggleDateStatus(e.target.value))} value={dateStatus} className="block appearance-none w-full bg-white ml-5 py-2 pl-10" onFocus={()=>setRotate(true)} onBlur={()=>setRotate(false)}>
					<option value='today' >today</option>
					<option value='thisWeek' >this week</option>
					<option value='thisMonth' >this month</option>
				</select>
			</div>
			<LineChart chartData={chartData} />
		</section>
	)
}

export default TimeChartSection