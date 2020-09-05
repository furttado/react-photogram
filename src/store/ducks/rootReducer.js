import { combineReducers } from "redux";
import mainProfileReducer from "./mainProfile/reducer";
import friendProfileReducer from "./friendProfile/reducer";
import authReducer from "./auth/reducer";
import activeRouteReducer from "./styles/activeRoute";
import allPostsReducer from "./posts/allPosts/reducer";
import addPostReducer from "./posts/addPost/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  addPostStatus: addPostReducer,
  activeRoute: activeRouteReducer,
  auth: authReducer,
  mainProfile: mainProfileReducer,
  friendProfile: friendProfileReducer,
  user: userReducer,
});

export default rootReducer;
