"use client";

import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  logo: ReactNode;
  navLinks: { name: string; href: string }[];
  socialLinks: { name: string; href: string }[];
};

export const Navbar = ({ logo, navLinks, socialLinks }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState<boolean | undefined>(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry?.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 h-16 backdrop-blur duration-200 ${
          isIntersecting
            ? "border-transparent bg-zinc-900/0"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-5">
          <div className="flex justify-between gap-8">
            <div className="mr-4">{logo}</div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-600 duration-200 hover:text-zinc-900"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-600 duration-200 hover:text-zinc-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
