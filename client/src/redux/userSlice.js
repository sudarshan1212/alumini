// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   user: null,
//   isAuthenticated: false,
// };
// export const bookingSlice = createSlice({
//   name: "booking",
//   initialState,
//   reducers: {
//     addUsers: (state, action) => {
//       state.user = action.payload;
//     },
//     removeUsers: (state) => {
//       state.user = null;
//     },
//     login: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });
// export const { addUsers, removeUsers } = bookingSlice.actions;
// export default bookingSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.user = action.payload;
    },
    removeUsers: (state) => {
      state.user = null;
    },
  },
});

export const { addUsers, removeUsers } = bookingSlice.actions;
export default bookingSlice.reducer;
