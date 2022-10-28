//import pakages
import { lazy,useState } from 'react'
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../../store/main'
import { ListInterface } from '../../types-&-interfaces/Interfaces'
//import components
const SingleListBox = lazy(() => import('./SingleListBox'))
const ListsPageLoading = lazy(() => import('./../loading-components/ListsPageLoading'))

function ListsPage() {
	const [filterValue , setFilterValue] = useState<string>('all')
	const lists = useSelector((state:RootState) => state.handleListsData)
	const them = useSelector((state:RootState)=> state.handleThem)
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
	return (
		<>
			{ lists ?
				<>
					<div className={`flex relative w-64 text-[${them}] font-semibold text-lg mt-5`}>
						<div className="pointer-events-none absolute inset-y-0 left-5 flex items-center">
							<i className='material-icons text-2xl cursor-pointer'>play_arrow</i>
						</div>
						<select onChange={(e=>setFilterValue(e.target.value))} className="block appearance-none w-full bg-white ml-2 py-2 pl-10">
							<option value='all' >all lists</option>
							<option value='disabled' >disabled lists</option>
							<option value='on-progress' >lists on progress</option>
						</select>
					</div>
					<div className="mx-6">
						{boxes}
					</div>
				</>
				: <ListsPageLoading /> }
		</>
	)
}
export default ListsPage