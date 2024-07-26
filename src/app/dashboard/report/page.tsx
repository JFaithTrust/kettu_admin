'use client'

import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from "react-icons/md";
import SuccessChart from "@/components/charts/succes-chart";
import DestructiveChart from "@/components/charts/destructive-chart";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ReportEarningDataTable from "@/app/dashboard/report/report-earning-data-table";
import ReportWithDrawnDataTable from "@/app/dashboard/report/report-withdrawn-data-table";

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

  return (
    <div className={"flex flex-col"}>
      <div className={"grid grid-cols-3 gap-x-4"}>
        <div className={"p-6 border-[1px] border-solid rounded-xl flex flex-col gap-y-6"}>
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
        <div className={"p-6 border-[1px] border-solid rounded-xl flex flex-col gap-y-6"}>
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
        <div className={"rounded-xl bg-[#F6F8FA] flex justify-center items-center"}>
          <div className={"flex flex-col gap-y-2 items-center"}>
              <span className={"font-semibold"}>Submit a withdrawal request.</span>
              <Button className={"bg-primary hover:bg-primary/90 w-fit py-2 px-3 rounded-lg text-sm font-medium"}>
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
          <ReportEarningDataTable />
        </TabsContent>
        <TabsContent value="widthdrawn">
          <ReportWithDrawnDataTable />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportPage