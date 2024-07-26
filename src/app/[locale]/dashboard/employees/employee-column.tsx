import {EmployeeType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {LuTrash2} from "react-icons/lu";
import React from "react";
import {FaPencil} from "react-icons/fa6";

export const employeeColumn: ColumnDef<EmployeeType>[] = [
  {
    accessorKey: "Full Name",
    header: () => <div>Full Name</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.fullName}</span>
    )
  },
  {
    accessorKey: "Occupation",
    header: () => <div>Occupation</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.occupation}</span>
    )
  },
  {
    accessorKey: "Working Since",
    header: () => <div>Working Since</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.workingSince}</span>
    )
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-3 justify-center"}>
        <FaPencil className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]