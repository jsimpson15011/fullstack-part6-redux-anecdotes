import React from 'react'
import {voteOn} from "../reducers/anecdoteReducer"
import {createNotification, clearNotification} from "../reducers/notificationReducer"
import {connect} from "react-redux"

const AnecdoteList = (props) => {
  const vote = (id, content) => {
    props.voteOn(id)
    props.createNotification(content)
    setTimeout(() => {
      props.clearNotification()
    }, 5000)
  }

  return (
    <div>
      {props.anecdotesToShow.map(anecdote =>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  const anecdotes = state.anecdotes
  anecdotes.sort((a, b) => {
    return (b.votes - a.votes)
  })
  const filteredAnecdotes = anecdotes.filter((anecdote)=>{
    return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
  })

  return {
    anecdotesToShow: filteredAnecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createNotification,
  clearNotification,
  voteOn
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList