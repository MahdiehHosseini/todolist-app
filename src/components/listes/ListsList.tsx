//import pakages
import { lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
//import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
//import types & interfaces
import { RootState } from '../../store/main'
//import components
const SingleListBox = lazy(() => import('../boxes/SingleHomeListBox'))
//import store 

function ListsList () {
	const lists = useSelector((state:RootState) => state.handleListsData)
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	useEffect(()=>{
		lists.forEach(list => list.tasks = tasks.filter(task => task.listId === list.id))
	} , [])
	const filteredLists = lists.filter(list => list.tasks.length !== 0 && list.tasks?.filter(task => task.done === false).length !== 0)
	return (
		<section>
			<ThemeProvider theme={theme}>
				<Typography color='error' marginY='0.75rem' marginLeft='1.5rem' display='inline-block' fontWeight='480' variant="h6" gutterBottom>Lists on progress</Typography>
			</ThemeProvider>
			<div className='flex snap-x overflow-x-auto overflow-y-hidden snap-mandatory ml-6 '>
				{filteredLists.map(list => <SingleListBox listData={list} key={list.id} />)}
			</div>
		</section>
	)
}

export default ListsList