import { configureStore,combineReducers,getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore , persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import toggleReducer from './slices/toggleSlice'
import handleTasksDataReducer from './slices/handleTasksDataSlice'
import handleHabitsDataReducer from './slices/handleHabitsDataSlice'
import handleGoalsDataReducer from './slices/handleGoalsDataSlice'
import handleListsDataReducer from './slices/handleListsDataSlice'
import dateReducer from './slices/dateSlice'
import timeLineReducer from './slices/timeLineData'
import handleThemeReducer from './slices/handleTheme'
const rootReducer = combineReducers({
	toggle: toggleReducer ,
	handleTasksData: handleTasksDataReducer ,
	handleHabitsData: handleHabitsDataReducer ,
	handleGoalsData: handleGoalsDataReducer ,
	handleListsData: handleListsDataReducer ,
	date: dateReducer ,
	timeLine: timeLineReducer ,
	handleTheme: handleThemeReducer
})
const persistConfig = {
	key: 'root',
	storage,
	whiteList : []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch