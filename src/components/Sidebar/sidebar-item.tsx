import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

export default function SidebarItem({ href, title }: Props) {
  return (
    <Link href={href} className="flex items-center">
      <li className="mb-1 flex w-full cursor-pointer items-center justify-between rounded-md p-2 pl-2 pr-2 font-normal text-slate-600 hover:bg-hoverWhite">
        <span className="ml-3 text-sm">{title}</span>
      </li>
    </Link>
  );
}
