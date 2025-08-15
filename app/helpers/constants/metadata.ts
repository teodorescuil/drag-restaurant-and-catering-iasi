export const generalInfoLabels = {
    title: 'Drag Catering',
    contact: {
        phone: '+40 754 824 625',
        email: 'info@dragcatering.ro',
        address: {
            street: 'Bulevardul Poitiers 12',
            city: 'Iași',
            zipCode: '700671',
            country: 'România',
        },
        businessHours: ['L-J 10:00 - 22:00', 'V-D 10:00 - 00:00'] 
    },
    hero: {
        title: 'Farfurii Speciale Create cu Drag și Pasiune',
        subtitle: 'Fiecare fel de mâncare este o capodoperă creată cu drag și devotament. De la aperitive frumos aranjate la feluri principale impresionante, punem suflet în fiecare preparat pentru a crea artă culinară care încântă atât ochiul, cât și papilele gustative.',
        buttons: ['Vezi meniul de azi', 'Vezi meniul complet'],
    },
    weeklyMenu: {
        topTitle: 'Meniu Săptămânal',
        title: 'Selecții Zilnice Proaspete',
        subtitle: 'Meniul nostru se schimbă săptămânal cu ingrediente proaspete de sezon și specialitățile chef-ului',
        buttons: ['Comandă prin telefon', '+40 754 824 625'],
        week: 'Săptămâna',
        menuText: 'Meniul de',
        today: 'Azi',
        price: 'Preț: 30 lei'
    },
    footer: {
        subtitle: 'Meniuri proaspete zilnic și servicii excepționale pentru toate ocaziile tale speciale.',
        quickLinks: 'Linkuri rapide',
        allRights: 'Toate drepturile sunt rezervate',
        termsAndServices: 'Termeni și condiții',
        privacyPolicy: 'Politica de confidențialitate',
    },

};

export const services = [
    {
      icon: "fas fa-heart",
      title: "Nunți Premium",
      description: "Transformăm ziua voastră specială într-o experiență culinară de neuitat. Servicii complete de catering pentru nunți elegante și memorabile, de la aperitiv până la tort.",
      features: [
        "Meniu personalizat pentru aperitiv și felul principal",
        "Serviciu profesional cu chelner pentru 8-10 invitați",
        "Cocktail de întâmpinare și canapele rafinate",
        "Decorațiuni florale pentru mesele de servire",
        "Serviciu de tort și cafea premium"
      ],
      capacity: "50-300 persoane",
      priceRange: "180-320 lei/persoană",
      image: "/images/wedding.jpg"
    },
    {
      icon: "fas fa-building",
      title: "Evenimente Corporate",
      description: "Catering profesional pentru conferințe, seminarii și lansări de produse. Servicii adaptate nevoilor specifice ale companiilor cu accent pe profesionalism.",
      features: [
        "Coffee break cu preparate dulci și sărate",
        "Lunch business cu meniu în 2-3 feluri",
        "Cocktail networking cu canapele rafinate", 
        "Cină de gală pentru evenimente speciale",
        "Serviciu discret și profesional"
      ],
      capacity: "20-200 persoane",
      priceRange: "85-250 lei/persoană",
      image: "/images/corporate.jpg"
    },
    {
      icon: "fas fa-birthday-cake",
      title: "Petreceri Private",
      description: "Servicii personalizate pentru aniversări, sărbători de familie și evenimente private. Creăm atmosfera perfectă pentru momentele voastre speciale.",
      features: [
        "Meniuri tematice pentru aniversări",
        "Buffet festiv pentru sărbători",
        "Decorare personalizată",
        "Servicii pentru copii și adulți",
        "Torturi și deserturi speciale"
      ],
      capacity: "15-150 persoane", 
      priceRange: "120-280 lei/persoană",
      image: "/images/private-party.jpg"
    }
  ];