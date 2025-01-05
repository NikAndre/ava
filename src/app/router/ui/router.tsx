import {
  LINK_ADMIN,
  LINK_HOME,
  LINK_METRICS,
  LINK_MODELS
} from "@/app/router/constants";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const VariablesPage = lazy(() => import("@/pages/VariablesPage"));
const ModelsPage = lazy(() => import("@/pages/ModelsPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));

export const Router = () => {
  return (
    <Routes>
      <Route exact path={LINK_HOME} element={<ProfilePage />} />
      <Route path={LINK_METRICS} element={<VariablesPage />} />
      <Route path={LINK_MODELS} element={<ModelsPage />} />
      <Route path={LINK_ADMIN} element={<AdminPage />} />
    </Routes>
  );
};
