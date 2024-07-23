import Image from "next/image";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { Input } from "@/components/ui/input";
import { FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SendWithDrawRequestSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";

export default function WithdrawalForm() {

  const form = useForm<z.infer<typeof SendWithDrawRequestSchema>>({
    resolver: zodResolver(SendWithDrawRequestSchema),
    defaultValues: {
      phoneNumber: "",
      amount: "0",
      paymentType: ""
    }
  });

  async function onSubmit(values: z.infer<typeof SendWithDrawRequestSchema>) {

  }

    return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-10 shadow-input bg-white dark:bg-black gap-y-8">
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4 mb-4">
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type={"tel"}
                      placeholder={"Enter your phone number"}
                      className={"peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"}
                      {...field}
                    />
                    <PhoneInput placeholder="+998942922262" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name="amount"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type={"text"}
                      placeholder={"Enter amount"}
                      className={"peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name={"paymentType"}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Payment type</FormLabel>
                  <FormControl>
                    {/*Todo: Drop down menuni qanday qo`shish ni bilmadim*/}
                  </FormControl>
                </FormItem>
              )}
            />
            <p className={"text-primary font-medium"}>Forgot password?</p>
            <Button type={"submit"} variant={"login"}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}