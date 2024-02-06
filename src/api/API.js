import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic YWRtaW46cXdlcnR5"
  },
  baseURL: "http://30.68.92.60:1242/",
});

export const authAPI = {
  checkToken() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const walletAPI = {
  W_getAll() {
    return instance.get(`wallet`).then((response) => response);
  },
  getAllToSort(sort) {
    return instance.get(`wallet/${sort}`).then((response) => response);
  },
  getByID(id) {
    return instance.get(`wallet`, { id }).then((response) => response);
  },
  W_delete(id:string) {
    return instance.delete(`wallet`, { id }).then((response) => response);
  },
  W_create(
    W_NAME: string,
    W_COMMENT: string,
    SUMMA: number,
    LIMIT: number,
    CCY: string,
    TYPE: string,
    HOVER:boolean
  ) {
    return instance.post(`wallet`, { W_NAME, W_COMMENT, SUMMA, LIMIT, CCY, TYPE, HOVER } )
      .then((response) => response);
  },
  W_update(
    _id: string,
    W_NAME: string,
    W_COMMENT: string,
    SUMMA: number,
    LIMIT: number,
    CCY: string,
    TYPE: string,
    HOVER:boolean
  ) {
    return instance.put(`wallet`, {_id, W_NAME, W_COMMENT, SUMMA, LIMIT, CCY, TYPE, HOVER } )
      .then((response) => response);
  },
  
};
