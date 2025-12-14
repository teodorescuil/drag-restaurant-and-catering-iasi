type Category = {
  id: string;
  label: string;
};

interface TabsProps {
  categories: Category[];
  setExpandedCardId: (id: string | null) => void;
  activeCategoryId: string | null;
  setActiveCategoryId: (id: string) => void;
}

export default function Tabs({ categories, setExpandedCardId, activeCategoryId, setActiveCategoryId }: TabsProps) {
  return (
    <>
      {/* Tab-uri categorii */}
      <div className="relative mb-8">

        {/* Scrollable on mobile, wrap on desktop */}
        <div
          className="
            flex 
            lg:justify-center
            gap-2
            overflow-x-auto 
            pb-1
            no-scrollbar
            [-webkit-overflow-scrolling:touch]
            px-8

            lg:overflow-visible     /* la desktop, eliminăm scrollul */
            lg:flex-wrap            /* wrap */
            lg:gap-3
          "
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategoryId(category.id);
                setExpandedCardId(null);
              }}
              className={`
                shrink-0
                px-3 py-1.5 text-xs
                md:px-4 md:py-2 md:text-sm
                rounded-full font-medium border transition-all
                ${
                  activeCategoryId === category.id
                    ? 'bg-gold text-white border-gold shadow-sm'
                    : 'bg-white text-charcoal border-gray-200 hover:bg-gold/5'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gradient right – doar pentru mobile */}
        <div
          className="
            pointer-events-none
            absolute top-0 right-0 h-full w-10
            bg-gradient-to-l from-white via-white/70 to-transparent
            md:hidden   /* ascunde gradientul pe desktop */
          "
        />

        {/* Gradient left – doar pentru mobile */}
        <div
          className="
            pointer-events-none
            absolute top-0 left-0 h-full w-10
            bg-gradient-to-r from-white via-white/70 to-transparent
            md:hidden   /* ascunde gradientul pe desktop */
          "
        />
      </div>
    </>
  );
}
