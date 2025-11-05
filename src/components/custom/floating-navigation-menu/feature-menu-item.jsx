import * as React from "react"

import Link from "next/link"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavigationMenuFeatureItem({ title, icon, subitems = null, href = null, isMobile = false }) {
    return (
        <NavigationMenuItem key={title} className="bg-background/60 rounded-md hover:bg-background/80 transition-colors">
            { !subitems ? (
                <Link href={href} className={navigationMenuTriggerStyle()}>
                    {React.createElement(icon, { className: isMobile ? "h-4 w-4" : "h-4 w-4 mr-2" })}
                    {!isMobile && title}
                </Link>
            ):(
                <>
                    <NavigationMenuTrigger>
                        <Link href={href} className="flex items-center">
                            {React.createElement(icon, { className: isMobile ? "h-4 w-4 mr-2" : "h-4 w-4 mr-2" })}
                            {!isMobile && title}
                        </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {subitems && (
                            <ul className="grid w-[300px] gap-4">
                                {subitems.map((subitem, index) => (
                                    <li key={index}>
                                        <Link href={subitem.href ? subitem.href : href + "#" + subitem.title.toLowerCase().replace(/\s+/g, "-")}>
                                            <NavigationMenuLink>
                                                {subitem.title}
                                                <span className="text-muted-foreground"> {subitem.description}</span>
                                            </NavigationMenuLink>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </NavigationMenuContent>
                </>
            )
        }
        </NavigationMenuItem>
    )
}