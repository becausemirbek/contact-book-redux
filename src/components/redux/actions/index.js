export const createContact = (state, name, lastName, phone) => {
  const newState = [...state];
  newState.push({ name, lastName, phone, statusChange: false, statusEdit: false });

  return {
    type: "CREATE_CONTACT",
    payload: newState
  };
};

export const deleteContact = (state, index) => {
  const newState = [...state];

  newState.splice(index, 1);

  return {
    type: "DELETE_CONTACT",
    payload: newState
  };
};

export const showContact = index => {
  return {
    type: "SHOW_CONTACT",
    payload: index
  };
};

export const editContact = index => {
  return { 
    type: "EDIT_CONTACT",
    payload: index
  }
}

export const editSaveContact = (data, obj, index) => {
  const newData = [...data];
  newData.splice(index, 1, obj)

  return {
    type: "EDIT_SAVE_CONTACT",
    payload: newData  
  }
} 