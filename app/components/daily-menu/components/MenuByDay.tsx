'use client'
import Link from 'next/link';
import Image from 'next/image';
type Course = {
  type: string;
  name: string;
  description: string;
  detailedDescription: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

type Props = {
    menu: Course[];
}
export default function MenuByDate({menu}: Props) {
    const menuWithDesert = [
        ...menu, 
        {
            type: "Desert",
            name: "Desert din partea casei",
            description: "Surpriza bucătarului",
            detailedDescription: "",
            ingredients: "",
            allergens: [],
            image: "",
        }
    ];

    return (
            <div className="grid md:grid-cols-3 gap-8">
            {menuWithDesert.map((course, index) => (
                <Link  key={index}  href="/meniul-zilei">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group daily-menu-card">
                        <Image 
                            // src={course.image || "/drag-logo-simple-colored.png"}
                            src={"/drag-logo-simple-colored.png"}
                            alt={`${course.type}: ${course.name}`}
                            width={400}
                            height={300}
                            sizes="(min-width: 768px) 33vw, 90vw"
                            className="w-48 h-48 object-cover group-hover:scale-105 transition-transform duration-300 mx-auto"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <div className="mb-3">
                                <span className="inline-block text-gold py-1 text-sm font-medium mb-2">
                                    {course.type}
                                </span>
                                <h3 className="text-xl font-playfair font-semibold text-charcoal">{course.name}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{course.description}</p>
                            <p className="mt-2 text-gray-500 text-sm hover:underline">Vezi detalii</p>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
        
    );
}
