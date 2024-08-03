import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { Table } from "@tanstack/table-core";
import { AccessorKeyColumnDefBase } from "@tanstack/table-core";

interface SearchBarProps<D, V> {
  table: Table<D>;
}

export function Searchbar<D, V>(props: SearchBarProps<D, V>) {
  const [searchText, setSearchText] = useState<string>("")

  useEffect(() => {
    // console.log(props.table.getRowModel().rows[1].getValue("2"))
    // console.log(props.column.id)
    console.log(props.table.getColumn("company")?.getFilterValue())
  }, [searchText]);

  return (
    <div className={"relative"}>
      <Input
        placeholder="Filter companies..."
        value={(props.table.getColumn("company")?.getFilterValue() as string) ?? ""}
        onChange={(event) => props.table.getColumn("company")?.setFilterValue(event.target.value)
        }
        className="max-w-sm peer block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
      />
      <LuSearch
        className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}