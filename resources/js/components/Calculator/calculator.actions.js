import axios from "../../common/axios";

export const calculateMortgage = (params) => {
  return dispatch => {
    return axios.post('/mortgage', params);
  }
}
