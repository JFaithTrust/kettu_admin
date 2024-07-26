import {ColumnDef} from "@tanstack/table-core";
import {RequestType} from "@/types";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {IoCheckmarkOutline, IoClose} from "react-icons/io5";

export const requestColumn: ColumnDef<RequestType>[] = [
  {
    accessorKey: "Company",
    header: () => <div>Company</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-2 items-center text-sm font-medium"}>
        <Avatar>
          <AvatarImage src={row.original.imageURL} />
          <AvatarFallback>IM</AvatarFallback>
        </Avatar>
        <span>{row.original.companyName}</span>
      </div>
    )
  },{
    accessorKey: "type",
    header: () => <div>Type</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.type}</span>
    )
  },
  {
    accessorKey: "address",
    header: () => <div>Address</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.address}</span>
    )
  },
  {
    accessorKey: "Registered At",
    header: () => <div>Registered At</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.registeredAt}</span>
    )
  },
  {
    id: "confirmation",
    header: () => <div className="text-center">Confirmation</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-3 justify-center text-sm font-semibold"}>
        <IoCheckmarkOutline className={"w-5 h-5 cursor-pointer text-green-600"} />
        <IoClose className={"w-5 h-5 cursor-pointer text-red-600"} />
      </div>
    )
  }
]