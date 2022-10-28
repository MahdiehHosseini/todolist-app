//import pakages
import { Chart, Line, Point, Tooltip } from 'bizcharts'
import { FC } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { LineChartComponentInterface } from '../../types-&-interfaces/Interfaces'
import { RootState } from '../../store/main'

const LineChart:FC<LineChartComponentInterface> = ({chartData}) => {
	const them = useSelector((state:RootState)=> state.handleThem)
	console.log(them)
	return(
		<Chart padding={[10, 20, 50, 50]} autoFit height={330} data={chartData}>
			<Line
				color={them}
				position="day*person"
				shape="smooth"
				tooltip={[
					'day*person',
					(y, v) => {
						return {
							title: y,
							name: 'person',
							value: v
						}
					}
				]}
			/>
			<Point position="day*person" />
			<Tooltip showCrosshairs lock />
		</Chart>
	)
}
export default LineChart