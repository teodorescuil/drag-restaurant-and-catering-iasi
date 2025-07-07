'use client';
export default function SocialButtons() {
    return (
        <>
            <a 
                href="https://www.facebook.com/dragcatering"
                target="_blank"
                className="bg-white/10 hover:bg-gold/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a 
                href="https://www.instagram.com/dragcatering/"
                target="_blank"
                className="bg-white/10 hover:bg-gold/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                <i className="fab fa-instagram"></i>
            </a>
        </>
    );
}
