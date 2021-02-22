import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import request from "common/request";
import { GET_DETAIL } from "common/api";

import { nameSpace } from "../reducer";

function Detail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const store = useSelector((state) => state.Page1Reducers);
  const { detail } = store;

  const getDetail = useCallback(() => {
    return request(GET_DETAIL, "GET", { id }).then(
      (res) => {
        const { data, success } = res;
        if (success && data) {
          dispatch({
            type: `${nameSpace}/setData`,
            payload: {
              detail: data,
            },
          });
        }
      }
    );
  }, [dispatch, id]);

  useEffect(() => {
    getDetail();
  }, [getDetail])

  return (
    <div>
      <h3>id: {detail.id}</h3>
      <h3>name: {detail.name}</h3>
      <h3>age: {detail.age}</h3>
      <h3>sex: {detail.sex}</h3>
    </div>
  )
}

export default Detail;