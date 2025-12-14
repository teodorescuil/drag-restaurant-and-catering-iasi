import { food, desert } from "./food";
export const days = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'];
export const englishDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const foodWeeklyMenu = [
    {
        week: '3 noiembrie - 9 noiembrie',
        days: [
             [
                food["Supă de pui cu tăiței de casă"],
                food["Ceafă de porc în sos de vin roșu cu piure cu usturoi copt"],
                desert
            ], [
                food["Ciorbă de afumătură cu tarhon"],
                food["Pui Țigănesc cu orez"],
                desert
            ], [
                food["Borș de cartofi dres cu smântână și ou"],
                food["Iahnie de fasole cu cârnați"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Chiftele cu sos și piure"],
                desert
            ], [
                food["Borș de fasole cu afumătură"],
                food["Varză călită cu ciolan afumat"],
                desert
            ],
        ]
    }, {
        week: '10 noiembrie - 16 noiembrie',
        days: [
            //LUNI
            [
                food["Borș țărănesc de pui cu tăiței de casă"],
                food["Friptură de porc cu cartofi țărănești"],
                desert
            ], 
            //MARTI
            [
                food["Borș de afumătură făcută cu ciolan"],
                food["Pui Toscan cu orez"],
                desert
            ], 
            //MIERCURI
            [
                food["Ciorbă de perișoare"],
                food["Tocană de vițel cu piure"],
                desert
            ], 
            //JOI
            [
                food["Ciorbă de vită"],
                food["Friptură de pui cu mămăligă și mujdei"],
                desert
            ], 
            //VINERI
            [
                food["Borș de curcan"],
                food["Stroganof de porc cu orez"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Falafel cu hummus"],
                    desert
                ]
            ],
        ],
    }, {
        week: '17 noiembrie - 23 noiembrie',
        days: [
            //LUNI
            [
                food["Borș de pui"],
                food["Fasole bătută cu cârnați cabanos"],
                desert,
                [
                    food["Borș de legume cu jumeri de păstârnac"],
                    food["Fasole bătută, conopidă pane și murături"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Borș de afumătură făcută cu coaste"],
                food["Chilli con carne cu orez basmati"],
                desert,
                [
                    food["Ciorbă cu mix de ciuperci"],
                    food["Chilli con vegetale cu orez basmati"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Ciorbă de perișoare"],
                food["Ostropel de pui cu piure"],
                desert,
                [
                    food["Supă de roșii cu linte"],
                    food["Chiftele vegetale cu sos și piure"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă rădăuțeană"],
                food["Gulaș de vită"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Gulaș de ciuperci"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă măcelărească de porc"],
                food["Ceafă de porc în sos de vin roșu cu piure"],
                desert,
                [
                    food["Ciorbă de perișoare de pește"],
                    food["Macrou în sos tomat și mămăligă"],
                    desert
                ]
            ],
        ],
    }, {
        week: '24 noiembrie - 30 noiembrie',
        days: [
            //LUNI
            [
                food["Ciorbă de afumătură cu tarhon"],
                food["Carne de porc la garniță, mămăligă și brânză de putină"],
                desert,
                [
                    food["Borș de legume acrit cu zeamă de varză"],
                    food["Ciulama de ciuperci cu mămăligă"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă de perișoare"],
                food["Șnițele de pui cu piure"],
                desert,
                [
                    food["Borș de pește"],
                    food["Chiftele de pește cu sos de roșii și piure"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Supă de pui cu tăiței de casă"],
                food["Iahnie de fasole cu cârnați"],
                desert,
                [
                    food["Borș de cartofi cu sfeclă roșie"],
                    food["Iahnie de fasole"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă de vită"],
                food["Escalop de porc la tavă cu ciuperci și pilaf"],
                desert,
                [
                    food["Ciorbă falsă de burtă"],
                    food["Sarmale de post"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de pui a la grecque"],
                food["Pui cu smântână și ciuperci și mămăligă"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Falafel cu hummus"],
                    desert
                ]
            ],
        ],
    }, {
        week: '1 decembrie - 7 decembrie',
        days: [
            //LUNI
            [
                food["Borș de afumătură"],
                food["Iahnie de fasole cu ciolan afumat"],
                desert,
                [
                    food["Borș de legume"],
                    food["Iahnie de fasole"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Borș de pui"],
                food["Ceafă de porc la cuptor cu cartofi țărănești"],
                desert,
                [
                    food["Ciorbă de perișoare de pește"],
                    food["Macrou în sos tomat"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Ciorbă de perișoare"],
                food["Pui la ceaun cu mămăligă și usturoi"],
                desert,
                [
                    food["Ciorbă de hribi și alte ciuperci"],
                    food["Chiftele vegetale cu sos și piure"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Borș de fasole cu afumătură acrit cu zeamă de varză"],
                food["Chiftele cu sos și piure"],
                desert,
                [
                    food["Borș de pește"],
                    food["Saramură de crap cu mămăligă"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de burtă"],
                food["Pilaf cu pulpe la cuptor"],
                desert,
                [
                    food["Ciorbă falsă de burtă"],
                    food["Ciulama de ciuperci cu mămăligă"],
                    desert
                ]
            ],
        ],
    }, {
        week: '8 decembrie - 14 decembrie',
        days: [
            //LUNI
            [
                food["Borș de curcan"],
                food["Stroganof de porc cu orez"],
                desert,
                [
                    food["Supă de roșii cu linte"],
                    food["Chilli con vegetale cu orez basmati"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă rădăuțeană"],
                food["Varză murată călită cu ciolan și kaizer"],
                desert,
                [
                    food["Borș de pește"],
                    food["Macrou prăjit cu mămăligă și usturoi"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Borș de afumătură"],
                food["Friptură de porc cu cartofi țărănești"],
                desert,
                [
                    food["Ciorbă de hribi și alte ciuperci"],
                    food["Sarmale de post"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă de perișoare"],
                food["Tocană de vițel cu prune uscate și piure"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Gulaș de ciuperci"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de vită"],
                food["Pui Toscan cu orez"],
                desert,
                [
                    food["Borș de cartofi cu sfeclă roșie"],
                    food["Praz cu măsline și pâinea casei"],
                    desert
                ]
            ],
        ],
    }, {
        week: '15 decembrie - 21 decembrie',
        days: [
            //LUNI
            [
                food["Borș de afumătură cu cartofi acrit cu zeamă de varză"],
                food["Escalop de porc cu ciuperci și piure de cartofi"],
                desert,
                [
                    food["Borș de legume acrit cu zeamă de varză"],
                    food["Fasole bătută"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă rădăuțeană"],
                food["Varză murată călită cu ciolan și kaizer"],
                desert,
                [
                    food["Borș de pește"],
                    food["Macrou prăjit cu mămăligă și usturoi"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Borș de afumătură"],
                food["Friptură de porc cu cartofi țărănești"],
                desert,
                [
                    food["Ciorbă de hribi și alte ciuperci"],
                    food["Sarmale de post"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă de perișoare"],
                food["Tocană de vițel cu prune uscate și piure"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Gulaș de ciuperci"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de vită"],
                food["Pui Toscan cu orez"],
                desert,
                [
                    food["Borș de cartofi cu sfeclă roșie"],
                    food["Praz cu măsline și pâinea casei"],
                    desert
                ]
            ],
        ],
    }
]