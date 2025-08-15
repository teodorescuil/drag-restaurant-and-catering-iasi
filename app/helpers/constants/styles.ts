/*---------BUTTONS------------*/
const button = "border-2 text-white px-8 py-4 rounded-full text-lg font-semibold min-w-2xs";
export const primaryButton = button.concat(" border-gold hover:border-gold bg-gold hover:bg-gold/90");
export const primaryButtonWithScale = primaryButton.concat(" transition-all duration-200 transform hover:scale-105")
export const outlineButton = button.concat(" border-white hover:border-gold hover:bg-gold/90");
export const outlineButtonWithScale = outlineButton.concat(" transition-all duration-200 transform hover:scale-105");
/*---------BUTTONS------------*/

/*---------TEXTS------------*/
export const sectionTopTitle = "text-gold font-semibold text-sm uppercase tracking-wider";
export const sectionTitle = "text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4";
export const sectionSubtitle = "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed";
/*---------TEXTS------------*/

export const sectionWrapper = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
export const sectionInfoContent = "text-center mb-16"