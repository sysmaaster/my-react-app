import NavBarReducer from "./navBar-reducer";
import ChatReducer from "./chat-reducer";
import ProfileReducer from "./profile-reducer";

let store = {
  _state: {
    navBarPage: {
      profile: {
        name: "Oleksandr A.",
        job: "Web Developer",
      },
      navList: [
        { title: "Profile", url: "/profile" },
        { title: "Chat", url: "/chat" },
        { title: "Settings", url: "/Settings" },
      ],
    },
  },
  _callSubscriber() {
    console.log("Tree updated!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.navBarPage = NavBarReducer(this._state.navBarPage, action);
    this._state.chatPage = ChatReducer(this._state.chatPage, action);
    this._state.profile = ProfileReducer(this._state.profile, action);

    this._callSubscriber(this._state);
  },
};

// window.store = store;
export default store;
