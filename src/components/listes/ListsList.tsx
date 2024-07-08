//import pakages
import React, { lazy, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
//import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
//import components
const SingleListBox = lazy(() => import('../boxes/SingleHomeListBox'))
//import context
import { ThemeContext } from '../../store/context'
//import types & interfaces
import { RootState } from '../../store/main'
import { TaskInterface } from '../../Interfaces/Interfaces'

function ListsList () {
	const lists = useSelector((state:RootState) => state.handleListsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const { appTheme } = useContext(ThemeContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	const theListTasks = (listId: number) : TaskInterface[] => tasks.filter(task => task.listId === listId)
	const filteredLists = lists.filter(list => {
		const listTasks: TaskInterface[] = theListTasks(list.id)
		return listTasks.length !== 0 && listTasks.filter(task => task.done === false).length !== 0
	})
	return (
		<section>
			<ThemeProvider theme={theme}>
				<Typography color='error' marginY='0.75rem' marginLeft='1.5rem' display='inline-block' fontWeight='480' variant="h6" gutterBottom>Lists on progress</Typography>
			</ThemeProvider>
			<div className='flex snap-x overflow-x-auto overflow-y-hidden snap-mandatory ml-6 '>
				{filteredLists.map(list => <SingleListBox listData={list} listTasks={theListTasks(list.id)} key={list.id} />)}
			</div>
		</section>
	)
}

export default ListsList