import { configureStore } from "@reduxjs/toolkit";

import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

import portfolioReducer from "@/entities/portfolio/model/portfolio.slice";

import { portfolioMiddleware } from "@/shared/lib/storage/localStorageMiddleware";

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(portfolioMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
