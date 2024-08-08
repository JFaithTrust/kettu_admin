'use client'

import Image from "next/image";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useState} from "react";
import {RiCopperCoinFill, RiMoonClearLine} from "react-icons/ri";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { useTheme} from "next-themes";
import {LuBellRing} from "react-icons/lu";
import {PiSun} from "react-icons/pi";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {LogOut} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";
import {FaRegEnvelopeOpen} from "react-icons/fa";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const languages = [
    { code: 'en', name: 'Eng', flag: '/eng.svg' },
    { code: 'uz', name: 'Uz', flag: '/uz.svg' },
    { code: 'ru', name: 'Ру', flag: '/ru.svg' }
  ];
  const locale = useLocale();
  const selected = languages.find(lang => lang.code === locale);
  const [selectedLang, setSelectedLang] = useState(selected || languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: any) => {
    setSelectedLang(lang);
    setIsOpen(false);
    router.push('/' + lang.code + pathname.slice(3));
  };

  const notifications = [
    {
      id: 1,
      title: 'New message',
      description: 'On job / effects proceduralize ask your food paradigm.',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'New message',
      description: 'On job / effects proceduralize ask your food paradigm.',
      time: '3 hours ago',
    },
    {
      id: 3,
      title: 'New message',
      description: 'On job / effects proceduralize ask your food paradigm.',
      time: '4 hours ago',
    },
    {
      id: 4,
      title: 'New message',
      description: 'On job / effects proceduralize ask your food paradigm.',
      time: '5 hours ago',
    },
    {
      id: 5,
      title: 'New message',
      description: 'On job / effects proceduralize ask your food paradigm.',
      time: '6 hours ago',
    }
  ]

  return (
    <div className={"flex w-full justify-between py-5 px-6 border-b-[1px] border-b-secondary dark:border-dark-secondary"}>
      <h1 className={"text-2xl font-bold capitalize"}>
        {pathname.slice(14).split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
      </h1>
      <div className={"flex gap-x-3 items-center"}>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <div onClick={toggleDropdown} className={"cursor-pointer flex items-center"}>
            <Image src={selectedLang.flag} alt={selectedLang.name} width={20} height={20}/>
            <span className={"font-medium ml-1 mr-1.5"}>{selectedLang.name}</span>
            {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
          </div>
          {isOpen && (
            <div className={"absolute bg-white rounded-lg py-2 gap-y-1 w-20 dark:bg-[#1F242F]"} style={{
              top: '100%',
              left: 0,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              zIndex: 1000
            }}>
              {languages.map((lang) => (
                <div key={lang.code} onClick={() => selectLanguage(lang)}
                     className={"flex items-center px-3 py-2 cursor-pointer"}>
                  <Image src={lang.flag} alt={lang.name} width={20} height={20}/>
                  <span className={"ml-1"}>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={"p-[10px] cursor-pointer"}>
          {theme === 'dark' ? <RiMoonClearLine onClick={() => setTheme("light")} className={"w-4 h-4"}/> : <PiSun onClick={() => setTheme("dark")} className={"w-4 h-4"}/>}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className={"cursor-pointer p-[10px]"}>
              <LuBellRing className={"w-4 h-4"}/>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-[312px]">
            <div className={"flex justify-between p-4 items-center"}>
              <div className={"font-semibold"}>Notifications</div>
              <div className={"text-sm flex gap-x-1 text-primary items-center hover:underline cursor-pointer"}>
                <FaRegEnvelopeOpen />
                <span>Mark all as read</span>
              </div>
            </div>
            {notifications.map((n) => (
              <div key={n.id}>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={"flex flex-col gap-y-1 p-4 text-[#6E7781] text-sm items-start"}>
                  <span className={"font-semibold"}>{n.title}</span>
                  <span>{n.description}</span>
                  <span>{n.time}</span>
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/*<div className={"p-[10px]"}>*/}
        {/*  <LuBellRing className={"w-4 h-4"}/>*/}
        {/*</div>*/}
        <div className={"py-[10px] px-[14px] flex gap-x-1 items-center"}>
          <RiCopperCoinFill className={"w-4 h-4 text-amber-500"} />
          <span className={"text-sm font-medium text-gray-600"}>70,000</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className={"w-10 h-10 cursor-pointer"}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit">
            <DropdownMenuLabel className={"p-3 flex gap-x-2"}>
              <Avatar className={"w-10 h-10 cursor-pointer"}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className={"flex flex-col text-sm leading-5"}>
                <span className={"font-semibold"}>Rodrigo Goes</span>
                <span className={"font-normal"}>+998 99 332 3929</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={"flex gap-x-2 text-sm text-red-600 focus:text-red-600"}>
              <LogOut />
              <span className={"font-medium"}>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Navbar;