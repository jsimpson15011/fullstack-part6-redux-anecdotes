export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

export const createNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: {
      content: content
    }
  }
}

const notificationReducer = (state = "" , action) => {
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