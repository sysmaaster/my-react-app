let initialState = {
  profile: {
    name: "Oleksandr A.",
    job: "Web Developer",
  },
  navList: [
    { title: "Profile", url: "/profile" },
    { title: "Chat", url: "/chat" },
    { title: "Settings", url: "/Settings" },
  ],
};
const HeaderReducer = (state = initialState, action) => {
  return state;
};
export default HeaderReducer;
