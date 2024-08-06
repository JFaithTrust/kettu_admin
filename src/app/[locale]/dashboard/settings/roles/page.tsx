'use client'

import {rolesData} from "@/constants";
import {DataTable} from "@/components/layout/data-table";
import {roleColumn} from "@/app/[locale]/dashboard/settings/roles/role-column";

const RolesPage = () => {
  return (
    <DataTable columns={roleColumn}
               data={rolesData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/roles/create"}
               searchedBy={"role"}
    />
  );
}

export default RolesPage;