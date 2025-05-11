import React from "react";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export type IconName = "globe" | "mail" | "phone" | "github" | "linkedin" | string;

const iconMap: Record<IconName, React.ElementType> = {
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function getIconComponent(iconName?: IconName): React.ElementType | null {
  if (!iconName) {
    return null;
  }
  const normalizedIconName = iconName.toLowerCase();
  const IconComponent = iconMap[normalizedIconName];

  if (!IconComponent) {
    console.warn(`Icon not found for component: "${iconName}"`);
    return null; 
  }
  return IconComponent;
}
