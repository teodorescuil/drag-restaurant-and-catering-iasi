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
                    food["Ciorbă de ciuperci"],
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
                food["Borș de vită"],
                food["Saramură de pui cu mămăligă"],
                desert,
                [
                    food["Supă de roșii cu linte"],
                    food["Chiftele vegetale cu sos și piure"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Ciorbă de perișoare a la grecque"],
                food["Gulaș de vită"],
                desert,
                [
                    food["Ciorbă de hribi și alte ciuperci"],
                    food["Chilli con vegetale cu cartof copt"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Borș de pui"],
                food["Spată de porc făcută încet la cuptor în sos de vin roșu și piure cu usturoi copt"],
                desert,
                [
                    food["Borș de fasole"],
                    food["Cod pane cu cartofi natur"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Borș de cartofi acrit cu lapte acru și dres cu ou"],
                food["Fasole prăjită cu cârnați"],
                desert,
                [
                    food["Borș cu sfeclă"],
                    food["Fasole prăjită de post"],
                    desert
                ]
            ],
        ],
    }, {
        week: '22 decembrie - 28 decembrie',
        days: [
            //LUNI
            [
                food["Ciorbă de fasole cu kaizer"],
                food["Ostropel de pui și mămăligă"],
                desert,
                [
                    food["Supă cremă de ciuperci"],
                    food["Păstăi sote cu usturoi și mămăligă"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă de pui"],
                food["Tocană de vită cu piure de cartofi"],
                desert,
                [
                    food["Ciorbă de fasole"],
                    food["Sarmale cu ciuperci și mămăligă"],
                    desert
                ]
            ], 
        ],
    }, {
        week: '5 ianuarie - 11 ianuarie',
        days: [
             [
                food["Borș de cartofi acrit cu lapte acru și dres cu ou"],
                food["Macrou în sos tomat și mămăligă"],
                desert
            ], [
                food["Borș de curcan"],
                food["Fasole prăjită cu cârnați"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Ostropel de pui cu piure"],
                desert
            ], [
                food["Borș de vită"],
                food["Varză călită cu kaizer și ciolan"],
                desert
            ], [
                food["Ciorbă de afumătură cu tarhon"],
                food["Tocană de purcel la cuptor cu piure"],
                desert
            ],
        ]
    }, {
        week: '12 ianuarie - 18 ianuarie',
        days: [
             [
                food["Ciorbă de vită"],
                food["Pui la ceaun cu mămăligă și usturoi"],
                desert
            ], [
                food["Ciorbă rădăuțeană"],
                food["Cârnați cu cașcaval"],
                desert
            ], [
                food["Borș de perișoare"],
                food["Pui cu smântână și ciuperci și mămăligă"],
                desert
            ], [
                food["Ciorbă de pui"],
                food["Chiftele cu sos și piure"],
                desert
            ], [
                food["Borș de fasole cu afumătură acrit cu zeamă de varză"],
                food["Gulaș de vită"],
                desert
            ],
        ]
    }, {
        week: '19 ianuarie - 25 ianuarie',
        days: [
             [
                food["Borș de afumătură"],
                food["Șnițele de pui cu piure"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Mici cu cartofi pai"],
                desert
            ], [
                food["Ciorbă de pui a la grecque"],
                food["Ceafă de porc la cuptor cu cartofi țărănești"],
                desert
            ], [
                food["Ciorbă de vită"],
                food["Pui Toscan cu orez"],
                desert
            ], [
                food["Borș de legume dres cu smântână și zdrențe de ou"],
                food["Escalop de porc cu ciuperci și piure de cartofi"],
                desert
            ],
        ]
    }, {
        week: '26 ianuarie - 1 februarie',
        days: [
             [
                food["Borș de fasole cu afumătură"],
                food["Tocană de ceapă cu aripi și mămăligă"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Ostropel de pui cu piure"],
                desert
            ], [
                food["Borș cu sfeclă"],
                food["Friptură de porc cu mămăligă și brânză de burduf"],
                desert
            ], [
                food["Ciorbă de afumătură cu tarhon"],
                food["Tocană de cartofi cu cârnați"],
                desert
            ], [
                food["Supă de pui cu găluște"],
                food["Sarmale cu mămăligă"],
                desert
            ],
        ]
    }, {
        week: '2 februarie - 8 februarie',
        days: [
             [
                food["Borș de vită"],
                food["Varză călită cu kaizer și ciolan"],
                desert
            ], [
                food["Ciorbă rădăuțeană"],
                food["Friptură de porc cu cartofi țărănești"],
                desert
            ], [
                food["Borș de afumătură"],
                food["Chilli con carne cu orez basmati"],
                desert
            ], [
                food["Ciorbă de curcan"],
                food["Fasole prăjită cu cârnați"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Tocană de purcel la cuptor cu piure"],
                desert
            ],
        ]
    }, {
        week: '9 februarie - 15 februarie',
        days: [
             [
                food["Borș de fasole cu afumătură acrit cu zeamă de varză"],
                food["Pui la ceaun cu mămăligă și usturoi"],
                desert
            ], [
                food["Ciorbă rădăuțeană"],
                food["Mici cu cartofi pai"],
                desert
            ], [
                food["Borș de perișoare"],
                food["Pui cu smântână și ciuperci și mămăligă"],
                desert
            ], [
                food["Ciorbă de vită"],
                food["Chiftele cu sos și piure"],
                desert
            ], [
                food["Ciorbă de pui"],
                food["Gulaș de vită"],
                desert
            ],
        ]
    }, {
        week: '16 februarie - 22 februarie',
        days: [
             [
                food["Borș de afumătură cu tarhon"],
                food["Șnițele de pui cu piure"],
                desert
            ], [
                food["Ciorbă de perișoare"],
                food["Ceafă de porc la cuptor cu cartofi țărănești"],
                desert
            ], [
                food["Ciorbă de pui a la grecque"],
                food["Mămăligă cu brânză și smântână"],
                desert
            ], [
                food["Ciorbă de vită"],
                food["Pui Toscan cu orez"],
                desert
            ], [
                food["Borș de legume dres cu smântână și zdrențe de ou"],
                food["Cotlet de porc vânătoresc"],
                desert
            ],
        ]
    },
    //POST PASTE
    {
        week: '23 februarie - 1 martie',
        days: [
            //LUNI
            [
                food["Ciorbă de afumătură"],
                food["Aripioare de pui cu sote de ceapă caramelizată și mămăliguță"],
                desert,
                [
                    food["Ciorbă de legume"],
                    food["Salată a la Rousse"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă de perișoare"],
                food["Friptură de vită înăbușită și piure de cartofi cu usturoi"],
                desert,
                [
                    food["Supă de roșii cu linte"],
                    food["Șnițele de soia cu piure de cartofi"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Borș cu sfeclă"],
                food["Mâncărică de cartofi cu cârnați și murături"],
                desert,
                [
                    food["Borș cu sfeclă"],
                    food["Mâncărică de cartofi"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă de curcan a la greque"],
                food["Pulpe de pui marinate în sos de iaurt cu bulgur și legume coapte"],
                desert,
                [
                    food["Ciorbă de ciuperci"],
                    food["Bulgur cu legume și piftele cu sos"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Borș de fasole cu afumătură"],
                food["Friptură de porc cu mămăligă și brânză de putină"],
                desert,
                [
                    food["Borș de fasole"],
                    food["Sarmale de post"],
                    desert
                ]
            ],
        ],
    }, {
        week: '2 martie - 8 martie',
        days: [
            //LUNI
            [
                food["Borș de vită"],
                food["Șnițele de pui cu piure"],
                desert,
                [
                    food["Borș de cartofi dres cu smântână vegetală"],
                    food["Paste cu sos de ciuperci"],
                    desert
                ]
            ], 
            //MARTI
            [
                food["Ciorbă rădăuțeană"],
                food["Varză călită cu kaizer și ciolan"],
                desert,
                [
                    food["Supa cremă de legume"],
                    food["Varză călită"],
                    desert
                ]
            ], 
            //MIERCURI
            [
                food["Borș de afumătură"],
                food["Aripioare de pui BBQ cu cartofi prăjiți"],
                desert,
                [
                    food["Ciorbă de legume"],
                    food["Gulaș de ciuperci"],
                    desert
                ]
            ], 
            //JOI
            [
                food["Ciorbă de pui"],
                food["Pulled pork cu cartofi copți și sos cheddar"],
                desert,
                [
                    food["Ciorbă de burtă cu ciuperci"],
                    food["Salată a la Rousse"],
                    desert
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de perișoare"],
                food["Fasole bătută cu cârnați cabanos"],
                desert,
                [
                    food["Ciorbă de fasole"],
                    food["Fasole bătută"],
                    desert
                ]
            ],
        ],
    }, {
        week: '9 martie - 15 martie',
        days: [
            //LUNI
            [
                food["Ciorbă de vită"],
                food["Pui la ceaun cu mămăligă și usturoi"],
                desert,
                [
                    food["Borș de cartofi cu sfeclă"],
                    food["Salată orientală de post"],
                    food["Gogoși"]
                ]
            ], 
            //MARTI
            [
                food["Borș de curcan"],
                food["Chiftele cu sos și piure"],
                desert,
                [
                    food["Supă cremă de ciuperci cu crutoane"],
                    food["Chiftele vegetale cu sos de roșii și piure"],
                    food["Clătite cu gem"]
                ]
            ], 
            //MIERCURI
            [
                food["Borș cu fasole și afumătură acrit cu zeamă de varză"],
                food["Pui cu smântână și ciuperci și mămăligă"],
                desert,
                [
                    food["Borș de fasole acrit cu zeamă de varză"],
                    food["Ciulama de ciuperci cu mămăligă (de post)"],
                    food["Salam de biscuiți (de post)"]
                ]
            ], 
            //JOI
            [
                food["Borș de perișoare"],
                food["Cartofi țărănești cu ceapă caramelizată, bacon și cârnați umpluți cu cașcaval"],
                desert,
                [
                    food["Ciorbă de păstăi dreasă cu smântână vegetală"],
                    food["Hummus cu falafel"],
                    food["Măr copt cu scorțișoară"]
                ]
            ], 
            //VINERI
            [
                food["Ciorbă de pui"],
                food["Gulaș de vită"],
                desert,
                [
                    food["Borș de legume"],
                    food["Tocană de cartofi cu murături"],
                    food["Negresă (de post)"]
                ]
            ],
        ],
    }, {
        week: '16 martie - 22 martie',
        days: [
            //LUNI
            [
                food["Borș de afumătură cu tarhon"],
                food["Șnițele de pui cu piure"],
                desert,
                [
                    food["Ciorbă de fasole"],
                    food["Șnițele de soia cu piure de cartofi"],
                    food["Salam de biscuiți (de post)"]
                ]
            ], 
            //MARTI
            [
                food["Ciorbă de perișoare"],
                food["Ceafă de porc la cuptor cu cartofi țărănești"],
                desert,
                [
                    food["Supă de roșii"],
                    food["Sarmale de post cu mămăliguță"],
                    food["Budincă de griș cu dulceață de afine (de post)"]
                ]
            ], 
            //MIERCURI
            [
                food["Ciorbă de pui a la grecque"],
                food["Fasole prăjită cu cârnați"],
                desert,
                [
                    food["Ciorbă falsă de burtă"],
                    food["Fasole prăjită cu murături"],
                    food["Negresă (de post)"]
                ]
            ], 
            //JOI
            [
                food["Ciorbă de vită"],
                food["Pui Toscan cu orez"],
                desert,
                [
                    food["Supă de linte"],
                    food["Gulaș de ciuperci"],
                    food["Clătite cu dulceață (de post)"]
                ]
            ], 
            //VINERI
            [
                food["Borș de legume dres cu smântână și zdrențe de ou"],
                food["Cotlet de porc vânătoresc cu piure"],
                desert,
                [
                    food["Ciorbă de legume"],
                    food["Chiftele vegetale cu piure de cartofi"],
                    food["Prăjitură cu morcov și nuci (de post)"]
                ]
            ],
        ],
    }, {
        week: '23 martie - 29 martie',
        days: [
            //LUNI
            [
                food["Borș de afumătură"],
                food["Aripioare de pui cu sote de ceapă caramelizată și mămăliguță"],
                desert,
                [
                    food["Ciorbă de cartofi dreasă cu smântână vegană"],
                    food["Salată orientală de post"],
                    food["Clătite cu dulceață (de post)"]
                ]
            ], 
            //MARTI
            [
                food["Ciorbă de perișoare"],
                food["Mușchiuleț de porc cu sos alb și ciuperci, piure de cartofi"],
                desert,
                [
                    food["Supă cremă de ciuperci (de post)"],
                    food["Mâncărică de cartofi cu murături"],
                    food["Plăcintă cu măr"]
                ]
            ], 
            //MIERCURI
            [
                food["Borș cu sfeclă"],
                food["Păstrăv cu mămăliguță și mujdei"],
                desert,
                [
                    food["Borș cu sfeclă"],
                    food["Păstrăv cu mămăliguță și mujdei"],
                    food["Măr copt cu scorțișoară"]
                ]
            ], 
            //JOI
            [
                food["Ciorbă de curcan a la greque"],
                food["Pulpe de pui marinate în sos de iaurt cu bulgur și legume coapte"],
                desert,
                [
                    food["Supă de roșii"],
                    food["Șnițele de soia și bulgur cu legume coapte"],
                    food["Gogoși"]
                ]
            ], 
            //VINERI
            [
                food["Borș de fasole cu afumătură"],
                food["Friptură de porc cu mămăligă și brânză de putină"],
                desert,
                [
                    food["Borș de fasole"],
                    food["Sarmale de post cu mămăliguță"],
                    food["Negresă (de post)"]
                ]
            ],
        ],
    },
    //POST PASTE
]