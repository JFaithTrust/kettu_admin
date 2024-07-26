"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CompanyType } from "@/types";
import { Button } from "@/components/ui/button";


export const columns: ColumnDef<CompanyType>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "tourCount",
    header: "Tour packets",
  },
  {
    accessorKey: "employeeCount",
    header: "Employees",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const company = row.original

      return (
        <div>
          {/**
           TODO: Jahongir uchun sovg`a
           Mazgi mana bu yerda action uchun ikkita button qo`shgan edim.
           Compnyni lock qilish uchun functionga companyni o`zini berib yuborib funksiyada
           amal bajarmoqchi edim lekin o`xshamadi. Menimcha handler funksiyalar qiymat olmasligi kerak

           Karochi o`ziz ko`rasiz buni bir
          */}
          <Button type={"button"} name={"Lock"} onClick={handleLockCompany} />
          <Button type={"button"} name={"Delete"} onClick={handleDeleteCompany} />
        </div>
      )
    }
  }
]

function handleLockCompany() {

}

function handleDeleteCompany() {

}