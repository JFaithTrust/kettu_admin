import {PostType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import {FaPencil} from "react-icons/fa6";
import {LuTrash2} from "react-icons/lu";
import React from "react";

export const postColumn: ColumnDef<PostType>[] = [
  {
    accessorKey: "images",
    header: () => <div>Images</div>,
    cell: ({ row }) => (
      <div className={"mt-3 flex -space-x-1.5 overflow-hidden"}>
        {row.original.imagesURL.map((image, index) => (
          <img key={index} src={image} alt={"post"} className={"inline-block h-9 w-9 rounded-xl border-[1px] border-solid border-[#EAEEF2]"} />
        ))}
        <div>
          <span className={"text-[#6E7781] bg-[#F6F8FA] h-9 w-9 flex items-center justify-center rounded-xl border-[1px] border-solid border-[#EAEEF2]"}>+8</span>
        </div>
      </div>
    )
  },
  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.title}</span>
    )
  },
  {
    accessorKey: "description",
    header: () => <div>Description</div>,
    cell: ({ row }) => (
      <span className={"capitalize text-sm font-medium"}>{row.original.description}</span>
    )
  },
  {
    accessorKey: "views",
    header: () => <div>Views</div>,
    cell: ({ row }) => (
      <span className={"text-sm font-medium"}>{row.original.views}</span>
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