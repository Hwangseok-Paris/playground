import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Header from "@/components/Header";
// import Footer from "../components/Footer";
// import NavigationBar from "@/components/NavigationBar";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-[100vh]">
        {/* <div className="flex flex-col h-[100vh]"> */}
        <Header />
        <div className="flex flex-1 overflow-y-hidden">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
