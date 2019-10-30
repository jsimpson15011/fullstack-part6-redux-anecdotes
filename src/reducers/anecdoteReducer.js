import anecdoteService from "../services/anecdoteService"

export const voteOn = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.voteFor(id)
    dispatch({
      type: 'VOTE',
      data: { updatedAnecdote }
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_NOTES':
      return action.data
    case 'VOTE':
      const updatedAnecdote = action.data.updatedAnecdote
      return state.map(anecdote =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      )
    default:
      return state
  }
}

export default anecdoteReducer