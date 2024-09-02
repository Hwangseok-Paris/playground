import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainView from "@/views/MainView";
import SearchSelectBox from "@/views/SearchSelectBox";
import NotFound from "@/views/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainView /> },
      { path: "/pg1", element: <SearchSelectBox /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
