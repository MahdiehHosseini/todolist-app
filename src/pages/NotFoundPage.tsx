//import pakages
import { useSelector } from 'react-redux'
//import types & interfaces
import { RootState } from '../store/main'

function SettingPage() {
	const appTheme = useSelector((state:RootState)=> state.handleTheme)
	return (
		<div className=" flex flex-col justify-center items-center h-5/6">
			<h4 className={`text-9xl font-medium text-center mt-4 border-b border-[${appTheme}] mx-14 pb-5`}>404</h4>
			<p className=" text-lg mt-10 mx-24 text-center">{'page you\'re looking for can\'t be found'}</p>
		</div>
	)
}

export default SettingPage