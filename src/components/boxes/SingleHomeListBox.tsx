//import pakages
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
//import mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
//import context 
import { ThemeContext } from '../../store/context'
//import types & interfaces 
import { ListBoxComponentInterface } from '../../Interfaces/Interfaces'

const SingleListBox = ({listData, listTasks}:ListBoxComponentInterface) => {
	const { appTheme } = useContext(ThemeContext)
	const tasks = listTasks.length
	const doneTasks =  listTasks.filter(task => task.done === true).length
	const doneTasksPercent = Math.round((doneTasks*100)/tasks)
	const todayDate = new Date()
	return (
		<Link to={`lists/${listData.id}`}>
			<Box className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-4 sm:py-5 px-3 sm:w-64 w-48 my-3">
				<Typography variant="subtitle1" fontWeight='450' gutterBottom>{listData.title}</Typography>
				<Typography color='#71717A' marginY='0.75rem' variant="subtitle2" fontWeight='400' gutterBottom>
					{`${(listTasks?.filter(task => new Date(task.date.year, task.date.month-1, task.date.date).getTime() ===  new Date(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0)).getTime()))?.length} tasks for today`}
				</Typography>
				<div className="w-full rounded-full h-3 sm:h-5 border">
					<div className={`bg-[${appTheme}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPercent}%`}}></div>
				</div>
			</Box>
		</Link>
	)
}
export default SingleListBox