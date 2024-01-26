import { walletAPI } from "../api/API";
const UPDATE_INPUT_NEW_W_NAME = "UPDATE_INPUT_NEW_W_NAME";
const UPDATE_INPUT_NEW_W_BALANCE = "UPDATE_INPUT_NEW_W_BALANCE";
const UPDATE_INPUT_NEW_W_CCY = "UPDATE_INPUT_NEW_W_CCY";


let initialState = {
  wallets: [
    {
    "W_NAME": "Золота Карта для Виплат",
    "SUMMA": 1897,
    "CCY": "UAH",
    "TYPE": "DEBIT",
    "SORT_ID": 1,
  },
    {
    "W_NAME": "ОО Кредит Є-Всім",
    "SUMMA": 30000,
    "CCY": "UAH",
    "TYPE":"CREDIT",
    "SORT_ID": 2,
  }
  ],
  input_w_name:"",
  input_w_balance:"",
  input_w_ccy:"UAN",
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_NEW_W_NAME:
      return state;
    case UPDATE_INPUT_NEW_W_BALANCE:
      return state;
    case UPDATE_INPUT_NEW_W_CCY:
      return state;
      
      
      
      
    default:
      return state;
  }
};

export default WalletReducer;
