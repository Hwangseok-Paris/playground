import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainView from "@/views/MainView";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <MainView /> }],
  },
];

export default routes;
