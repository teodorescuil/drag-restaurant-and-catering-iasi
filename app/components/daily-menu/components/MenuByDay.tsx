'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronDown } from 'lucide-react';

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
  isMobile: boolean;
};

export default function MenuByDate({ menu, isMobile }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {menu.map((course, index) => (
        <MenuCard key={index} idx={index} course={course} isMobile={isMobile} />
      ))}
    </div>
  );
}

function MenuCard({
  course,
  isMobile,
  idx,
}: {
  course: Course;
  isMobile: boolean;
  idx: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `menu-panel-${idx}`;

  // Only used on mobile (compact row with arrow + type + name)
  const MobileHeader = () => (
    <button
      type="button"
      onClick={() => setIsOpen((s) => !s)}
      className="flex items-center w-4xl px-4 py-3 text-left gap-3"
      aria-expanded={isOpen}
      aria-controls={panelId}
    >
      {isOpen ? (
        <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" />
      ) : (
        <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
      )}

      {/* Show type + name ONLY when closed */}
      {!isOpen && (
        <span className="flex items-center gap-2 w-">
          <span className="text-gold text-sm font-medium whitespace-nowrap">
            {course.type}
          </span>
          <span className="text-base font-semibold text-charcoal">
            {course.name}
          </span>
        </span>
      )}
    </button>
  );

  // Card body content (shared between desktop & mobile-open)
  const CardBody = ({ withInnerLink }: { withInnerLink: boolean }) => (
    <>
      <Image
        src={/* course.image || */ '/drag-logo-simple-colored.png'}
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
          <h3 className="text-xl font-playfair font-semibold text-charcoal">
            {course.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm">{course.description}</p>

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
    </>
  );

  if (!isMobile) {
    // DESKTOP: whole card is a link (original behavior)
    return (
      <Link href="/meniul-zilei" className="block">
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group daily-menu-card">
          <CardBody withInnerLink={false} />
        </article>
      </Link>
    );
  }

  // MOBILE: dropdown behavior
  return (
    <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group daily-menu-card">
      <MobileHeader />
      {isOpen && (
        <div id={panelId} className="border-t border-gray-100">
          {/* On mobile-open, we include the inner Link on "Vezi detalii" */}
          <CardBody withInnerLink />
        </div>
      )}
    </div>
  );
}
