import request from "../../common/request";
import { GET_LIST } from "../../common/api";

export const nameSpace = 'page1';
const initPageConfig = {
  pageNo: 1,
  pageSize: 10,
};

const initialState = {
  searchParams: {
    ...initPageConfig,
  },
  list: [],
  total: 0,
  column: {},
  detail: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${nameSpace}/changeSearch`:
      console.log("changeSearch");
      return {
        ...state,
        searchParams: Object.assign(
          state.searchParams,
          action.payload,
          initPageConfig
        ),
      };

    case `${nameSpace}/setList`:
      const { column, list, total } = action.payload;
      return {
        ...state,
        list,
        column,
        total,
      };

    case `${nameSpace}/resetList`:
      return initialState;

    case `${nameSpace}/setLoad`:
      return { ...state, loading: true };

    case `${nameSpace}/hideLoad`:
      return { ...state, loading: false };

    case `${nameSpace}/setData`:
      return { ...state, ...action.payload };

    default:
      return initialState;
  }
}