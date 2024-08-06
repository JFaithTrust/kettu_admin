'use client'

import React from "react";
import {postData} from "@/constants";
import {postColumn} from "@/app/[locale]/dashboard/posts/post-column";
import {DataTable} from "@/components/layout/data-table";

const PostsPage = () => {

  return (
    <DataTable columns={postColumn}
               data={postData}
               hasFilter={true} hasPagination={true} hasSearchbar={true} hasAddButton={true}
               addButtonLink={"/dashboard/posts/create"}
               searchedBy={"title"}
    />
  );
};

export default PostsPage