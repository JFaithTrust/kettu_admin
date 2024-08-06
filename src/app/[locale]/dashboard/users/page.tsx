'use client'

import {Input} from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {
  ColumnFiltersState, flexRender,
  getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel, getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState
} from "@tanstack/react-table";
import React from "react";
import Link from "next/link";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {LuListFilter, LuPlus, LuSearch} from "react-icons/lu";
import {CompanyData, userData} from "@/constants";
import {userColumn} from "@/app/[locale]/dashboard/users/user-column";
import {companyColumn} from "@/app/[locale]/dashboard/companies/company-column";
import {DataTable} from "@/components/layout/data-table";

const UsersPage = () => {

  return (
    <DataTable columns={userColumn}
               data={userData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/users/create"}
               searchedBy={"fullName"}
    />
  );
};

export default UsersPage