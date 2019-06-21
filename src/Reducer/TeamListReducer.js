import { GET_TEAM } from "../Action/Type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TEAM:
      return action.payload;
    default:
      return state;
  }
}
