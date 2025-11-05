"use client";

import { FloatingNavigationMenu } from "@/components/custom/floating-navigation-menu/floating-navigation-menu";
import { navigationMenuItems } from "@/data/navigation-menu";
import { Landing } from "@/components/pages/home/landing";
import { Services } from "@/components/pages/home/services";
import { ModeToggle } from "@/components/custom/theme-toggle/toggle";


export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingNavigationMenu items={navigationMenuItems} />
      <ModeToggle />
      <Landing />
      <Services />
    </div>
  );
}
