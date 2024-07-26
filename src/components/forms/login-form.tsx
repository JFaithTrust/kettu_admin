"use client"

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {LoginFormSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {toast} from "sonner";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {PhoneInput} from "@/components/ui/phone-input";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {FaEye} from "react-icons/fa";
import Link from "next/link";
import {useLocale} from "next-intl";
import useAuthStore from "@/store/auth.store";
import $axios from "@/http/axios";

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuthStore()
  const router = useRouter()
  const locale = useLocale()

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    }
  })

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    try {
      const { data } = await $axios.post('/Auth/login',values)
      if(data) {
        setAuth({
          token: data.token,
          refreshTokenId: data.refreshTokenId,
          user: {
            id: data.user.id,
            email: data.user.email,
          }
        })
        toast.success(data.message)
        router.push(`/${locale}/dashboard/companies`)
      }else{
        toast.error("An error occurred. Please try again.")
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again.")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-10 shadow-input bg-white dark:bg-black gap-y-8">
      <div className={"flex items-center justify-center"}>
        <Image src={"/kettu.svg"} width={95} height={64} alt={"kettu image"} />
      </div>
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
                    {/*<Input*/}
                    {/*  type={"tel"}*/}
                    {/*  placeholder={"Enter your phone number"}*/}
                    {/*  className={"peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"}*/}
                    {/*  {...field}*/}
                    {/*/>*/}
                    <PhoneInput placeholder="+998942922262" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className={"relative"}>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder={"***********"}
                        className={"peer block w-full rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"}
                        {...field}
                      />
                      <FaEye
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 cursor-pointer top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-900 "/>
                    </div>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Link href={`/${locale}/forgot-password`} className={"text-primary font-medium hover:underline cursor-pointer"}>Forgot password?</Link>
            <Button type={"submit"} variant={"login"}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}