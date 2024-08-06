import {HouseType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {FaPencil} from "react-icons/fa6";
import {LuPencil, LuTrash2} from "react-icons/lu";
import React from "react";
import Rating from "@/components/ui/rating";

export const houseColumn: ColumnDef<HouseType>[] = [
  {
    accessorKey: "name",
    header: () => <div>House name</div>,
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
    accessorKey: "rooms",
    header: () => <div>Rooms</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.rooms}</span>
    )
  },
  {
    accessorKey: "images",
    header: () => <div>Images</div>,
    cell: ({ row }) => (
        <div className={"mt-3 flex -space-x-1.5 overflow-hidden"}>
          {row.original.imagesURL.map((image, index) => (
              <img key={index} src={image} alt={"house"} className={"inline-block h-9 w-9 rounded-xl border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary"} />
          ))}
          <div>
            <span className={"text-[#6E7781] bg-[#F6F8FA] h-9 w-9 flex items-center justify-center rounded-xl border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary dark:bg-[#1F242F] dark:text-white"}>+8</span>
          </div>
        </div>
    )
  },
  {
    accessorKey: "rating",
    header: () => <div>Rating</div>,
    cell: ({ row }) => (
        <Rating initialRating={row.original.rating} />
    )
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => (
      <div className={"flex gap-x-2 justify-center"}>
        <LuPencil className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]