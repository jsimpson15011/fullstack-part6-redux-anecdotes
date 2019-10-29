import React, {useEffect} from 'react'
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Notification from "./components/Notification"
import anecdoteService from "./services/anecdoteService"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import { connect } from "react-redux"

const App = (props) => {
  useEffect(() => {
    anecdoteService.getAll()
      .then(anecdotes => props.initializeAnecdotes(anecdotes))
  },[props])
  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(null, {initializeAnecdotes})(App)