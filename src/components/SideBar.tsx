"use client";

import {
  GraduationCap,
  House,
  Calculator,
  NotebookPen,
  CalendarClock,
  CalendarDays,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { LinkItem } from "@/types/navigation";
import SideBarLink from "./SideBarLink";
import SettingsBtn from "./SettingsBtn";
import LogOutBtn from "./LogOutBtn";
import { useSidebar } from "@/context/SidebarContext";

export default function SideBar() {
  const { isOpen, close } = useSidebar();

  const links: LinkItem[] = [
    {
      label: "Home",
      icon: House,
      href: "/",
    },
    {
      label: "GPA Calculator",
      icon: Calculator,
      href: "/gpa-calculator",
    },
    {
      label: "Assignment Tracker",
      icon: NotebookPen,
      href: "/assignment-tracker",
    },
    {
      label: "Exam Tracker",
      icon: CalendarClock,
      href: "/exam-tracker",
    },
    {
      label: "Weekly Timetable",
      icon: CalendarDays,
      href: "/weekly-timetable",
    },
  ];
  const settingsLink: LinkItem = {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  };

  const sidebarContent = (
    <aside className="w-72 px-4 py-6 flex flex-col rounded-2xl bg-bg-secondary border border-slate-800/50 h-full">
      <Link href="/" onClick={close} className="px-2 flex items-center gap-3">
        <GraduationCap size={48} className="text-accent" />
        <div className="flex flex-col gap-0.5">
          <p className="text-lg font-semibold text-white">Gradely</p>
          <span className="text-xs text-slate-400">Track. Plan. Graduate.</span>
        </div>
      </Link>
      <hr className="mt-8 mb-6 border-slate-800" />
      <div>
        <ul className="flex flex-col gap-1">
          {links.map((item, index) => (
            <li key={index}>
              <SideBarLink item={item} onNavigate={close} />
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-6 border-slate-800" />
      <div className="mt-auto">
        <hr className="mb-6 border-slate-800" />
      </div>
      <div>
        <ul className="flex flex-col gap-1">
          <li>
            <SettingsBtn item={settingsLink} />
          </li>
          <li>
            <LogOutBtn />
          </li>
        </ul>
      </div>
    </aside>
  );

  return (
    <>
      <div className="hidden md:block shrink-0">{sidebarContent}</div>

      <>
        <div
          onClick={close}
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        />
        <div
          className={`fixed top-0 left-0 z-50 h-full p-2 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sidebarContent}
        </div>
      </>
    </>
  );
}
