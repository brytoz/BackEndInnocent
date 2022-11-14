import React, { useState } from "react";
import axios from "axios";
import useAuth from "../contexts/useAuth";
import Info from "../components/Info";

function PostLand() {
  const { fullname, token, phoneNum } = useAuth();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [image, setImage] = useState([]);
  const [postedBy, setName] = useState(fullname);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(phoneNum);
  const [tokeen, setTokeen] = useState(token);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [community, setCommunity] = useState("");
  const [plots, setPlots] = useState("");

  const [status, setStatus] = useState("");
  const [info, setInfo] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("state", state);
    formData.append("plots", plots);
    formData.append("tokeen", tokeen);
    formData.append("phone", phone);
    formData.append("postedBy", postedBy);
    formData.append("city", city);
    formData.append("community", community);
    formData.append("message", message);

    try {
      axios
        .post(`${process.env.REACT_APP_DB}/lands`, formData)
        .then((result) => {
          if (result.status === 200) {
            setInfo(true);
            setTimeout(() => {
            window.location.reload(true);
            }, 10000);
          } else {
            setError(true);
            setStatus(result.data);
          }
        });
    } catch (err) {
      console.log("errror uploading");
    }

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };

  return (
    <div className="w-full relative">
      {info && <Info />}
      <div className=" mt-12 text-4xl font-medium rounded-xl p-4  w-full  bg-gray-900/75 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white ">
        Post Land for Sale.
        <h2 className="text-base font-normal pt-4">Fill in all input</h2>
        <div className="pt-6 ">
          <form
            class="w-full  text-base text-white"
            encType="multipart/form-data"
            onSubmit={onSubmit}
            method="POST"
          >
            {error && (
              <span className="text-center text-xl text-red-600 bold">
                {status}
              </span>
            )} 

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Token pass ID
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-blackborder   rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-black focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  disabled
                  value={tokeen}
                  placeholder="ID given to you by the Admin"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Contact Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  value={phone}
                  disabled
                  type="text"
                  placeholder="090*******"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  How many Plots
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-white border text-black   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  onChange={(e) => {
                    setPlots(e.target.value);
                  }}
                  type="text"
                  placeholder="Plots"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  FullName
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  disabled
                  value={postedBy}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div class="mb-8">
              <input
                type="file"
                name="file"
                id="file"
                class="sr-only"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <label
                for="file"
                class="relative flex items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-3 text-center cursor-pointer"
              >
                <div>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Upload Image
                  </span>
                  <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-white">
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Description about the land. Make it short."
                ></textarea>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  >
                    <option value="">Select State</option>
                    <option value="Imo">Imo state</option>
                    <option value="Lagos">Lagos state</option>
                    <option value="Rivers">Rivers State</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  placeholder="Owerri"
                />
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Community
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  onChange={(e) => {
                    setCommunity(e.target.value);
                  }}
                  type="text"
                  placeholder="Uzinaumu"
                />
              </div>
            </div>

            <div className="pt-5 w-full">
              <button
                type="submit"
                className="py-3 text-center w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white rounded"
              >
                POST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostLand;
