import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainView from "@/views/MainView";
import SearchSelectBox from "@/views/SearchSelectBox";
import NotFound from "@/views/NotFound";
import ChatView from "@/views/ChatView";
import RadioButtonView from "@/views/RadioButtonView";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainView /> },
      { path: "/pg1", element: <SearchSelectBox /> },
      { path: "*", element: <NotFound /> },
      { path: "/chat", element: <ChatView /> },
      { path: "/radio", element: <RadioButtonView /> },
    ],
  },
];

export default routes;
