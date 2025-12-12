// src/store/auth/thunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/api/axios"; // your axios instance
import type { authI } from "@/interfaces/auth.interface";

// Login thunk
export const loginUser = createAsyncThunk<authI, any>(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", data);
      // Ensure the token exists
      const accessToken = response.data.data.tokens?.accessToken;
      const refreshToken = response.data.data.tokens?.refreshToken;
      if (!accessToken) throw new Error("No access token returned");
      if (!refreshToken) throw new Error("No refresh token returned");

      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return response.data.user as authI;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Register thunk
export const registerUser = createAsyncThunk<authI, RegisterData>(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register", data);

      const token = response.data.tokens?.accessToken;
      if (!token) throw new Error("No access token returned");

      localStorage.setItem("token", token);

      return response.data.user as authI;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


export const logoutUser = createAsyncThunk<void>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    } catch (err: any) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      return rejectWithValue(err.response?.data || err.message);
    }
  })