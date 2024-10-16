import { configureStore,Tuple,applyMiddleware } from "@reduxjs/toolkit";
import {useDispatch} from "react-redux"
import { thunk } from "redux-thunk";
import logger from "redux-logger"
import {rootReducer} from "../reducers"
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { apiSlice } from "./apiSlice";
// import authReducer from "./authSlice"
const persistConfig ={
  key:'root',
  storage,
  whitelist:['DUser']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer:persistedReducer,
   middleware: () => new Tuple(thunk,logger)

  ,
  devTools:true,

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 