"use client";

import { LinkItem } from "@/types/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarLinkProps {
  item: LinkItem;
  onNavigate?: () => void;
}

export default function SideBarLink({ item, onNavigate }: SideBarLinkProps) {
  const pathname = usePathname();
  const IconComponent = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`${
        pathname === item.href
          ? "bg-accent text-white"
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/20"
      } flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200`}
    >
      <IconComponent size={24} />
      <span>{item.label}</span>
    </Link>
  );
}
