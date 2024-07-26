import {ColumnDef} from "@tanstack/table-core";
import {LocationType} from "@/types";
import {FaPencil} from "react-icons/fa6";
import {LuTrash2} from "react-icons/lu";
import React from "react";

export const locationColumn: ColumnDef<LocationType>[] = [
  {
    accessorKey: "location",
    header: () => <div>Location</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.name}</span>
    )
  },
  {
    accessorKey: "latitude",
    header: () => <div>Latitude</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.latitude}</span>
    )
  },
  {
    accessorKey: "longitude",
    header: () => <div>Longitude</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.longitude}</span>
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