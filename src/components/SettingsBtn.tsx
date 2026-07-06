import { LinkItem } from "@/types/navigation";
import SideBarLink from "./SideBarLink";

interface SettingsBtnProps {
  item: LinkItem;
}

export default function SettingsBtn({ item }: SettingsBtnProps) {
  return <SideBarLink item={item} />;
}
