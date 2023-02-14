//import pakages
import { useDispatch, useSelector } from 'react-redux'
// import mui components
import { createTheme, ThemeProvider  } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
//import types & interfaces
import { AppDispatch, RootState } from '../../store/main'
//import store
import { toggleState } from '../../store/slices/toggleSlice'
import { toggleTheme } from '../../store/slices/handleTheme'

function ThemPopup () {
	const dispatch = useDispatch<AppDispatch>()
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	const theme = createTheme({
		palette: {
			error: {
				main: appTheme
			}
		}
	})
	return (
		<div className=" h-auto bg-white w-5/6 lg:w-2/6 md:w-3/6 rounded-3xl">
			<CloseIcon className='cursor-pointer float-right mt-5 mr-6' fontSize='medium' onClick={()=>dispatch(toggleState('none'))} />
			<ThemeProvider theme={theme}>
				<Typography color='error' marginBottom='1rem' align='center' marginTop='4rem' fontSize='large' fontWeight='500' variant='h6'>select themee</Typography>
			</ThemeProvider>
			<span className=" mx-6 my-20 block">
				<div className='w-full flex justify-around items-center mb-8'>
					<span onClick={()=>dispatch(toggleTheme('#4ADE80'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#4ADE80]'></span>
					<span onClick={()=>dispatch(toggleTheme('#000'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#000]'></span>
					<span onClick={()=>dispatch(toggleTheme('#FACC15'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#FACC15]'></span>
				</div>
				<div className='w-full flex justify-around items-center'>
					<span onClick={()=>dispatch(toggleTheme('#22D3EE'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#22D3EE]'></span>
					<span onClick={()=>dispatch(toggleTheme('#C084FC'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#C084FC]'></span>
					<span onClick={()=>dispatch(toggleTheme('#F472B6'))} className=' rounded-full w-16 h-16 cursor-pointer bg-[#F472B6]'></span>
				</div>
			</span>
		</div>
	)
}

export default ThemPopup 