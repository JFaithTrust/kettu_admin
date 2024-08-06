'use client'

import {houseData} from "@/constants";
import {houseColumn} from "@/app/[locale]/dashboard/houses/house-column";
import {DataTable} from "@/components/layout/data-table";

const HousesPage = () => {

  return (
    <DataTable columns={houseColumn}
               data={houseData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/houses/create"}
               searchedBy={"name"}
    />
  );
};

export default HousesPage