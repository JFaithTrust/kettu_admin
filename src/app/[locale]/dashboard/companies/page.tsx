'use client'

import React from "react";
import { companyColumn } from "@/app/[locale]/dashboard/companies/company-column";
import { CompanyData } from "@/constants";
import { DataTable } from "@/components/layout/data-table";

const CompaniesPage = () => {
  return (
    <div>
      <DataTable columns={companyColumn}
                 data={CompanyData}
                 hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
                 addButtonLink={"/dashboard/companies/create"}
                  searchedBy={"name"}
      />
    </div>
  );
};

export default CompaniesPage