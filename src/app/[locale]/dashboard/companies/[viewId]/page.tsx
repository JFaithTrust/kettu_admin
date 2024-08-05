'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {DataTable} from "@/components/layout/data-table";
import {tourPackColumn} from "@/app/[locale]/dashboard/tour-packs/tour-pack-column";
import {employeeData, tourPackData} from "@/constants";
import {employeeColumn} from "@/app/[locale]/dashboard/employees/employee-column";
import Image from "next/image";

const CompanyPage = () => {

  return (
    <div className={"flex flex-col"}>
      <div className={"flex flex-col"}>
        <div className={"w-full h-24 bg-gradient-to-tr from-[#32D583] to-[#85E13A]"} />
        <div className={"flex justify-between"}>
          <div className={"flex gap-x-4 translate-x-6 -translate-y-16 items-end"}>
              <Image src={'/company-default.svg'} alt={'company'} width={160} height={160} className={""} />
            <div className={"flex flex-col space-y-2 mb-4"}>
              <h2 className={"text-2xl font-semibold"}>Cody Fisher</h2>
              <span className={"text-[#667085]"}>Tashkent</span>
            </div>
          </div>
          <span className={"text-[#667085] mt-4"}>Created 11 сентябрь, 20:18 in Tashkent</span>
        </div>
      </div>
      <Tabs defaultValue="tourPackets">
        <TabsList>
          <TabsTrigger value="tourPackets">Tour Packets</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
        </TabsList>
        <TabsContent value="tourPackets">
          <DataTable columns={tourPackColumn} data={tourPackData} />
        </TabsContent>
        <TabsContent value="employees">
          <DataTable columns={employeeColumn} data={employeeData} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CompanyPage