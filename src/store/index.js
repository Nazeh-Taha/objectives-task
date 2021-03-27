import { configureStore } from "@reduxjs/toolkit";
import auth from "./authReducer.js";

export default configureStore({
  reducer: {
    auth,
  },
});
