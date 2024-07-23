import * as z from "zod";

export const LoginFormSchema = z.object({
  phoneNumber: z.string().min(3, {
    message: "Phone number must be at least 3 characters long",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export const ForgotPasswordFormSchema1 = z.object({
  phoneNumber: z.string().min(3, {
    message: "Phone number must be at least 3 characters long",
  }),
});

export const ForgotPasswordFormSchema2 = z.object({
  smsCode: z.string().min(6, {
    message: "Code must be at least 6 characters long",
  }),
});

export const ForgotPasswordFormSchema3 = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
})