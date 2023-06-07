import { createAsyncThunk } from '@reduxjs/toolkit';
import { Toast } from 'toastify-react-native';
import {
  authStateChanged,
  getCurrentUserInfo,
  loginDB,
  registerDB,
  logOut,
} from '../../utils/auth';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { login, email, password, image } = user;
      const result = await registerDB({
        email: email,
        password: password,
        displayName: login,
        image,
      });
      return result;
    } catch (error) {
      console.dir({ error });
      Toast.error(`${error.code}`);
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (user, { rejectWithValue }) => {
    try {
      const { email, password } = user;
      const result = await loginDB({ email: email, password: password });
      return result;
    } catch (error) {
      console.dir({ error });
      Toast.error(`${error.code}`);
      return rejectWithValue(error);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      await logOut();
      return;
    } catch (error) {
      console.dir({ error });
      Toast.error(`${error.code}`);
      return rejectWithValue(error);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getCurrentUserInfo();
      console.log('current', result);
      return result;
    } catch (error) {
      console.dir({ error });
      Toast.error(`${error.code}`);
      return rejectWithValue(error);
    }
  }
);

export const currentState = createAsyncThunk(
  'auth/currentState',
  async (_, { rejectWithValue }) => {
    try {
      const result = await authStateChanged();
      return result;
    } catch (error) {
      console.dir({ error });
      Toast.error(`${error.code}`);
      return rejectWithValue(error);
    }
  }
);
