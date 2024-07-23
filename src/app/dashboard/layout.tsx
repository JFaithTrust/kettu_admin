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
      <div className="flex-grow p-4 md:overflow-y-auto">
        <Navbar />
        {children}</div>
    </div>
  );
}