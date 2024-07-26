import {ColumnDef} from "@tanstack/table-core";
import {ReportType} from "@/types";

export const reportWithdrawnColumn: ColumnDef<ReportType>[] = [
  {
    accessorKey: "date",
    header: () => <div>Date</div>,
    cell: ({ row }) => (
      <span>{row.getValue("date")}</span>
    )
  },{
    accessorKey: "amount",
    header: () => <div>Amount</div>,
    cell: ({ row }) => (
      <span>{row.getValue("amount")}</span>
    )
  },
]