import { ERROR, FILTER_USERS, GET_USERS, USER_DETAILS } from "../constants";

const initialState = {
  users: [],
  filteredUsers: [],
  userDetails: [],
  error: null,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        filteredUsers: action.payload,
        error: null,
        isLoading: false,
      };
    case FILTER_USERS:
      return {
        ...state,
        filteredUsers: state.users.filter((user) =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
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
        isLoading: false,
      };
    default:
      return state;
  }
};
export default reducer;
