import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogReducer from "./blogReducer";

const persistConfig: any = {
  key: "root",
  storage,
};
console.log(blogReducer);

const persistedBlogReducer = persistReducer(persistConfig, blogReducer);

const store = configureStore({
  reducer: {
    blogReducer: persistedBlogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
