import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://30.68.92.60:1242/",
});
instanse.defaults.headers.common["Authorization"] = "Basic YWRtaW46cXdlcnR5";



export const authAPI = {
  checkToken() {
    return instanse.get(`auth/me`).then((response) => response.data);
  },
};

export const walletAPI = {
  getAll() {
    return instanse.get(`wallet`).then((response) => response);
  },
  getAllToSort(sort) {
    return instanse.get(`wallet/${sort}`).then((response) => response);
  },
  getByID(id) {
    return instanse.get(`wallet`, { id }).then((response) => response);
  },
  create(body) {
    return instanse.post(`wallet`, { body }).then((response) => response);
  },
  update(body) {
    return instanse.put(`wallet`, { body }).then((response) => response);
  },
  delete(id) {
    return instanse.delete(`wallet`, { id }).then((response) => response);
  },
};
