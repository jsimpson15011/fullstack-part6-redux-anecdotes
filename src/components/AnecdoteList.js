import React from 'react'
import {voteOn} from "../reducers/anecdoteReducer"

const AnecdoteList = ({store}) => {

  const anecdotes = store.getState()
  anecdotes.sort((a, b) => {
    return (b.votes - a.votes)
  })

  const vote = (id) => {
    store.dispatch(voteOn(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList