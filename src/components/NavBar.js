import React from "react";
import { MdDashboard, MdCollectionsBookmark } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { HiSearch } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../assets/image/profile.jpg";
function NavBar() {
  const links = [
    ["Dashboard", "/dashboard"],
    ["Collection", "/collection"],
  ];
  return (
    <div>
      <div>
        {" "}
        <div className="flex justify-between space-x-1  px-6  h-auto py-1">
          <nav className="flex space-x-3 ">
            <a
              href={"url"}
              className="rounded-lg px-3 py-2 text-slate-300 font-medium hover:bg-slate-100 hover:text-slate-900 text-md"
            >
              <span>
                <MdDashboard className="inline mr-2" size={20} />
                Dashboard
              </span>
            </a>

            <a
              href={"url"}
              className="rounded-lg px-3 py-2 text-slate-300 font-medium hover:bg-slate-100 hover:text-slate-900 text-md"
            >
              <span>
                <MdCollectionsBookmark className="inline mr-2" size={20} />
                Collections
              </span>
            </a>
          </nav>

          <div className=" flex space-x-1">
            {" "}
            <a
              class="rounded-lg px-3 py-2 text-slate-300 font-medium  text-md"
              href=""
            >
              <BsPersonCircle className="inline" size={20} />
            </a>
            <a
              class="rounded-lg px-3 py-2 text-slate-300 font-medium  text-md"
              href=""
            >
              <HiSearch className="inline" size={20} />
            </a>
            <a
              class="rounded-lg px-3 py-2 text-slate-300 font-medium  text-md"
              href=""
            >
              <IoMdNotificationsOutline className="inline " size={20} />
            </a>
            <img
              src={profile}
              alt=""
              className="w-10 h-10 alight-middle border-none rounded-full md:h-auto md:rounded-full  "
              width="384"
              height="512"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
