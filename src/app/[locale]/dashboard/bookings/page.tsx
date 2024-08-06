'use client'

import React from "react";
import {bookingData, CompanyData} from "@/constants";
import {bookingColumn} from "@/app/[locale]/dashboard/bookings/booking-column";
import {DataTable} from "@/components/layout/data-table";

const BookingPage = () => {

  return (
    <DataTable columns={bookingColumn}
               data={bookingData}
               hasFilter={true} hasPagination={true} hasSearchbar={true}
               searchedBy={"name"}
    />
  );
};

export default BookingPage