import {Dispatch, SetStateAction, useState} from "react";
import {ForgotPasswordFormSchema1, ForgotPasswordFormSchema2, ForgotPasswordFormSchema3} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {PhoneInput} from "@/components/ui/phone-input";
import {Input} from "@/components/ui/input";
import {FaEye} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import axios from "@/http/axios";
import {toast} from "sonner";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import Link from "next/link";
import {useLocale} from "next-intl";

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState({phoneNumber: ""});

  return (
    step === 1 ? (
      <ForgotStep1 setSaved={setSaved} setStep={setStep}/>
    ) : step === 2 ? (
      <ForgotStep2 saved={saved} setStep={setStep}/>
    ) : (
      <ForgotStep3 saved={saved}/>
    )
  )
}

export default ForgotPasswordForm;

function ForgotStep1({ setSaved, setStep,}: {
  setSaved: Dispatch<SetStateAction<{ phoneNumber: string }>>;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const locale = useLocale()

  const form = useForm<z.infer<typeof ForgotPasswordFormSchema1>>({
    resolver: zodResolver(ForgotPasswordFormSchema1),
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ForgotPasswordFormSchema1>) {
    try {
      const { data } = await axios.post("/api/auth/forgot", values);
      if (data.success) {
        setSaved({
          phoneNumber: values.phoneNumber,
        });
        setStep(2);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-10 shadow-input bg-white dark:bg-black gap-y-10">
      <h2 className={"text-xl text-center font-semibold"}>Forgot your password?</h2>
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
                    <PhoneInput placeholder="+998942922262" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button type={"submit"} variant={"login"}>
              Continue
            </Button>
            <Link href={`/${locale}`} className={"text-center text-gray-600 font-medium text-sm cursor-pointer hover:underline"}>Back to login</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

function ForgotStep2 ({ saved, setStep }: {
  saved: { phoneNumber: string };
  setStep: Dispatch<SetStateAction<number>>;
}){
  const locale = useLocale()
  const form = useForm<z.infer<typeof ForgotPasswordFormSchema2>>({
    resolver: zodResolver(ForgotPasswordFormSchema2),
    defaultValues: {
      smsCode: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ForgotPasswordFormSchema2>) {
    try {
      const { data } = await axios.post("/api/auth/forgot/verify", {
        ...saved,
        ...values,
      });
      if (data.success) {
        setStep(3);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }
  return(
    <div className="max-w-md w-full mx-auto rounded-2xl p-10 shadow-input bg-white dark:bg-black space-y-10">
      <h2 className={"text-xl text-center font-semibold"}>Confirmation code</h2>
      <div className={"flex w-full justify-center font-medium gap-x-2 text-sm"}>
        {/*<p className={"text-center text-gray-600 font-medium text-sm"}>{saved.phoneNumber}</p>*/}
        <p>+998 91 002 00 00</p>
        <p className={"text-primary hover:underline cursor-pointer"}>Change Number</p>
      </div>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4 mb-4">
            <div className="flex flex-col space-y-1">
              <FormField
                name="smsCode"
                control={form.control}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Confirmation code</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0}/>
                          <InputOTPSlot index={1}/>
                          <InputOTPSlot index={2}/>
                          <InputOTPSlot index={3}/>
                          <InputOTPSlot index={4}/>
                          <InputOTPSlot index={5}/>
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className={"flex w-full font-medium gap-x-2 text-sm"}>
                {/*<p className={"text-center text-gray-600 font-medium text-sm"}>{saved.phoneNumber}</p>*/}
                <p>Didn’t get the code?</p>
                <p className={"text-primary hover:underline cursor-pointer"}>Resend ()</p>
              </div>
            </div>
            <Button type={"submit"} variant={"login"}>
              Continue
            </Button>
            <Link href={`/${locale}`} className={"text-center text-gray-600 font-medium text-sm cursor-pointer hover:underline"}>Back to
              login</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

function ForgotStep3({saved}: { saved: { phoneNumber: string } }) {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof ForgotPasswordFormSchema3>>({
    resolver: zodResolver(ForgotPasswordFormSchema3),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ForgotPasswordFormSchema3>) {
    try {
      const { data: response } = await axios.post("/api/auth/reset", {
        ...saved,
        ...values,
      });
      if (response.success) {
        // const { data } = await axios.post("/api/auth/forgot/verify", {
        //   phoneNumber: saved.phoneNumber,
        // });
        toast.success("Password has been reset successfully");
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log(showPassword)
  };

  return(
    <div className="max-w-md w-full mx-auto rounded-2xl p-10 shadow-input bg-white dark:bg-black gap-y-8">
      <h2 className={"text-xl text-center font-semibold"}>Set new password</h2>
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4 mb-4">
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
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({field}) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
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
            <Button type={"submit"} variant={"login"}>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}