import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
  key: "blogs",
  storage,
};
console.log(blogReducer);

const rootReducer = combineReducers({
  blogReducer,
  blogReducer2: blogReducer,
});
const persistedBlogReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedBlogReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
