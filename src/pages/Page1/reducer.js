export const nameSpace = 'page1';

const initialState = {
  searchParams: {
    pageNo: 1,
    pageSize: 10
  },
  list: [],
  total: 0,
  column: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${nameSpace}/changeSearch`:
      console.log('changeSearch')
      return {
        ...state,
        searchParams: Object.assign(state.searchParams, action.payload),
      };
      
    case `${nameSpace}/setList`:
      const { column, list, total } = action.payload;
      return {
        ...state,
        list,
        column,
        total,
      };

    default:
      return initialState;
  }
}