'use client'

import {serviceData} from "@/constants";
import {serviceColumn} from "@/app/[locale]/dashboard/services/service-column";
import {DataTable} from "@/components/layout/data-table";

const ServicesPage = () => {

  return (
    <DataTable columns={serviceColumn}
               data={serviceData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/services/create"}
               searchedBy={"name"}
    />
  );
};

export default ServicesPage