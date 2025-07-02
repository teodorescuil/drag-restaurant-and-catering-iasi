'use client'
import { footer } from "@/app/metadata/footer";
import { pages } from "@/app/metadata/pages";
export default function QuickLinks() {
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 64;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
        });
    }
    };

    return (
        <>
            <h4 className="font-semibold text-white mb-4">{footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300">
                {pages.map(page => (
                    <li key={page.section}>
                        <button 
                            onClick={() => scrollToSection('home')}
                            className="hover:text-gold transition-colors duration-200">
                            {page.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}
