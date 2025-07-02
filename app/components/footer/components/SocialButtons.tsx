'use-client';
export default function SocialButtons() {
    return (
        <>
            <a 
                href="#" 
                className="bg-white/10 hover:bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <a 
                href="#" 
                className="bg-white/10 hover:bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                <i className="fab fa-instagram"></i>
            </a>
            <a 
                href="#" 
                className="bg-white/10 hover:bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>
        </>
    );
}
