import React, { useEffect } from "react";

export default function Profile() {
  const dropdown = () => {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
  };

  const openSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("hidden");
  };

  useEffect(() => {
    dropdown();
  });
  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <div className="bg-blue-600">
            <span
              className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
              onClick={openSidebar}
            >
              <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
              <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                  <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                  <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                    TailwindCSS
                  </h1>
                  <i
                    className="bi bi-x cursor-pointer ml-28 lg:hidden"
                    onClick={openSidebar}
                  ></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                <i className="bi bi-search text-sm"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Home
                </span>
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Bookmark
                </span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                onClick={dropdown}
              >
                <i className="bi bi-chat-left-text-fill"></i>
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">
                    Chatbox
                  </span>
                  <span className="text-sm rotate-180" id="arrow">
                    <i className="bi bi-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                id="submenu"
              >
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Social
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Personal
                </h1>
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Friends
                </h1>
              </div>
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur aliquam nunc sit amet efficitur. Ut pellentesque nulla at
          sollicitudin feugiat. Quisque facilisis ipsum diam, eget ultricies
          lectus vehicula ullamcorper. Sed ut faucibus nunc, id pellentesque
          odio. Curabitur feugiat, mi vitae blandit pharetra, dui est hendrerit
          mi, a condimentum ex sapien at sem. In laoreet leo placerat elit
          sodales, id dictum sem elementum. In aliquam urna in pellentesque
          viverra. Integer viverra ex a accumsan viverra. Aliquam ullamcorper eu
          felis ut consectetur. Cras commodo libero placerat, finibus magna vel,
          suscipit massa. Quisque et semper risus, quis mollis turpis. Integer a
          tellus turpis. Integer imperdiet placerat ante, sed aliquet nisi.
          Nulla non pharetra dolor. Donec semper lobortis quam, ut maximus quam
          rutrum at. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Praesent varius quam ut interdum dapibus. Donec a ipsum sem.
          Etiam libero enim, finibus ut viverra dignissim, sagittis non tellus.
          Aliquam gravida dapibus ultrices. Vivamus euismod neque ut egestas
          aliquet. Curabitur dapibus tincidunt arcu sed rutrum. Vestibulum sed
          pharetra velit. Mauris ut dui egestas, porta odio non, accumsan dui.
          In maximus iaculis dolor, vitae tincidunt lacus luctus eget. Proin sit
          amet justo at felis tristique cursus finibus at ante. Pellentesque
          vehicula ac magna non efficitur. Suspendisse vestibulum leo sed lectus
          tempor, in porttitor libero gravida. Fusce porttitor interdum mi,
          vitae consequat sem mattis eget. Integer in tristique nunc. Vestibulum
          finibus dolor non dui varius, ut rhoncus massa tristique. Duis
          bibendum justo lobortis dolor ornare, accumsan egestas turpis
          pharetra. Nullam at ultricies lectus, et mollis nunc. Sed non
          efficitur arcu. Sed leo lacus, pretium quis velit vel, mollis molestie
          orci. Aliquam eget ante ultricies, elementum turpis vel, egestas
          neque. Curabitur rhoncus, velit id mattis ultrices, risus massa
          rhoncus quam, in pulvinar dui urna ut purus. Aliquam vulputate libero
          vitae libero laoreet, ac porttitor leo volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nulla eget cursus erat, mattis
          maximus mauris. Quisque et molestie mi. Aenean non arcu id diam
          venenatis pulvinar. Maecenas nec mollis diam. Aenean consectetur
          luctus nunc nec vulputate. Donec volutpat lacinia euismod. Vestibulum
          ullamcorper, massa id sodales viverra, eros ante sollicitudin magna,
          at convallis justo elit non elit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Morbi
          iaculis ante elit, vel fermentum metus congue eu. Phasellus ut
          fermentum leo, ac interdum augue. Suspendisse justo ipsum, lacinia
          vitae diam fringilla, semper finibus justo. Duis tempor eget turpis id
          lacinia. Fusce posuere ligula commodo justo vulputate, sed maximus
          sapien ultrices. Fusce facilisis pretium diam, nec convallis diam
          interdum at. Aliquam placerat ante dictum porta volutpat. Maecenas
          quis diam faucibus, molestie neque at, tincidunt elit. In risus ipsum,
          euismod et auctor non, hendrerit sit amet sapien. In hac habitasse
          platea dictumst. Pellentesque porta suscipit lorem in fermentum.
          Mauris congue, nulla vel aliquam vulputate, lacus nibh tempus neque,
          et dictum justo tortor a erat. Praesent lorem mauris, scelerisque id
          euismod ut, hendrerit ut felis.
        </div>
      </div>
    </>
  );
}
