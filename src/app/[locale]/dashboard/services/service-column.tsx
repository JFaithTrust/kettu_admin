import {ServiceType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {FaPencil} from "react-icons/fa6";
import {LuTrash2} from "react-icons/lu";
import React from "react";

export const serviceColumn: ColumnDef<ServiceType>[] = [
  {
    accessorKey: "service name",
    header: () => <div>Service name</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.name}</span>
    )
  },
  {
    accessorKey: "location",
    header: () => <div>Location</div>,
    cell: ({ row }) => (
      <span className={"capitalize text-sm font-medium"}>{row.original.location}</span>
    )
  },
  {
    accessorKey: "images",
    header: () => <div>Images</div>,
    cell: ({ row }) => (
      <div className={"mt-3 flex -space-x-1.5 overflow-hidden"}>
        {row.original.imagesURL.map((image, index) => (
          <img key={index} src={image} alt={"service"} className={"inline-block h-9 w-9 rounded-xl border-[1px] border-solid border-[#EAEEF2]"} />
        ))}
        <div>
          <span className={"text-[#6E7781] bg-[#F6F8FA] h-9 w-9 flex items-center justify-center rounded-xl border-[1px] border-solid border-[#EAEEF2]"}>+8</span>
        </div>
      </div>
    )
  },
  {
    accessorKey: "price",
    header: () => <div>Price</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.price} C</span>
    )
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-3 justify-center"}>
        <FaPencil  className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]