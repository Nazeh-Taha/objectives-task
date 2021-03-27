import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "auth",
  initialState: {
    userData: {
      first_name: "Admin",
      position: "System Admin",
    },
  },
});

export default userSlice.reducer;
