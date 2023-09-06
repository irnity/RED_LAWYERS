import { createSlice } from "@reduxjs/toolkit"

import { auth } from "../services/firebase"

const initialAuthState = {
  isAdmin: false,
  isLogedIn: false,
  first_name: "",
  last_name: "",
  certificateNumber: [],
  uid: "",
}

const KEYS = [
  process.env.ADMIN_KEY,
  process.env.ADMIN_KEY2,
  process.env.ADMIN_KEY3,
  process.env.ADMIN_KEY4,
]

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    isLogedInCheck(state, actions) {
      console.log(KEYS)
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
    changeName: (state, actions) => {
      state.first_name = actions.payload.first_name
      state.last_name = actions.payload.last_name
    },
    signOut: (state) => {
      state.isLogedIn = false
      state.isAdmin = false
      state.first_name = ""
      state.last_name = ""
      state.certificateNumber = ""
      state.uid = ""
      console.log(state)
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
