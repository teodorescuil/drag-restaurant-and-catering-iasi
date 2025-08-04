'use client'
import Link from 'next/link';
import { metadata } from "@/app/constants/metadata";
import { pages } from "@/app/constants/pages";

export default function QuickLinks() {

    // const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         const headerHeight = 64;
    //         const elementPosition = element.offsetTop - headerHeight;
    //         window.scrollTo({
    //             top: elementPosition,
    //             behavior: 'smooth'
    //         });
    //     }
    // };

    return (
        <>
            <h4 className="font-semibold text-white mb-4">{metadata.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300">
                {pages.map(page => (
                    <li key={page.section}>
                        <Link 
                            href={`/${page.section}`}
                            className="hover:text-gold/80 transition-colors duration-200">
                                {page.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
