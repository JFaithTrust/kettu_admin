import {UserType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {LuTrash2} from "react-icons/lu";
import {MdLockOutline} from "react-icons/md";

export const userColumn: ColumnDef<UserType>[] = [
  {
    accessorKey: "full name",
    header: () => <div>Full name</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.fullName}</span>
    )
  },
  {
    accessorKey: "Phone number/Email",
    header: () => <div>Phone number/Email</div>,
    cell: ({ row }) => (
      <div className={"flex flex-col gap-y-0.5"}>
        <span className={"text-sm font-medium"}>{row.original.phoneNumber}</span>
        <span className={"text-xs text-[#57606A]"}>{row.original.email}</span>
      </div>
    )
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-3 justify-center"}>
        <MdLockOutline className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]