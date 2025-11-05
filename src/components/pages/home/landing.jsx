import React from 'react'
import { Button } from '@/components/ui/button'

export function Landing() {
    return (
        <div className="w-full h-[90vh] bg-purple-600 dark:bg-purple-700 flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    Let your business go digital with us.
                </h1>
            </div>
            <div className="flex flex-row justify-center items-center mt-20">
                <Button variant="primary" size="lg" className="bg-gray-200 text-gray-800 mt-8 hover:bg-gray-300">
                    Get Started
                </Button>
                <Button variant="secondary" size="lg" className="bg-blue-600 text-gray-200 mt-8 ml-4 hover:bg-blue-700">
                    Contact Us
                </Button>
            </div>
        </div>
    )
}