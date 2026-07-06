import { LogOut } from "lucide-react";

export default function LogOutBtn() {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors duration-200 cursor-pointer">
      <LogOut size={24} />
      <span>Sign Out</span>
    </button>
  );
}
