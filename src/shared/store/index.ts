import { configureStore } from "@reduxjs/toolkit";
import variablesReducer from "./slices/variablesSlice";
import modelsReducer from "./slices/modelsSlice";
import requestsReducer from "./slices/requestsSlice";

export const store = configureStore({
  reducer: {
    variables: variablesReducer,
    models: modelsReducer,
    requests: requestsReducer,
  } /*,
  middleware: ((getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck:false
    }).concat()
  })*/,
});
