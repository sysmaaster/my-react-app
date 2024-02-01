// eslint-disable-next-line no-unused-vars
import { walletAPI } from "../api/API";
const UPDATE_INPUT_NEW_W_NAME = "UPDATE_INPUT_NEW_W_NAME";
const UPDATE_INPUT_NEW_W_BALANCE = "UPDATE_INPUT_NEW_W_BALANCE";
const UPDATE_INPUT_NEW_W_CCY = "UPDATE_INPUT_NEW_W_CCY";
const UPDATE_INPUT_NEW_W_TYPE = "UPDATE_INPUT_NEW_W_TYPE";
const UPDATE_INPUT_NEW_W_COMMENT = "UPDATE_INPUT_NEW_W_COMMENT";
const UPDATE_W_HOVER = "UPDATE_W_HOVER";

let initialState = {
  item: [{
      "W_NAME": "Золота Карта для Виплат",
      "COMMENT": "завжди мало",
      "SUMMA": 18987.00,
      "LIMIT":0.00,
      "CCY": "UAH",
      "TYPE": "CARD",
      "SORT_ID": 1,
      "HOVER":false,
  },
    {
      "W_NAME": "Карта Універсальна",
      "COMMENT": "завжди мало",
      "SUMMA": 55000.00,
      "LIMIT":55000.00,
      "CCY": "UAH",
      "TYPE": "CARD",
      "SORT_ID": 1,
      "HOVER":false,
    },
    {
      "W_NAME": "ЗаЄбра",
      "COMMENT": "в борг",
      "SUMMA": -6897.55,
      "LIMIT":7000.00,
      "CCY": "UAH",
      "TYPE": "CARD",
      "SORT_ID": 10,
      "HOVER":true,
    },
    {
      "W_NAME": "ОО Кредит Є-Всім",
      "COMMENT": "Горить!",
      "SUMMA": -50000.00,
      "LIMIT":55000.00,
      "CCY": "UAH",
      "TYPE":"CREDIT",
      "SORT_ID": 2,
      "HOVER":false,
  },
    {
      "W_NAME": "Розетка",
      "COMMENT": "В-Частину",
      "SUMMA": -30000.00,
      "LIMIT":55000.00,
      "CCY": "UAH",
      "TYPE":"CREDIT",
      "SORT_ID": 2,
      "HOVER":false,
    },
    {
      "W_NAME": " і-Банько",
      "COMMENT": "накопичувач",
      "SUMMA": 9900.12,
      "LIMIT":20000.01,
      "CCY": "UAH",
      "TYPE":"DEBIT",
      "SORT_ID": 2,
      "HOVER":false,
    },
    {
      "W_NAME": "Банка Долярів",
      "COMMENT": "під матрацом!",
      "SUMMA": 1300.00,
      "LIMIT":1500.00,
      "CCY": "USD",
      "TYPE":"DEBIT",
      "SORT_ID": 2,
      "HOVER":true,
    }
  ],
  input_w_name:"",
  input_w_type:"CARD",
  input_w_ccy:"UAH",
  input_w_comment:"",
  input_w_balance:0.00,
  input_w_limit:0.00,
  settings:{
    CCY: [
      {	name: "UAH", data: "UAH"},
      {	name: "USD",	data: "USD"},
    ],
    type:[
      {	name: "CARD",	data: "CARD"},
      {	name: "DEBIT",	data: "DEBIT"},
      {	name: "CREDIT",	data: "CREDIT"},
    ]}
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_NEW_W_NAME:
      return state;
    case UPDATE_INPUT_NEW_W_TYPE:
      return state;
    case UPDATE_INPUT_NEW_W_CCY:
      return state;
    case UPDATE_INPUT_NEW_W_COMMENT:
      return state;
    case UPDATE_INPUT_NEW_W_BALANCE:
      return state;
    case UPDATE_W_HOVER:
      return state;
      
      
      
      
    default:
      return state;
  }
};

export default WalletReducer;
