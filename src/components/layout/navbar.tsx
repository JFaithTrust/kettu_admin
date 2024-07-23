'use client'

import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import {useState} from "react";
import {RiCopperCoinFill, RiMoonClearLine} from "react-icons/ri";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { useTheme} from "next-themes";
import {LuBellRing} from "react-icons/lu";
import {PiSun} from "react-icons/pi";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  const languages = [
    { code: 'en', name: 'Eng', flag: '/eng.svg' },
    { code: 'uz', name: 'Uz', flag: '/uz.svg' },
    { code: 'ru', name: 'Ру', flag: '/ru.svg' }
  ];
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: any) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className={"flex w-full justify-between py-5 px-6"}>
      <h1 className={"text-2xl font-bold"}>Companies</h1>
      <div className={"flex gap-x-3 items-center"}>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <div onClick={toggleDropdown} className={"cursor-pointer flex items-center"}>
            <Image src={selectedLang.flag} alt={selectedLang.name} width={20} height={20}/>
            <span className={"font-medium ml-1 mr-1.5"}>{selectedLang.name}</span>
            <IoIosArrowDown/>
          </div>
          {isOpen && (
            <div className={"absolute bg-white rounded-lg py-2 gap-y-1"} style={{
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
        <div className={"p-[10px]"}>
          <LuBellRing className={"w-4 h-4"}/>
        </div>
        <div className={"py-[10px] px-[14px] flex gap-x-1 items-center"}>
          <RiCopperCoinFill className={"w-4 h-4 text-amber-500"} />
          <span className={"text-sm font-medium text-gray-600"}>70,000</span>
        </div>
        <Avatar className={"w-10 h-10"}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar;