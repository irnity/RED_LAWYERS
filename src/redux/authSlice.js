import { createSlice } from "@reduxjs/toolkit"

import { auth } from "../services/firebase"
import { signOut } from "firebase/auth"

const initialAuthState = {
  isAdmin: false,
  isLogedIn: false,
  first_name: "",
  last_name: "",
  certificateNumber: "",
  uid: "",
}

const KEYS = [
  process.env.ADMIN_KEY,
  process.env.ADMIN_KEY2,
  process.env.ADMIN_KEY3,
  process.env.ADMIN_KEY4,
  process.env.ADMIN_KEY5,
]

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    isLogedInCheck(state, actions) {
      if (actions.payload) {
        if (KEYS.includes(actions.payload.uid)) {
          state.isAdmin = true
          state.isLogedIn = true
          state.first_name = "Admin"
          state.last_name = "Admin"
          state.uid = ""
          console.log(state)
        } else {
          state.isLogedIn = true
          state.uid = actions.payload.uid
          state.first_name = actions.payload.first_name
          state.last_name = actions.payload.last_name
          state.certificateNumber = actions.payload.certificate
          console.log(state)
        }
      } else {
        state.isLogedIn = false
        state.uid = ""
        console.log(state)
      }
    },
    chageUID: (state, actions) => {
      state.uid = actions.payload
      console.log(state)
    },
    changeCertificate: (state, actions) => {
      state.certificateNumber = actions.payload
      console.log(state)
    },
    signOut: (state) => {
      state.isAdmin = false
      state.isLogedIn = false
      state.uid = ""
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
