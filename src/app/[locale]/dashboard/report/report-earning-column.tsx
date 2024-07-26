import {ColumnDef} from "@tanstack/table-core";
import {ReportType} from "@/types";
import React from "react";

export const reportEarningColumn: ColumnDef<ReportType>[] = [
  {
    accessorKey: "tour packet name",
    header: () => <div>Tour Packet Name</div>,
    cell: ({ row }) => (
      <span className={"capitalize"}>{row.original.tourPackName}</span>
    )
  },
  {
    accessorKey: "price",
    header: () => <div>Price</div>,
    cell: ({ row }) => (
      <span>{row.getValue("price")}</span>
    )
  },{
    accessorKey: "sold",
    header: () => <div>Sold</div>,
    cell: ({ row }) => (
      <span>{row.getValue("sold")}</span>
    )
  },
]