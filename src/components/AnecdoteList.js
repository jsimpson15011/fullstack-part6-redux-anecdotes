import React from 'react'
import {voteOn} from "../reducers/anecdoteReducer"
import {createNotification, clearNotification} from "../reducers/notificationReducer"

const AnecdoteList = ({store}) => {

  const anecdotes = store.getState().anecdotes
  anecdotes.sort((a, b) => {
    return (b.votes - a.votes)
  })

  const vote = (id, content) => {
    store.dispatch(voteOn(id))
    store.dispatch(createNotification(content))
    setTimeout(()=>{store.dispatch(clearNotification())},5000)
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList