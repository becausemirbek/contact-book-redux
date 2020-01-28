export const createTask = (state, text) => {
  const newState = [...state]
  newState.push({ text, status: false })

  return {
    type: 'CREATE_TASK',
    payload: newState
  }
}

export const changeStatus = (state, index) => {
  const newState = [...state]
  newState[index] = {
    ...newState[index],
    status: !newState[index].status
  }
  return {
    type: 'CHANGE_STATUS',
    payload: newState
  }
}

export const deleteTask = (state, index) => {
  const newState = [...state]
  newState.splice(index, 1)

  return {
    type: 'DELETE_TASK',
    payload: newState
  }
}