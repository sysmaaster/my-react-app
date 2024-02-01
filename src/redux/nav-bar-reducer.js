let initialState = {
  profile: {
    name: "Oleksandr A.",
    job: "Web Developer",
  },
  navList: [
    {title: "Рахунки", icons: "wallet", url: "/25"},
    {title: "Категорії", icons: "category", url: "/45"},
    {title: "Операції", icons: "schedule", url: "/sa"},
    {title: "Статистика", icons: "monitoring ", url: "/545"},
  ],
};
const NavBarReducer = (state = initialState, action) => {
  switch ( action.type ) {
    default:
      return state;
  }
};
export default NavBarReducer;
