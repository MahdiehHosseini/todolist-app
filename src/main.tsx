//import pakages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import components
import App from './App'
import './index.css'
//import store
import { store } from './store/main'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.Fragment>
		<Provider store={store} >
			<App />
		</Provider>
	</React.Fragment>
)
