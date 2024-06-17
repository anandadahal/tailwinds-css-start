// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import Cookies from 'js-cookie';

// const initialState = {
//   msg: '',
//   user: '',
//   loading: false,
//   error: '',
// };

// export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   return await response.json();
// });

// export const signInUser = createAsyncThunk('signInUser', async (body) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   return await response.json();
// });

// const authSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = '';
//       Cookies.remove('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signUpUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(signUpUser.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.msg = 'User registered successfully.';
//       })
//       .addCase(signUpUser.rejected, (state) => {
//         state.loading = false;
//         state.error = 'Failed to register.';
//       })
//       .addCase(signInUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(signInUser.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.user = payload.username;
//         Cookies.set('token', payload.token); 
//       })
//       .addCase(signInUser.rejected, (state) => {
//         state.loading = false;
//         state.error = 'Failed to login.';
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;



// for testing login

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockUserData } from '../mockUserData'; // Import the mock user data
import Cookies from 'js-cookie';

const initialState = {
  msg: '',
  user: '',
  loading: false,
  error: '',
};

export const signUpUser = createAsyncThunk('signUpUser', async (body) => {
  // Simulate a network request with mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: body.username, token: 'mockToken' });
    }, 500);
  });
});

export const signInUser = createAsyncThunk('signInUser', async (body) => {
  // Simulate a network request with mock data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (body.username === mockUserData.username && body.password === mockUserData.password) {
        resolve({ username: body.username, token: 'mockToken' });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 500);
  });
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = '';
      Cookies.remove('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.msg = 'User registered successfully.';
      })
      .addCase(signUpUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to register.';
      })
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.username;
        Cookies.set('token', payload.token); // Assuming the response has a token
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
