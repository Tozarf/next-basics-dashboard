import Image from "next/image";
import React from "react";
import { GiIonicColumn } from "react-icons/gi";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subtitle: "View",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subtitle: "Keep track of stuff",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <GiIonicColumn className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">.Board</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2"
              alt="Avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Fausto Zaruma</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item, idx) => (
          <SidebarMenuItem
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
