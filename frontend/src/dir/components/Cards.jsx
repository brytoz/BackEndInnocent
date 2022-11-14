import React from "react";
import user from "../assets/user.png";
import { motion } from "framer-motion";
import MainCard from "./section/MainCard";
import axios from "axios";
import { useQuery } from "react-query";

function Cards() {
  axios.defaults.withCredentials = true;
  const { data, isError, isLoading } = useQuery(
    ["homes"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/getAllLands`)
  );

  if(data) {
    console.log(data.data[0])
  }
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 space-y-12  md:space-y-0">
      {/* <!--Card 1--> */}

      {data &&
        data.data.map((datas) => (
          <MainCard
          key={datas.id}
            imgs={`http://localhost:5000/${datas.image}`}
            topic={datas.community}
            text={datas.message}
            tag1={`Posted by: ${datas.postedBy}`}
            tag2={`${datas.plots} plots`}
            tag3={`#${datas.state}`}
          />
        ))}
 
    </div>
  );
}

export default Cards;
