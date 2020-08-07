const initialState = {
  str: 'a',
  list: [1, 2, 3]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "addTodo":
      const v = action.payload;
      return {
        ...state,
        list: [...state.list, v],
      };

    default:
      return initialState;
  }
}

export default reducer;