import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
export type Theme = "theme1" | "theme2" | "theme3"

interface ThemeState {
  currentTheme: Theme
}

const initialState: ThemeState = {
  currentTheme: "theme1",
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.currentTheme = action.payload
      if (typeof window !== "undefined") {
        window.document.documentElement.setAttribute("data-theme", action.payload)
      }
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
