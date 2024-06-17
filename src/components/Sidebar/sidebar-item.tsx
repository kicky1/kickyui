"use client";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
};

export default function SidebarItem({ href, title }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <li
        className={`mb-1 flex w-full cursor-pointer items-center justify-between rounded-md p-2 pl-2 pr-2 font-normal text-slate-600 hover:bg-hoverWhite ${isActive ? "bg-slate-200 font-semibold text-slate-900" : ""}`}
      >
        <span className="ml-3 text-sm">{capitalizeFirstLetter(title)}</span>
      </li>
    </Link>
  );
}
