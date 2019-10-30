import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import {createStore, combineReducers, applyMiddleware} from "redux"
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  }
)
const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default store