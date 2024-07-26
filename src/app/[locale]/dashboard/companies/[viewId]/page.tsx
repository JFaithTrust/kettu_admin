'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {DataTable} from "@/components/layout/data-table";
import {tourPackColumn} from "@/app/[locale]/dashboard/tour-packs/tour-pack-column";
import {employeeData, tourPackData} from "@/constants";
import {employeeColumn} from "@/app/[locale]/dashboard/employees/employee-column";

const CompanyPage = () => {

  return (
    <div className={"flex flex-col"}>
      <div>
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