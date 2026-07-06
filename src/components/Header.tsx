"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

export default function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="flex items-center gap-4 px-2 py-3 mb-2">
      <button
        onClick={toggle}
        aria-label="Open navigation menu"
        className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors duration-200"
      >
        <Menu size={24} />
      </button>
    </header>
  );
}
