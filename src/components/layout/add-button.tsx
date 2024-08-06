import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import Link from "next/link";
import React from "react";

interface AddButtonProps{
  link: string
}

export function AddButton(props: AddButtonProps) {

  return (
    <Link href={props.link}>
      <Button
        className="py-3 px-4 flex gap-x-2 bg-primary rounded-lg text-white hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/80 dark:text-white"
      >
        <LuPlus className={"h-6 w-6"} />
        Add new
      </Button>
    </Link>
  )
}