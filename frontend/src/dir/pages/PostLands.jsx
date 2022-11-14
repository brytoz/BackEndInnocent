import React, { useState } from "react";
import PostLand from "../components/PostLand";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

function PostLands() {

  return (
    <div className="w-full ">
      <SideNav />
      <div className="w-full flex flex-wrap md:flex-nowrap">
        <div className="hidden md:block w-60 h-full "></div>
        <div className="flex-1 flex-wrap px-4">
          <TopNav />
          
          <PostLand  />
        </div>
      </div>
    </div>
  );
}

export default PostLands;
