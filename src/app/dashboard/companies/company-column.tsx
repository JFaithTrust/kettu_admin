import {ColumnDef} from "@tanstack/table-core";
import React from "react";
import {MdLockOutline} from "react-icons/md";
import {LuTrash2} from "react-icons/lu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CompanyType} from "@/types";


export const companyColumn: ColumnDef<CompanyType>[] = [
  {
    accessorKey: "company",
    header: () => <div>Company</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-2 items-center"}>
          <Avatar>
            <AvatarImage src={row.original.imageURL} />
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        <span>{row.original.name}</span>
      </div>
    )
  },
  {
    accessorKey: "tour packets",
    header: () => <div>Tour packets</div>,
    cell: ({ row }) => (
        <span className={"capitalize"}>{row.original.tourCount}</span>
    )
  },
  {
    accessorKey: "employees",
    header: () => <div>Employees</div>,
    cell: ({ row }) => (
        <span className={"capitalize"}>{row.original.employeeCount}</span>
    )
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-3 justify-center"}>
        <MdLockOutline className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]