import { configureStore } from "@reduxjs/toolkit";
import variablesReducer from "./slices/variablesSlice";
import modelsReducer from "./slices/modelsSlice";

export const store = configureStore({
  reducer: {
    variables: variablesReducer,
    models: modelsReducer,
  } /*,
  middleware: ((getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck:false
    }).concat()
  })*/,
});
