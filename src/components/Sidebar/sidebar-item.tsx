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
        className={`hover:bg-hoverWhite mb-1 flex w-full cursor-pointer items-center justify-between rounded-md p-2 pl-2 pr-2 font-normal text-slate-600 ${isActive ? "bg-secondary font-semibold" : ""}`}
      >
        <span className="ml-3 text-sm">{capitalizeFirstLetter(title)}</span>
      </li>
    </Link>
  );
}
