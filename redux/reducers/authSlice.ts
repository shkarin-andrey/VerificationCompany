import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

export interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state: AuthState) => {
      state.user = null
    },
  },
})

export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer
