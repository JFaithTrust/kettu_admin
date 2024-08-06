'use client'

import {Badge} from "@/components/ui/badge";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowUp,
  MdOutlinePostAdd
} from "react-icons/md";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import Link from "next/link";
import {motion} from "framer-motion";
import {useState} from "react";
import {LuSettings, LuUsers} from "react-icons/lu";
import {useLocale} from "next-intl";
import {PiBuilding} from "react-icons/pi";
import {TbBrandBooking, TbReportMoney} from "react-icons/tb";
import {GiCommercialAirplane} from "react-icons/gi";
import {VscGitPullRequestGoToChanges} from "react-icons/vsc";
import {HiOutlineUsers} from "react-icons/hi2";
import {RiAdminLine, RiCustomerService2Line} from "react-icons/ri";
import {GrMapLocation} from "react-icons/gr";
import {BsHouses, BsTranslate} from "react-icons/bs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true)
  const [dropOpen, setDropOpen] = useState(false)
  const locale = useLocale()


  const sidebarLinks = [
    {
      label: "Companies",
      href: `/${locale}/dashboard/companies`,
      icon: (
        <PiBuilding className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Report",
      href: `/${locale}/dashboard/report`,
      icon: (
        <TbReportMoney className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Tour Packs",
      href: `/${locale}/dashboard/tour-packs`,
      icon: (
        <GiCommercialAirplane className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Bookings",
      href: `/${locale}/dashboard/bookings`,
      icon: (
        <TbBrandBooking className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
      badge: 10,
    },
    {
      label: "Requests",
      href: `/${locale}/dashboard/requests`,
      icon: (
        <VscGitPullRequestGoToChanges className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
      badge: 10,
    },
    {
      label: "Employees",
      href: `/${locale}/dashboard/employees`,
      icon: (
        <HiOutlineUsers className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Services",
      href: `/${locale}/dashboard/services`,
      icon: (
        <RiCustomerService2Line className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Locations",
      href: `/${locale}/dashboard/locations`,
      icon: (
        <GrMapLocation className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Users",
      href: `/${locale}/dashboard/users`,
      icon: (
        <LuUsers className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Houses",
      href: `/${locale}/dashboard/houses`,
      icon: (
        <BsHouses className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Posts",
      href: `/${locale}/dashboard/posts`,
      icon: (
        <MdOutlinePostAdd className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
  ]

  const settingLinks = [
    {
      label: "Roles",
      href: `/${locale}/dashboard/settings/roles`,
      icon: (
        <RiAdminLine className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    },
    {
      label: "Translations",
      href: `/${locale}/dashboard/settings/translations`,
      icon: (
        <BsTranslate className={"text-gray-800 dark:text-white w-6 h-6"}/>
      ),
    }
  ]

  return (
    <motion.div
      animate={{
        width: open ? "288px" : "80px",
      }}
      className={clsx("flex flex-col justify-between border-r-[1px] border-solid border-secondary dark:border-dark-secondary pb-4", {
        "px-3": open,
      })}>
      <div className={"flex flex-col space-y-4"}>
        <div className={"p-4 border-b-[1px] border-solid border-secondary dark:border-dark-secondary"}>
          <motion.h1 className={"text-[28px] font-bold p-1 transition duration-150"}>
            {open ? "Kettu" : "K"}
            <span className={"text-primary"}>
              {open ? "Admin" : "A"}
            </span></motion.h1>
        </div>
        <div className={"flex flex-col space-y-1"}>
          {sidebarLinks.map((link) => (
            <Link href={link.href} key={link.label}
                  className={clsx("flex items-center justify-between py-2 px-3 rounded-md hover:bg-[#F6F8FA] dark:hover:bg-[#1F242F] cursor-pointer", {
                    "bg-[#F6F8FA] border-solid border-r-[6px] border-primary dark:bg-[#1F242F]": pathname === link.href,
                    "mx-3": !open,
                  })}>
              <div className={"flex gap-x-3 items-center"}>
                <div className={"relative"}>
                  {link.icon}
                  {link.badge && (
                    <Badge
                      className={clsx(
                        {"rounded-full py-0 px-1 absolute -right-2 -top-0.5 opacity-100": !open,
                          "hidden opacity-0": open
                        }
                      )}
                      variant={"destructive"}>{link.badge}</Badge>
                  )}
                </div>
                <motion.span
                  animate={{
                    display: open ? "inline-block" : "none",
                    opacity: open ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className={"whitespace-pre"}
                >{link.label}</motion.span>
              </div>

              <motion.div
                animate={
                  {
                    display: open ? "inline-block" : "none",
                    opacity: open ? 1 : 0,
                  }
                }
              >
                {link.badge && (
                  <Badge className={"rounded-md"} variant={"destructive"}>{link.badge}</Badge>
                )}
              </motion.div>
            </Link>
          ))}
          <div
            onClick={() => setDropOpen(!dropOpen)}
                className={clsx("flex justify-between items-center py-2 px-3 rounded-md hover:bg-[#F6F8FA] dark:hover:bg-[#1F242F] cursor-pointer", {
                  "bg-[#F6F8FA] border-solid border-r-[6px] border-primary dark:bg-[#1F242F]": dropOpen,
                  "mx-3": !open,
                })}>
            <div className={"flex gap-x-3 items-center"}>
              <LuSettings className={"text-gray-800 dark:text-white w-6 h-6"}/>
              <motion.span
                animate={{
                  display: open ? "inline-block" : "none",
                  opacity: open ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={"whitespace-pre"}
              >Settings</motion.span>
            </div>
            <motion.div
              animate={
                {
                  display: open ? "inline-block" : "none",
                  opacity: open ? 1 : 0,
                }
              }
            >
              {dropOpen ? <MdOutlineKeyboardArrowUp className={"w-5 h-5 text-black dark:text-white"}/> : <MdOutlineKeyboardArrowDown className={"w-5 h-5 text-black dark:text-white"}/>}
            </motion.div>
          </div>
          {dropOpen && settingLinks.map((link) => (
            <Link href={link.href} key={link.label}
                  className={clsx("flex justify-between py-2 px-3 rounded-md hover:bg-[#F6F8FA] dark:hover:bg-[#292D32] cursor-pointer", {
                    "bg-[#F6F8FA] border-solid border-r-[6px] border-primary dark:bg-[#292D32]": pathname === link.href,
                    "mx-3": !open,
                  })}>
              <div className={"flex gap-x-3 items-center"}>
                {link.icon}
                <motion.span
                  animate={{
                    display: open ? "inline-block" : "none",
                    opacity: open ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className={"whitespace-pre"}
                >{link.label}</motion.span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={clsx("flex gap-x-3 items-center py-2 px-3 cursor-pointer", {
        "justify-center": !open,
      })} onClick={() => setOpen(!open)}>
        {open ? <MdOutlineKeyboardArrowLeft className={"w-5 h-5 text-black dark:text-white"}/> : <MdOutlineKeyboardArrowRight className={"w-5 h-5 text-black dark:text-white"}/>}
        <motion.span
          animate={{
            display: open ? "inline-block" : "none",
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={"whitespace-pre"}
        >Minimize</motion.span>
      </div>
    </motion.div>
  )
}

export default Sidebar