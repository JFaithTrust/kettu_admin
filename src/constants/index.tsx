import {TbBrandBooking, TbBrandTabler, TbReportMoney, TbUserBolt} from "react-icons/tb";
import {ArrowLeft, SettingsIcon} from "lucide-react";
import Image from "next/image";
import {PiBuilding} from "react-icons/pi";
import {GiCommercialAirplane} from "react-icons/gi";
import {VscGitPullRequestGoToChanges} from "react-icons/vsc";
import {HiMiniUsers, HiOutlineUsers} from "react-icons/hi2";
import {LuSettings, LuUsers} from "react-icons/lu";
import {RiCustomerService2Line} from "react-icons/ri";
import {GrMapLocation} from "react-icons/gr";
import {BsHouses} from "react-icons/bs";
import {MdOutlinePostAdd} from "react-icons/md";

export const links = [
  {
    label: "Dashboard",
    href: "#",
    icon: (
      <TbBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "#",
    icon: (
      <TbUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Settings",
    href: "#",
    icon: (
      <SettingsIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <ArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

export const sidebarLinks = [
  {
    label: "Companies",
    href: "/dashboard/companies",
    icon: (
      <PiBuilding className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Report",
    href: "/dashboard/report",
    icon: (
      <TbReportMoney className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Tour Packs",
    href: "/dashboard/tour-packs",
    icon: (
      <GiCommercialAirplane className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Bookings",
    href: "/dashboard/bookings",
    icon: (
      <TbBrandBooking className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
    badge: 10,
  },
  {
    label: "Requests",
    href: "/dashboard/requests",
    icon: (
      <VscGitPullRequestGoToChanges className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
    badge: 10,
  },
  {
    label: "Employees",
    href: "/dashboard/employees",
    icon: (
      <HiOutlineUsers className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Services",
    href: "/dashboard/services",
    icon: (
      <RiCustomerService2Line className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Locations",
    href: "/dashboard/locations",
    icon: (
      <GrMapLocation className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: (
      <LuUsers className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Houses",
    href: "/dashboard/houses",
    icon: (
      <BsHouses className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Posts",
    href: "/dashboard/posts",
    icon: (
      <MdOutlinePostAdd className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <LuSettings className={"text-gray-800 dark:text-white w-6 h-6"} />
    ),
  }
]