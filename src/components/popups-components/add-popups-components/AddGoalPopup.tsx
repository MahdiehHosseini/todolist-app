//import pakages
import { useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {DatePicker } from '@react-spectrum/datepicker'
import {Provider} from '@react-spectrum/provider'
import {theme} from '@react-spectrum/theme-default'
import { View } from '@adobe/react-spectrum'
import {parseDate} from '@internationalized/date'
//import types & interfaces
import { AppDispatch, RootState } from '../../../store/main'
//import store
import { toggleState } from '../../../store/slices/toggleSlice'
import { addGoal } from '../../../store/slices/handleGoalsDataSlice'

function AddGoalPopup () {
	const title = useRef(null)
	const [autoReach , setAutoReach] = useState<boolean>(false)
	const them = useSelector((state:RootState)=> state.handleThem)
	const [date , setDate] = useState(parseDate(`${new Date().getFullYear()}-${`${new Date().getMonth()+1}`.padStart(2, '0')}-${`${new Date().getDate()}`.padStart(2, '0')}`))
	const [term , setTerm] = useState<string>('short')
	const dispatch = useDispatch<AppDispatch>()
	return (
		<div className=" h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl pb-12">
			<i onClick={()=>dispatch(toggleState('none'))} className='material-icons cursor-pointer text-2xl float-right mt-5 mr-6'>close</i>
			<h5 className={`text-center mt-16 mb-6 text-xl text-[${them}] font-semibold`}>add goal</h5>
			<form onSubmit={(event)=>{
                                dispatch(
                                 addGoal({ 
                                  id : Math.random() , 
                                  title : title.current.value , 
                                  term : term , 
                                  autoReach : autoReach , 
                                  reachDate : `${date}` , 
                                  tasks : []
                                  })
                                 )
                                alert('your goal has been seted')
                                event.preventDefault()
}
                                className='mx-9 flex flex-col relative h-full'>
				<input className={`border-b border-[${them}] py-3 focus:outline-none placeholder:text-lg placeholder:font-medium`} ref={title} type='text' placeholder='title' />
				<div className={`border-b border-[${them}] p-3 my-5 flex flex-col text-center`}>
					<label className='font-medium text-lg mb-1'>reach date :</label>
					<Provider theme={theme} colorScheme="light" zIndex={100} position={'sticky'}>
						<View
							backgroundColor="static-white"
						>
							<DatePicker
								aria-label='date'
								isQuiet 
								value={date}
								onChange={setDate} />
						</View>
					</Provider>
				</div>
				<span className={`border-b border-[${them}] p-3`}>
					<p onClick={()=> term === 'short' ? setTerm('long') : setTerm('short')} className='cursor-pointer text-lg font-medium text-center'>{`${term} term`}</p>
				</span>
				<span className={`border-b border-[${them}] p-3 my-5 flex justify-center items-center`}>
					<p className='font-medium text-lg'>auto reach</p>
					<i onClick={()=>setAutoReach(!autoReach)} className={`${autoReach ? `text-[${them}]` : 'text-neutral-300'} cursor-pointer text-xl-without-lineheigh material-icons ml-2`}>file_download_done</i>
				</span>
				<span className=' flex justify-center'>
					<button type='submit' className={`font-medium text-lg text-white bg-[${them}]  rounded-full w-14 h-14 absolute bottom-auto mt-3`}>add</button>
				</span>
			</form>
		</div>
	)
}

export default AddGoalPopup 
