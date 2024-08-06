'use client'

import {locationData} from "@/constants";
import {locationColumn} from "@/app/[locale]/dashboard/locations/location-column";
import {DataTable} from "@/components/layout/data-table";

const LocationsPage = () => {

  return (
    <DataTable columns={locationColumn}
               data={locationData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/locations/create"}
               searchedBy={"name"}
    />
  );
};

export default LocationsPage