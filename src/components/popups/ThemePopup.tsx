//import pakages
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
//import context
import { ThemeContext, ToggleContext } from '../../store/context'
//import types & interfaces
import { AppDispatch } from '../../store/main'

function ThemPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const { appTheme, setAppTheme } = useContext(ThemeContext)
	const { state, setState } = useContext(ToggleContext)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>setState('none')} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>select theme</Typography>
			</ThemeProvider>
			<span className=" mx-6 my-20 block">
				<div className='w-full flex justify-around items-center mb-8'>
					<span onClick={()=>dispatch(setAppTheme('#4ADE80'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#4ADE80]'></span>
					<span onClick={()=>dispatch(setAppTheme('#000'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#000]'></span>
					<span onClick={()=>dispatch(setAppTheme('#FACC15'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#FACC15]'></span>
				</div>
				<div className='w-full flex justify-around items-center'>
					<span onClick={()=>dispatch(setAppTheme('#22D3EE'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#22D3EE]'></span>
					<span onClick={()=>dispatch(setAppTheme('#C084FC'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#C084FC]'></span>
					<span onClick={()=>dispatch(setAppTheme('#F472B6'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#F472B6]'></span>
				</div>
			</span>
		</div>
	)
}

export default ThemPopup 