import React from "react";
import PostLand from "../components/PostLand";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Welcome from "../components/Welcome";

function Dashboard() {
  return (
    <div className="w-full">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full bg-red-400"></div>
        <div className="flex-1 flex-wrap px-4">
          <TopNav />
          <Welcome />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
