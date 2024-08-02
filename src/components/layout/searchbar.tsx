import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import React from "react";

export const Searchbar = () => {
  return (
    <div className={"relative"}>
      <Input
        placeholder="Search..."
        className="max-w-sm peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <LuSearch
        className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}