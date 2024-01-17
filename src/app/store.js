import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoapi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { googleNewsApi } from "../services/googleNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [googleNewsApi.reducerPath]: googleNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware).concat(googleNewsApi.middleware),
})