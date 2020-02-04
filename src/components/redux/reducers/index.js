const initialState = {
  data: [
    {
      name: "Mirba",
      lastName: "Mir",
      phone: "+412412412"
    }
  ],
  currentIndex: -1
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        data: action.payload
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        data: action.payload
      };
    case "SHOW_CONTACT":
      return {
        ...state,
        currentIndex: action.payload
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        currentIndex: action.payload
      };
    case "EDIT_SAVE_CONTACT":
      return {
        ...state,
        data: action.payload
      };

    default: return state;
  }
}

export default mainReducer;
