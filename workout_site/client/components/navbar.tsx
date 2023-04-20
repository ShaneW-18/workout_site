import React from "react";
import {
  FaHome,
  FaCompass,
  FaCalendarAlt,
  FaUserAlt,
  FaCog,
  FaComments,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();
  const page = router.route.substring(1).split('/')[0];

  return (
    <div className="w-[78px] md:w-64 bg-gray-800 text-white bg-dg-200 h-[100vh] py-0 md:py-4 relative">
        <div className="text-[30px] font-bold items-center justify-center hidden md:flex">
          Gym <span className="text-primary">Social</span>
        </div>
      <div className="flex flex-col mt-6 gap-3 md:gap-2 [&>*]:mx-4">
        <Link href="/dashboard">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'dashboard' && 'bg-primary-h'}`}>
            <FaHome /> <span className="hidden md:inline-block">Dashboard</span>
          </div>
        </Link>
        <Link href="/explore">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'explore' && 'bg-primary-h'}`}>
            <FaCompass/> <span className="hidden md:inline-block">Explore</span>
          </div>
        </Link>
        <Link href="/schedules">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'schedules' && 'bg-primary-h'}`}>
            <FaCalendarAlt/> <span className="hidden md:inline-block">My Schedules</span>
          </div>
        </Link>
        <Link href="/messages">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'messages' && 'bg-primary-h'}`}>
            <FaComments /> <span className="hidden md:inline-block">Messages</span>
          </div>
        </Link>
        <Link href="/user">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'user' && 'bg-primary-h'}`}>
            <FaUserAlt /> <span className="hidden md:inline-block">Profile</span>
          </div>
        </Link>
        <Link href="/settings">
          <div className={`px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md ${page === 'settings' && 'bg-primary-h'}`}>
            <FaCog /> <span className="hidden md:inline-block">Settings</span>
          </div>
        </Link>
      </div>
      <div className="px-4 py-4 absolute bottom-0 w-full">
        <Link href="/logout" className="w-full">
          <div className="px-4 py-3 md:py-2 hover:bg-primary-h flex items-center --bg font-medium gap-4 rounded-md w-full">
            <FiLogOut /> <span className="hidden md:inline-block">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
