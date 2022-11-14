import React from "react";
import MyUploads from "../components/MyUploads";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";


function Uploads() {
  return (
    <div className="w-full ">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <TopNav />
          <MyUploads actions='Action' client='City' client_name='Casmir Paul' project='Community' project_name='Liones' status='Plots' status_active='Active' user_name='Brayan' users='State'  />

        </div>
      </div>
    </div>
  );
}

export default Uploads;
