import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kettu",
  description: "A travel blog",
};

export default async function RootLayout({
  children, params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-[#1F242F]`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </ThemeProvider></body>
    </html>
  );
}