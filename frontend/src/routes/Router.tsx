import type { ElementType, ReactNode } from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { PageLoader } from "./components/PageLoader";
import { paths } from "./paths";
import type { Routes } from "./types";

const HomePage = lazy(() => import("pages/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFountPage"));

const getRouteElement = (Component: ElementType): ReactNode => (
  <Suspense fallback={<PageLoader />}>
    <PageLoader />
  </Suspense>
);

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(HomePage) },
  { path: paths.NOT_FOUND, element: getRouteElement(NotFoundPage) },
];

export default createBrowserRouter(routes);
