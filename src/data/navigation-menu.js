import {
    HomeIcon,
    AtSignIcon,
    SendIcon
} from 'lucide-react';

import { services } from '@/data/services';

export const navigationMenuItems = {
    "navigation": [
        {
            "_id": "1",
            "title": "Home",
            "icon": HomeIcon,
            "href": "/"
        },
        {
            "_id": "2",
            "title": "Services",
            "icon": AtSignIcon,
            "href": "/services",
            "subMenuItems": [
                ...services.map(service => ({
                    title: service.title,
                    description: service.description,
                    href: service.href
                }))
            ]
        },
        {
            "_id": "3",
            "title": "Contact",
            "icon": SendIcon,
            "href": "/contact"
        }
    ]
}