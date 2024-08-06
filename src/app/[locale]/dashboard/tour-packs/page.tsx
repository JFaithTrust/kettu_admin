'use client'

import React from "react";
import {tourPackData} from "@/constants";
import {tourPackColumn} from "@/app/[locale]/dashboard/tour-packs/tour-pack-column";
import {DataTable} from "@/components/layout/data-table";

const TourPackPage = () => {
  return (
    <DataTable columns={tourPackColumn}
               data={tourPackData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/tour-packs/create"}
               searchedBy={"name"}
    />
  );
};

export default TourPackPage