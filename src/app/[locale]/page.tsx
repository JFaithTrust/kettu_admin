"use client"

import Image from "next/image";
import LoginForm from "@/components/forms/login-form";
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from "next/navigation";

const languages = [
  { code: 'en', name: 'Eng', flag: '/eng.svg' },
  { code: 'uz', name: 'Uz', flag: '/uz.svg' },
  { code: 'ru', name: 'Ру', flag: '/ru.svg' }
];

export default function Home() {
  const locale = useLocale();
  const selected = languages.find(lang => lang.code === locale);
  const [selectedLang, setSelectedLang] = useState(selected || languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: any) => {
    setSelectedLang(lang);
    setIsOpen(false);
    router.push('/' + lang.code + pathname.slice(3));
  };

  return (
    <main className={"min-h-screen grid grid-cols-2 bg-[#F6F8FA]"}>
      <div className="flex flex-col items-center justify-center relative">
        <div className={"absolute right-4 top-4 px-3 py-2"}>
          <div style={{position: 'relative', display: 'inline-block'}}>
            <div onClick={toggleDropdown} className={"cursor-pointer flex items-center"}>
              <Image src={selectedLang.flag} alt={selectedLang.name} width={20} height={20}/>
              <span className={"font-medium ml-1 mr-1.5"}>{selectedLang.name}</span>
              {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </div>
            {isOpen && (
              <div className={"absolute bg-white rounded-lg py-2 gap-y-1 w-20"} style={{
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
        </div>
        <LoginForm/>
      </div>
      <img src={'/login-page-image.jpg'} className={"h-screen w-full"} alt={"Login Image"}/>
    </main>
  );
}
