import React, {useEffect} from 'react'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import {initializeAnecdotes} from "./reducers/anecdoteReducer"
import {connect} from "react-redux"

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  }, [props])
  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification/>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  )
}

export default connect(null, {initializeAnecdotes})(App)