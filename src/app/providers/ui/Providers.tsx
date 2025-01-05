import { Router } from "@/app/router";
//import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "@/shared/styles/index.css";
import { Provider } from "react-redux";
import {store} from "@/shared/store/"

export const Providers = () => {
  return (
          <BrowserRouter>
            <Provider store={store}>
              <Router />
            </Provider>
          </BrowserRouter>
  );
};
