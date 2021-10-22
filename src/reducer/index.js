import { ERROR, FILTER_USERS, GET_USERS, USER_DETAILS } from "../constants";

const initialState = {
  users: [],
  filteredUsers: [],
  userDetails: null,
  error: null,
  IsLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
        error: null,
        IsLoading: false,
      };
    case FILTER_USERS:
      return {
        ...state,
        filteredUsers: state.users
          .toLowerCase()
          .includes(action.payload.toLowerCase()),
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: state.users.filter((user) => user.id === action.payload),
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        IsLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
