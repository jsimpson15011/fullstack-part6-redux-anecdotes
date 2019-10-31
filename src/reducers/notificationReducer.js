export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export const setNotification = (content) => {
  return dispatch => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: {
        content: content
      }
    })

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION'
      })
    }, 5000)
  }
}

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      return `you voted for ${action.data.content}`

    case "CLEAR_NOTIFICATION":
      return ""

    default:
      return state
  }
}

export default notificationReducer