//import pakages
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
//import types & interfaces 
import { ListBoxComponentInterface } from '../../Interfaces/Interfaces'
import { RootState } from '../../store/main'

const SingleListBox = ({listData}:ListBoxComponentInterface) => {
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const tasks = listData.tasks.length
	const doneTasks =  listData.tasks.filter(task => task.done === true).length
	const doneTasksPercent = Math.round((doneTasks*100)/tasks)
	const todayDate = new Date()
	return (
		<Link to={`lists/${listData.id}`}>
			<Box className=" border rounded-3xl mr-7 flex flex-shrink-0 flex-col py-4 sm:px-4 sm:py-5 px-3 sm:w-64 w-48 my-3">
				<Typography variant="subtitle1" fontWeight='450' gutterBottom>{listData.title}</Typography>
				<Typography color='#71717A' marginY='0.75rem' variant="subtitle2" fontWeight='400' gutterBottom>
					{`${(listData.tasks?.filter(task => new Date(task.date.year, task.date.month-1, task.date.date).getTime() ===  new Date(new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 0, 0, 0, 0)).getTime()))?.length} tasks for today`}
				</Typography>
				<div className="w-full rounded-full h-3 sm:h-5 border">
					<div className={`bg-[${appTheme}] h-full rounded-l-full w-0`} style={{width : `${doneTasksPercent}%`}}></div>
				</div>
			</Box>
		</Link>
	)
}
export default SingleListBox