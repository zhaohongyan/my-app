const initialState = {
  str: 'a',
  list: [1, 2, 3]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'addTodo':
      const v = action.payload;
      return {
        ...state,
        list: [...state.list, v],
      };
      break;

    default:
      return initialState;
      break;
  }
}