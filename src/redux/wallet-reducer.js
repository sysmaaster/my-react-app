import { walletAPI } from "../api/API";

let initialState = {
  wallet: [],
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default WalletReducer;
