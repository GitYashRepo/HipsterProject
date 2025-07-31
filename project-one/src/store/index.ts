import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import themeReducer from "./themeSlice"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer)

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
