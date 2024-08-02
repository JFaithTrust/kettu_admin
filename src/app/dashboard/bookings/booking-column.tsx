import {BookingType} from "@/types";
import {ColumnDef} from "@tanstack/table-core";
import React from "react";
import {X} from "lucide-react";
import {IoClose} from "react-icons/io5";

export const bookingColumn: ColumnDef<BookingType>[] = [
  {
    accessorKey: "name",
    header: () => <div>Traveller Name</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.travellerName}</span>
    )
  },
  {
    accessorKey: "Booked Tour",
    header: () => <div>Booked Tour</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.bookedTour}</span>
    )
  },
  {
    accessorKey: "Flight Time",
    header: () => <div>Flight Time</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.flightTime}</span>
    )
  },
  {
    accessorKey: "Booked At",
    header: () => <div>Booked at</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.bookedAt}</span>
    )
  },
  {
    accessorKey: "Price",
    header: () => <div>Price</div>,
    cell: ({ row }) => (
        <span className={"text-sm font-medium"}>{row.original.price} C</span>
    )
  },
  {
    id: "cancel",
    header: () => <div className="text-center">Cancel</div>,
    cell: ({ row }) => (
      <div className={"flex justify-center"}>
        <IoClose className={"w-5 h-5 cursor-pointer text-red-600"} />
      </div>
    )
  }
]