import { GET_MATCH } from "../Action/Type";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MATCH:
      return action.payload;
    default:
      return state;
  }
}
