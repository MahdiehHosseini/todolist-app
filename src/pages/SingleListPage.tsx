//import pakages
import React, { lazy,useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
//import components
const TasksList = lazy(() => import('../components/listes/TasksList'))
const SingleListPageLoading = lazy(() => import('../components/loading-components/SingleListPageLoading'))
// import mui components
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { RootState } from '../store/main'

function SingleListPage () {
	const lists = useSelector((state:RootState) => state.handleListsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const { appTheme } = useContext(ThemeContext)
	const { listId } = useParams()
	const theList = lists.filter(list => list.id === parseFloat(listId))[0]
	const theListTasks = tasks.filter(task => task.listId === theList.id)
	const [endDate,setEndDate] = useState(0)
	const calculateRemainDays = ()=>{
		if(theList.tasks.length){
			theList.tasks.forEach(task => { new Date(task.date.year, task.date.month, task.date.date).getTime() > endDate && setEndDate(new Date(task.date.year, task.date.month, task.date.date).getTime()) })
			const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime()
			return endDate - today > 0 ? `${(endDate - today)/(1000*60*60*24)}` : 0
		} else {
			return '0'
		}
	}
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<>
			{ theList ?
				<>
					<span className='flex items-center justify-center my-4 mx-6 relative'>
						<ThemeProvider theme={theme}>
							<Link to={'/lists'}>
								< ArrowBackIcon className='absolute left-0 top-2' color='error' fontSize='medium' />
							</Link>
							<Typography className={`border-b border-[${appTheme}]`} variant='h6' fontSize='1.25rem' fontWeight='400' color='error' padding='0.5rem'>{theList.title}</Typography>
						</ThemeProvider>
					</span>
					<div className=" mx-6">
						<Typography variant='body1' fontSize='1rem' fontWeight='400' className="text-neutral-500">{`${theListTasks.length} tasks left`}</Typography>
						<Typography className="text-neutral-500" marginTop='0.5rem' variant='body1' fontSize='1rem' fontWeight='400'>{`${calculateRemainDays()} days remain`}</Typography>
					</div>
					<TasksList title="list's tasks" addOption={true} tasksData={theListTasks} />
				</>
				: <SingleListPageLoading /> 
			}
		</>
	)
}

export default SingleListPage