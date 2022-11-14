import React from "react";
import Cards from "../Cards";

function Section() {
  return (
    <div className=" px-4 mt-12 flex-wrap">
      <div className=" px-6 space-y-6 flex-wrap justify-center items-center ">
        <div className="text Bold font-bold text-3xl">Available Properties</div>
        <div className="text-xl space-y-6 leading-loose  flex-wrap justify-center items-center">
          <p>
            Get the best of properties at your disposal. See available properties/lands for sale. For easy access, contact the seller. All our sellers are verified sellers.
            See the prices of recently sold homes in your neighborhood and home
            values in your community.
          </p>
        </div>

        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Section;
