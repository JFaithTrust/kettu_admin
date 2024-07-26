'use client'

import {useState} from "react";
import {cn} from "@/lib/utils";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function Layout({children}: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        "flex h-screen md:overflow-hidden",
      )}
    >
      <Sidebar />
      <div className="flex-grow md:overflow-y-auto">
        <Navbar />
        <div className={"py-4 pl-4 pr-6"}>
          {children}
        </div>
      </div>
    </div>
  );
}