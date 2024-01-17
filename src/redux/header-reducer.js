let initialState = {
  profile: {
    name: "Oleksandr A.",
    job: "Web Developer",
  },
  navList: [
    { title: "Overview", icons: "home", url: "/" },
    { title: "Wallet", icons: "account_balance_wallet", url: "/25" },
    { title: "History", icons: "schedule", url: "/sa" },
    { title: "Event", icons: "event", url: "/45" },
    { title: "Planer", icons: "savings ", url: "/545" },
    { title: "Setting", icons: "settings", url: "/455" },
  ],
};
const HeaderReducer = (state = initialState, action) => {
  return state;
};
export default HeaderReducer;
