import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./home";
import React from "react";
import { LoginRoute } from "./login";
import { RegisterRoute } from "./register";
import { ContactRoute } from "./contact-me";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },{
    path: "/sign-in",
    element : <LoginRoute />
  },
  {
    path: "/sign-up",
    element : <RegisterRoute />
  },
  {
    path: "/contact",
    element : <ContactRoute />
  },
]);

export default router;
