//import pakages
import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
//import mui components
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { RootState } from '../store/main'
import { TimeLineDataInterFace } from '../Interfaces/Interfaces'

export default function Chart() {
	const [filterValue , setFilterValue] = useState<string>('week')
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const weekData:TimeLineDataInterFace[] = []
	const DaysOfTheWeek:string[] = [ 'sun', 'mon' , 'tue', 'wed', 'thu', 'fri', 'sat']
	function setThisWeekChart(){
		for(let i = 0 ; i < 7 ; i++){
			const theDate = new Date(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()-i)
			const filteredTasks = tasks.filter(task => new Date(task.date.year, task.date.month, task.date.date).getTime() === theDate.getTime())
			const newObj = {time : DaysOfTheWeek[theDate.getDay()] , percent : filteredTasks.length !== 0 ?  (filteredTasks.filter(task => task.done === true).length*100)/filteredTasks.length : 0}
			weekData.push(newObj)
		}
	}
	setThisWeekChart()
	const monthData:TimeLineDataInterFace[] = []
	function setThisMonthChart(){
		const thisMonthTasks = tasks.filter(task => task.date.month === new Date().getMonth()+1)
		thisMonthTasks.map(theTask => {
			const newObj:TimeLineDataInterFace = {time: `${theTask.date.month}/${theTask.date.date}` , percent: (
				((thisMonthTasks.filter(task => task.date === theTask.date)).filter(task => task.done === true).length)*100
			)/thisMonthTasks.filter(task => task.date === theTask.date).length
			}
			monthData.some((obj)=> obj.time === newObj.time) ? '' : monthData.push(newObj)
		})
	}
	setThisMonthChart()
	const { appTheme } = useContext(ThemeContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<span className='md:flex md:justify-center'>
			<div className='md:w-2/3 h-96 mr-10'>
				<ThemeProvider theme={theme}>
					<FormControl fullWidth>
						<NativeSelect
							className='m-10 w-1/2'
							color='error'
							onChange={(e=>setFilterValue(e.target.value))}
							defaultValue='week'
							inputProps={{}}
						>
							<option value='week'>this week</option>
							<option value='month'>this month</option>
						</NativeSelect>
					</FormControl>
				</ThemeProvider>
				<ResponsiveContainer>
					<LineChart
						data={filterValue === 'week' ? weekData : monthData}
						margin={{
							top: 16,
							right: 16,
							bottom: 0,
							left: 24,
						}}
					>
						<XAxis
							dataKey="time"
							stroke={theme.palette.text.secondary}
							style={theme.typography.body2}
						/>
						<YAxis
							stroke={theme.palette.text.secondary}
							style={theme.typography.body2}
						>
							<Label
								angle={270}
								position="left"
								style={{
									textAnchor: 'middle',
									fill: theme.palette.text.primary,
									...theme.typography.body1,
								}}
							>
							</Label>
						</YAxis>
						<Line
							isAnimationActive={false}
							type="monotone"
							dataKey="percent"
							stroke={theme.palette.error.main}
							dot={true}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</span>
	)
}