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

    // case `${nameSpace}/getList`:
    //   let responseData = {};
    //   request(GET_LIST, "POST", state.searchParams).then((res) => {
    //     const { data, success } = res;
    //     if (success && data) {
    //       responseData = data;
    //     }
    //   });
    //   const { column, list, total } = responseData;
    //   return {
    //     ...state,
    //     list,
    //     column,
    //     total,
    //   };

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

    default:
      return initialState;
  }
}