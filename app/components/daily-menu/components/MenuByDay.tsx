'use client'
import Link from 'next/link';
import Image from 'next/image';

type Course = {
  type: string;
  name: string;
  description: string;
  ingredients: string;
  allergens: string[];
  image: string;
};

type Props = {
  menu: Course[];
  isMobile: boolean;
};

export default function MenuByDate({ menu }: Props) {
  const list: Course[] = Array.isArray(menu[0]) ? (menu[0] as Course[]) : (menu as Course[]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {list.map((course, index) => (
        <MenuCard key={index} course={course} />
      ))}
    </div>
  );
}

function MenuCard({
  course,
}: {
  course: Course;
}) {

  // Card body content (shared between desktop & mobile-open)
  const CardBody = ({ withInnerLink }: { withInnerLink: boolean }) => (
    <div className="flex items-center px-4 py-6 w-full">
      <Image
        src={/* course.image || */ '/drag-logo-simple-colored.png'}
        alt={`${course.type}: ${course.name}`}
        width={200}
        height={200}
        sizes="(min-width: 768px) 33vw, 90vw"
        className="w-30 h-30 object-cover group-hover:scale-105 transition-transform duration-300 "
        loading="lazy"
      />
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block text-gold py-1 text-sm font-medium mb-2">
            {course.type}
          </span>
          <h3 className="text-xl font-playfair font-semibold text-charcoal wrap-break-word">
            {course.name}
          </h3>
        </div>

        {withInnerLink ? (
          <Link
            href="/meniul-zilei"
            className="mt-2 inline-block text-gray-500 text-sm hover:underline"
          >
            Vezi detalii
          </Link>
        ) : (
          <p className="mt-2 text-gray-500 text-sm hover:underline">Vezi detalii</p>
        )}
      </div>
    </div>
  );

  return (
    <Link href="/meniul-zilei" className="block">
      <article className="flex h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group daily-menu-card">
        <CardBody withInnerLink={false} />
      </article>
    </Link>
  );
}
