import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "map",
  initialState: {
    show: "flex",
  },
  reducers: {
    olympic: (state) => {
      if (state.show === "flex") {
        state.show = "none";
      } else {
        state.show = "flex";
      }
    },
  },
});

export const { olympic } = mapSlice.actions;

export default mapSlice.reducer;

// export default nameSlice.reducer
