import React from "react";

function MyUploads({
  project,
  client,
  users,
  status,
  actions,
  client_name,
  project_name,
  user_name,
  status_active,
  key
}) {
  return (
    <div key={key} className="mt-12   font-medium rounded-xl  bg-pink-400 text-gray-800   ">
      <div class="overflow-x-auto">
        <div class="  flex items-center justify-center bg-gray-100 rounded-xl  font-sans overflow-hidden">
          <div class="w-full lg:w-5/6">
            <div class="bg-white shadow-md rounded my-6">
              <table class="min-w-max  w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-left"> {project}</th>
                    <th class="py-3 px-6 text-left">{client}</th>
                    <th class="py-3 px-6 text-center"> {users}</th>
                    <th class="py-3 px-6 text-center"> {status}</th>
                    <th class="py-3 px-6 text-center"> {actions}</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">{project_name}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span>{client_name}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        {user_name}
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {status_active}
                      </span>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyUploads;
