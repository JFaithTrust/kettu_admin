'use client'

import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import SuccessChart from "@/components/charts/succes-chart";
import DestructiveChart from "@/components/charts/destructive-chart";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CreateRequestModal from "@/components/modals/create-request.modal";
import {useCreateRequest} from "@/hooks/use-request";
import {DataTable} from "@/components/layout/data-table";
import {reportData} from "@/constants";
import {reportEarningColumn} from "@/app/[locale]/dashboard/report/report-earning-column";
import {reportWithdrawnColumn} from "@/app/[locale]/dashboard/report/report-withdrawn-column";

const successData = [
  { month: "January", desktop: 18},
  { month: "February", desktop: 305},
  { month: "March", desktop: 237},
  { month: "April", desktop: 73},
  { month: "May", desktop: 209},
  { month: "June", desktop: 214},
]

const destructiveData = [
  { month: "January", desktop: 18},
  { month: "February", desktop: 305},
  { month: "March", desktop: 237},
  { month: "April", desktop: 73},
  { month: "May", desktop: 209},
  { month: "June", desktop: 214},
]

const ReportPage = () => {

  const { onOpen} = useCreateRequest()

  return (
    <div className={"flex flex-col"}>
      <CreateRequestModal />
      <div className={"grid grid-cols-3 gap-x-4"}>
        <div className={"p-6 border-[1px] border-solid rounded-xl flex flex-col gap-y-6 dark:border-dark-secondary"}>
          <span className={"font-semibold"}>Total earning</span>
          <div className={"grid grid-cols-2"}>
            <div className={"flex flex-col gap-y-4"}>
              <span className={"text-4xl font-semibold"}>2,420,000 C</span>
              <div className={"flex gap-x-2 text-sm font-medium"}>
                  <span className={"text-green-400 flex items-center"}>
                    <MdOutlineKeyboardArrowUp/> 40%
                  </span>
                vs last year
              </div>
            </div>
            <div>
              <SuccessChart data={successData}/>
            </div>
          </div>
        </div>
        <div className={"p-6 border-[1px] border-solid rounded-xl flex flex-col gap-y-6 dark:border-dark-secondary"}>
          <span className={"font-semibold"}>Current balance</span>
          <div className={"grid grid-cols-2"}>
            <div className={"flex flex-col gap-y-4"}>
              <span className={"text-4xl font-semibold"}>70,000 C</span>
              <div className={"flex gap-x-2 text-sm font-medium"}>
                  <span className={"text-red-400 flex items-center"}>
                    <MdOutlineKeyboardArrowDown/> 20%
                  </span>
                vs last month
              </div>
            </div>
            <div>
              <DestructiveChart data={destructiveData}/>
            </div>
          </div>
        </div>
        <div className={"rounded-xl bg-[#F6F8FA] dark:dark:bg-[#1F242F] flex justify-center items-center"}>
          <div className={"flex flex-col gap-y-2 items-center"}>
              <span className={"font-semibold"}>Submit a withdrawal request.</span>
              <Button onClick={onOpen} className={"bg-primary hover:bg-primary/90 w-fit py-2 px-3 rounded-lg text-sm font-medium dark:bg-primary dark:hover:bg-primary/90 dark:text-white"}>
                Submit
              </Button>
          </div>
        </div>
      </div>
      <Tabs defaultValue="earnings">
        <TabsList className={"translate-y-12"}>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="widthdrawn">Withdrawn earnings</TabsTrigger>
        </TabsList>
        <TabsContent value="earnings">
          <DataTable columns={reportEarningColumn} data={reportData} hasFilter={true} hasPagination={true} hasSearchbar={true} isReportPage={true}
                     searchedBy={"name"} />
        </TabsContent>
        <TabsContent value="widthdrawn">
          <DataTable columns={reportWithdrawnColumn} data={reportData} hasFilter={true} hasPagination={true} hasSearchbar={true} isReportPage={true}
                     searchedBy={"name"} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportPage