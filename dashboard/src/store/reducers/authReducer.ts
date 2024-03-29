/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { IAuthAdmin } from "../../interfaces/auth";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info: IAuthAdmin, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("users/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data?.data.token);
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: {},
  },
  reducers: {
    messageClear: (state) => {
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(
      admin_login.fulfilled,
      (state, { payload }: { payload: any }) => {
        state.loader = false;
        state.successMessage = payload.message;
      }
    );

    builder.addCase(
      admin_login.rejected,
      (state, { payload }: { payload: any }) => {
        state.loader = false;
        state.errorMessage = payload.message;
      }
    );
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
