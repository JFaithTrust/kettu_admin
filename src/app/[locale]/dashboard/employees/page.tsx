'use client'

import React from "react";
import {employeeData} from "@/constants";
import {employeeColumn} from "@/app/[locale]/dashboard/employees/employee-column";
import {DataTable} from "@/components/layout/data-table";

const EmployeesPage = () => {

  return (
    <DataTable columns={employeeColumn}
               data={employeeData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/employees/create"}
               searchedBy={"fullName"}
    />
  );
};

export default EmployeesPage