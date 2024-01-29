let initialState = {
  profile: {
    name: "Oleksandr A.",
    job: "Web Developer",
  },
  navList: [
    { title: "Overview", icons: "home", url: "/" },
    { title: "Wallet", icons: "wallet", url: "/25" },
    { title: "History", icons: "schedule", url: "/sa" },
    { title: "Event", icons: "event", url: "/45" },
    { title: "Planer", icons: "savings ", url: "/545" },
    { title: "Setting", icons: "settings", url: "/455" },
  ],
};
const NavBarReducer = (state = initialState, action) => {
  switch ( action.type ) {
    default:
      return state;
  }
};
export default NavBarReducer;
