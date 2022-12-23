import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { Error, Layout, Loader } from "~/components";
import { GlobalStyle, theme } from "~/theme";

const Example: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/components/Example")
);

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: (
            <Suspense fallback={<Loader />}>
              <Example />
            </Suspense>
          ),
          index: true,
        },
        {
          element: <Error />,
          path: "error",
        },
        {
          element: <Navigate to="error" replace />,
          path: "*",
        },
      ],
    },
  ]);

  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyle />
      <RouterProvider {...{ router }} />
    </ThemeProvider>
  );
};

export { App };
