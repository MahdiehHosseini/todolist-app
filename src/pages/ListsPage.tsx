//import pakages
import React, { lazy,useState, useContext } from 'react'
import { useSelector } from 'react-redux'
//import components
const SingleListBox = lazy(() => import('../components/boxes/SingleListBox'))
const ListsPageLoading = lazy(() => import('../components/loading-components/ListsPageLoading'))
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import NativeSelect from '@mui/material/NativeSelect'
//import context
import { ThemeContext } from '../store/context'
//import types & interfaces
import { RootState } from '../store/main'
import { ListInterface } from '../Interfaces/Interfaces'

function ListsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const lists = useSelector((state:RootState) => state.handleListsData)
	const { appTheme } = useContext(ThemeContext)
	const splitTwo = []
	const sliceIntoChunks = (data:ListInterface[]) => {
		for (let i = 0;i < data.length;i += 2) {
			const chunk = data.slice(i, i + 2)
			splitTwo.push(chunk)
		}
	}
	sliceIntoChunks(
		filterValue === 'disabled' ? lists.filter(list => list.tasks.length === 0)
			: filterValue === 'on-progress' ? lists.filter(list => list.tasks.length !== 0 && list.tasks.filter(task => task.done === false).length !== 0)
				: lists
	)
	const boxes = splitTwo.map(twoLists => twoLists.length === 2 
		? <div className='md:flex md:justify-around'>
			<SingleListBox key={twoLists[0].id} listData={twoLists[0]} />
			<SingleListBox key={twoLists[1].id} listData={twoLists[1]} />
		</div> 
		: <div className='md:w-full md:flex md:justify-center'>
			<SingleListBox key={twoLists[0].id} listData={twoLists[0]} />
		</div> )
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		},
	})
	return (
		<>
			{ lists ?
				<>
					<div className={`w-52 text-[${appTheme}] mt-5 ml-6`}>
						<ThemeProvider theme={theme}>
							<FormControl fullWidth>
								<NativeSelect
									color='error'
									onChange={(e=>setFilterValue(e.target.value))}
									defaultValue='all'
									inputProps={{}}
								>
									<option value='all'>all lists</option>
									<option value='disabled'>disabled lists</option>
									<option value='on-progress'>lists on progress</option>
								</NativeSelect>
							</FormControl>
						</ThemeProvider>
					</div>
					<div className="mx-6 my-7">{boxes}</div>
				</>
				: <ListsPageLoading /> }
		</>
	)
}
export default ListsPage