import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  loading: false,
  error: "",
};

export const signUpUser = createAsyncThunk("signUpUser", async (body) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
});

export const signInUser = createAsyncThunk("signInUser", async (body) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await response.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.msg = "User registered successfully.";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to register.";
      })
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.username;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to login.";
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
