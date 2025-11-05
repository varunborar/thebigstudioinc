import * as React from "react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavigationMenuFeatureItem } from "@/components/custom/floating-navigation-menu/feature-menu-item"



export function FloatingNavigationMenu({ items }) {

    const isMobile = useIsMobile()

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
            {/* Logo */}
            <div className="bg-background backdrop-blur-md rounded-md p-2 md:p-3 border border-border">
                <img 
                    src="/images/logo.svg" 
                    alt="The Big Studio Logo" 
                    className="h-6 w-auto md:h-5 max-w-none"
                />
            </div>
            
            {/* Navigation Menu */}
            <div className="bg-background rounded-md p-1">
                <NavigationMenu viewport={isMobile}>
                    <NavigationMenuList className="flex-nowrap">
                        {items.navigation.map((item) => (
                            <NavigationMenuFeatureItem
                                key={item._id}
                                title={item.title}
                                subitems={item.subMenuItems}
                                href={item.href}
                                icon={item.icon}
                                isMobile={isMobile}
                            />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}