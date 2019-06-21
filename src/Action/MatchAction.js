import axios from "axios";
import { GET_ERRORS, GET_MATCH, GET_TEAM } from "./Type";

// Get Team List
export const teamList = () => dispatch => {
  axios
    .get("./team.json")
    .then(res => {
      dispatch({
        type: GET_TEAM,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response && err.response.data ? err.response.data : ""
      })
    );
};

// Get Match List
export const matchList = () => dispatch => {
  axios
    .get("./match.json")
    .then(res => {
      dispatch({
        type: GET_MATCH,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response && err.response.data ? err.response.data : ""
      })
    );
};
