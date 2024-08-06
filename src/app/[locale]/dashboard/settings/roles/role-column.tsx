import {RoleType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {FaPencil} from "react-icons/fa6";
import {LuPencil, LuTrash2} from "react-icons/lu";
import React from "react";
import {Badge} from "@/components/ui/badge";

export const roleColumn: ColumnDef<RoleType>[] = [
  {
    accessorKey: "role",
    header: () => <div>Role name</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.role}</span>
    )
  },
  {
    accessorKey: "activities",
    header: () => <div>Activities</div>,
    cell: ({ row }) => (
      <div className={"flex mr-2 gap-x-2"}>
        {row.original.activities.map((a, index) => (
          <Badge key={index}
                 className={"rounded-xl py-0.5 border-[1px] border-solid border-[#EAEEF2] bg-[#F6F8FA] hover:bg-[#F6F8FA] text-[#6E7781] dark:bg-transparent hover:bg-transparent dark:border-dark-secondary dark:text-white"}>{a}</Badge>
        ))}
        <div>
          <span
            className={"text-[#6E7781] bg-[#F6F8FA] py-0.5 w-9 flex items-center justify-center rounded-xl border-[1px] border-solid border-[#EAEEF2] dark:bg-transparent hover:bg-transparent dark:border-dark-secondary dark:text-white"}>+7</span>
        </div>
      </div>
    )
  },
  {
    accessorKey: "users",
    header: () => <div>Users</div>,
    cell: ({row}) => (
      <div className={"mt-3 flex -space-x-1.5 overflow-hidden"}>
        {row.original.imagesURL.map((image, index) => (
          <img key={index} src={image} alt={"tour pack"}
               className={"inline-block h-9 w-9 rounded-full border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary"}/>
        ))}
        <div>
          <span
            className={"text-[#6E7781] bg-[#F6F8FA] h-9 w-9 flex items-center justify-center rounded-full border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary dark:bg-[#1F242F] dark:text-white"}>+8</span>
        </div>
      </div>
    )
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({row}) => (
      <div className={"flex gap-x-2 justify-center items-center"}>
        <LuPencil className={"w-5 h-5 cursor-pointer"}/>
        <LuTrash2 className={"w-5 h-5 cursor-pointer"}/>
      </div>
    )
  }
]
