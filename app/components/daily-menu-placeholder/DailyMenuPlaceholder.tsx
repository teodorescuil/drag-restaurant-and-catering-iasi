
import Link from 'next/link';
export default function DailyMenuPlaceholder() {
  return (
    <>
    <p className="text-gray-600 italic md:text-xl">Meniul săptămânii viitoare e în pregătire — promitem prospețime și gust autentic!</p>
    <p className="text-gray-600 md:text-xl font-bold mt-4">Între timp, poți explora meniul nostru complet și platourile disponibile.</p>
    <div className="mt-6 flex justify-center gap-4">
        <Link
        href="/meniu"
        className="secondary"
        aria-label="Vezi Meniul"
        >
        Meniu
        </Link>

        <Link
        href="/platouri"
        className="secondary"
        aria-label="Vezi Platouri"
        >
        Platouri
        </Link>
    </div>
    </>
  );
}