//import pakages
import { useState,lazy, FC } from 'react'
import { useDispatch,useSelector } from 'react-redux'
//import components
const LineChart = lazy(() => import('./LineChart'))
//import types & interfaces 
import { AppDispatch,RootState } from '../../store/main'
import { toggleListStatus } from '../../store/slices/timeLineData'
import { LineChartComponentInterface } from '../../types-&-interfaces/Interfaces'

const LineChartSection:FC<LineChartComponentInterface> = ({chartData}) => {
	const [rotate , setRotate] = useState(false)
	const dispatch = useDispatch<AppDispatch>()
	const them = useSelector((state:RootState)=> state.handleThem)
	const listStatus = useSelector((state:RootState) => state.timeLine.listStatus)
	const lists = useSelector((state:RootState) => state.handleListsData)
	return (
		<section className='my-5 w-full'>
			<div className="flex relative w-64 font-medium text-lg">
				<div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
					<i className={`material-icons text-[${them}] text-3xl cursor-pointer ${rotate && 'rotate-90'}`}>play_arrow</i>
				</div>
				<select onChange={(e)=>dispatch(toggleListStatus(e.target.value))} value={listStatus} className="block appearance-none w-full bg-white ml-5 py-2 pl-10" onFocus={()=>setRotate(true)} onBlur={()=>setRotate(false)}>
					{lists.map(list => <option key={list.id} value={`${list.title}`} >{list.title}</option>)}
				</select>
			</div>
			<LineChart chartData={chartData} />
		</section>
	)
}

export default LineChartSection