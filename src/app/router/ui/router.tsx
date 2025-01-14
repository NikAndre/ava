import {
  LINK_ADMIN,
  LINK_HOME,
  LINK_METRICS,
  LINK_MODELS, LINK_PROFILE, LINK_REQUEST,
} from "@/app/router/constants";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const VariablesPage = lazy(() => import("@/pages/VariablesPage"));
const ModelsPage = lazy(() => import("@/pages/ModelsPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const RequestPage = lazy(() => import("@/pages/RequestPage"));

export const Router = () => {
  return (
    <Routes>
      <Route exact path={LINK_HOME} element={<HomePage />} />
      <Route path={LINK_METRICS} element={<VariablesPage />} />
      <Route path={LINK_MODELS} element={<ModelsPage />} />
      <Route path={LINK_ADMIN} element={<AdminPage />} />
      <Route path={LINK_REQUEST} element={<RequestPage />} />
      <Route path={LINK_PROFILE} element={<ProfilePage />} />
    </Routes>
  );
};
