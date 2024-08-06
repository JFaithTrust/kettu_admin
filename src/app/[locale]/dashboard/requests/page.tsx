'use client'

import React from "react";
import { requestData} from "@/constants";
import {requestColumn} from "@/app/[locale]/dashboard/requests/request-column";
import {DataTable} from "@/components/layout/data-table";

const RequestsPage = () => {

  return (
    <DataTable columns={requestColumn}
               data={requestData}
               hasFilter={true} hasPagination={true} hasSearchbar={true}
               searchedBy={"companyName"}
    />
  );
};

export default RequestsPage