import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoeSlice from "./slices/shoeSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import bannerSlice from "./slices/bannerSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  shoes: shoeSlice,
  cart: cartSlice,
  filter: filterSlice,
  banner: bannerSlice,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter", "banner"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
