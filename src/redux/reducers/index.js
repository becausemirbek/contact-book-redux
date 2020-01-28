const initialState = {
  data: [
    {
      text: "NewTask1",
      status: false
    }
  ]
}

function mainReducer(state = initialState, action) {
  
  switch(action.type) {
    case 'CREATE_TASK': return {
      ...state,
      data: action.payload
    }
    case 'CHANGE_STATUS': return {
      ...state,
      data: action.payload
    }
    case 'DELETE_TASK': return {
      ...state,
      data: action.payload
    }
    default: return state
  }
}

export default mainReducer