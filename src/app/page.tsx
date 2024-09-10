import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-start text-left ">
        <p className="text-3xl font-semibold tracking-tight">
          Welcome to kickyui
        </p>
        <p className="text-xl font-normal tracking-tight text-slate-400">
          kickyui is a collection of React components that can be used in any
          project that uses shadcn.
        </p>
        <div className="mt-4">
          <Link href="/components/button" passHref>
            <Button variant={"shine"}>Get started</Button>
          </Link>
          <Link
            href="https://github.com/kicky1/kickyui"
            passHref
            target="_blank"
          >
            <Button variant={"link"} className="ml-2">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
