import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import DefaultLayout from "./layout/default-layout";

import Home from "./pages/home";
import Donate from "./pages/donate";
import Donated from "./pages/donated";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donated" element={<Donated />} />
    </Route>
  )
);
