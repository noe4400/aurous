import axios from "axios";
import { ERROR, FILTER_USERS, GET_USERS, USER_DETAILS } from "../constants";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const filterUsers = (filter) => (dispatch) => {
  dispatch({
    type: FILTER_USERS,
    payload: filter,
  });
};

export const userDetails = (id) => (dispatch) => {
  dispatch({
    type: USER_DETAILS,
    payload: id,
  });
};
