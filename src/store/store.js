import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import resumeReducer from './resumeSlice'; // Adjust the path as necessary
import authReducer from './authSlice'; // Adjust the path as necessary
import { persistStore } from 'redux-persist';

// Create storage
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Persistent configurations for both reducers
const resumePersistConfig = {
  key: "resume",
  storage: storage,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState"], // Only persist authState
};

// Persisted reducers
const persistedResumeReducer = persistReducer(resumePersistConfig, resumeReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Root reducer
const rootReducer = combineReducers({
  resume: persistedResumeReducer,
  auth: persistedAuthReducer,
});

// Store configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create persistor
export const persistor = persistStore(store);
