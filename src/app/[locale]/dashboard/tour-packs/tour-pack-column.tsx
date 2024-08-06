import {TourPackType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {LuPencil, LuTrash2} from "react-icons/lu";
import React from "react";
import {FaPencil} from "react-icons/fa6";

export const tourPackColumn: ColumnDef<TourPackType>[] = [
  {
    accessorKey: "name",
    header: () => <div>Tour packet name</div>,
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
              <img key={index} src={image} alt={"tour pack"} className={"inline-block h-9 w-9 rounded-xl border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary"} />
          ))}
          <div>
            <span className={"text-[#6E7781] bg-[#F6F8FA] h-9 w-9 flex items-center justify-center rounded-xl border-[1px] border-solid border-[#EAEEF2] dark:border-dark-secondary dark:bg-[#1F242F] dark:text-white"}>+8</span>
          </div>
        </div>
    )
  },
  {
    accessorKey: "feedbacks",
    header: () => <div>Feedbacks</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.feedbacks}</span>
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
      <div className={"flex gap-x-2 items-center justify-center"}>
        <LuPencil className={"w-5 h-5 cursor-pointer"} />
        <LuTrash2 className={"w-5 h-5 cursor-pointer"} />
      </div>
    )
  }
]