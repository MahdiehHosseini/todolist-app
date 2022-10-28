//import pakages
import { lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
// import components
const TimeChartSection = lazy(() => import('./TimeChartSection'))
const ListChartSection = lazy(() => import('./ListChartSection'))
const TimeLineLoading = lazy(() => import('./../loading-components/TimeLinePageLoading'))
//import types & interfaces
import { RootState } from '../../store/main'
import { ChartInterface } from '../../types-&-interfaces/Interfaces'
import { ListInterface } from '../../types-&-interfaces/Interfaces'
//import store

function TimeLinePage() {
	const tasks = useSelector((state:RootState) => state.handleTasksData)
	const lists = useSelector((state:RootState) => state.handleListsData)
	const dateStatus = useSelector((state:RootState) => state.timeLine.dateStatus)
	const listStatus = useSelector((state:RootState) => state.timeLine.listStatus)
	const calculateMinutes = (time:string)=>{
		return parseInt(time.split('-')[0])*60 + parseInt(time.split('-')[1])
	}
	const today:ChartInterface[]= []
	function setTodayChart(){
		const todayDate = `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`
		const sortedTodayTasks = tasks.filter(task => task.date === todayDate).slice().sort((a,b) => calculateMinutes(a.startTime) - calculateMinutes(b.startTime))
		sortedTodayTasks.map(task => {
			const newObj = {day : task.startTime.split('-').map(string => string.padStart(2, '0')).join(':') , person : task.done ? 100 : 0}
			today.push(newObj)
		})
	}
	setTodayChart()
	const thisWeek:ChartInterface[] = []
	const days = [ 'sun', 'mon' , 'tue', 'wed', 'thu', 'fri', 'sat']
	function setThisWeekChart(){
		for(let i = 0 ; i < 7 ; i++){
			const theDate = `${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()-i}`.padStart(2, '0')}`
			const filteredTasks = tasks.filter(task => task.date === theDate)
			const newObj = {day : days[new Date(theDate).getDay()] , person : filteredTasks.length !== 0 ?  (filteredTasks.filter(task => task.done === true).length*100)/filteredTasks.length : 0}
			thisWeek.push(newObj)
		}
	}
	setThisWeekChart()
	const thisMonth:ChartInterface[] = []
	function setThisMonthChart(){
		const thisMonthTasks = tasks.filter(task => parseInt(task.date.split('-')[1]) === new Date().getMonth()+1)
		thisMonthTasks.map(theTask => {
			const newObj:ChartInterface = {day: `${theTask.date.split('-')[1]}/${theTask.date.split('-')[2]}` , person: (
				(
					(thisMonthTasks.filter(task => task.date === theTask.date)).filter(task => task.done === true).length
				)*100
			)/thisMonthTasks.filter(task => task.date === theTask.date).length 
			}
			thisMonth.some((obj)=> obj.day === newObj.day) ? '' : thisMonth.push(newObj)
		})
	}
	setThisMonthChart()
	const calculateDays = (date)=>{
		return new Date(new Date().getFullYear() , parseInt(date.split('/')[0]), parseInt(date.split('/')[1])).getTime()
	}
	let timeLineData:ChartInterface[] = []
	switch(dateStatus) {
	case 'today':
		timeLineData = today
		break
	case 'thisWeek':
		timeLineData = thisWeek.sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day))
		break
	default:
		timeLineData = thisMonth.sort((a,b) => calculateDays(a.day) - calculateDays(b.day))
	} 
	useEffect(()=>{
		lists.map(list => list.tasks = tasks.filter(task=>task.listId === list.id))
	},[])
	const listData:ChartInterface[] = []
	function setListData(list:ListInterface){
		list.tasks.map(theTask => {
			const newObj:ChartInterface = {day: `${theTask.date.split('-')[1]}/${theTask.date.split('-')[2]}` , person: (
				(
					(list.tasks.filter(task => task.date === theTask.date)).filter(task => task.done === true).length
				)*100)/list.tasks.filter(task => task.date === theTask.date).length 
			}
			listData.some((obj)=> obj.day === newObj.day) ? '' : listData.push(newObj)
		})
	}
	for(let i=0;i<lists.length;i++){
		listStatus === `${lists[i].title}` && setListData(lists[i])
	}
	return (
		<>
			{ timeLineData && listData ?<>
				<h4 className=' text-xl font-semibold text-center mt-4'>Activity</h4>
				<div className='lg:flex lg:justify-around lg:mt-10'>
					<TimeChartSection chartData={timeLineData}  />
					<ListChartSection chartData={listData.sort((a,b) => calculateDays(a.day) - calculateDays(b.day))} />
				</div>
			</>
				: <TimeLineLoading /> }
		</>
	)
}

export default TimeLinePage