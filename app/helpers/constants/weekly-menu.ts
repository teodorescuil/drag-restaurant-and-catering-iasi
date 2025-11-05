export const days = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'];

export const englishDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const foodWeeklyMenu = [
    {
        week: '3 noiembrie - 9 noiembrie',
        days: [
             [
                 {
                    type: "Felul întâi",
                    name: "Supă de pui cu tăiței de casă",
                    description: "Supă de pui cu tăiței de casă – un preparat tradițional românesc, aromat și ușor, cu carne de pui, legume și tăiței de casă fini.",
                    ingredients: "pui, morcovi, ceapă, rădăcină de pătrunjel, țelină, ardei gras, sare, piper boabe, pătrunjel verde, ou, făină de grâu",
                    allergens: ["ouă", "gluten", "țelină"],
                    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    },
                {
                    type: "Felul doi",
                    name: "Ceafă de porc în sos de vin roșu cu piure cu usturoi copt",
                    description: "Ceafă de porc fragedă, gătită în sos de vin roșu aromat, servită cu piure cremos cu usturoi copt.",
                    ingredients: "ceafă de porc, vin roșu, ceapă, morcov, usturoi, bulion sau pastă de roșii, ulei, unt, cartofi, lapte, sare, piper, rozmarin, foi de dafin",
                    allergens: ["lapte", "usturoi"],
                    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                },
                {
                    type: "Desert",
                    name: "Surpriza bucătarului",
                    description: "Desertul zilei, pregătit cu ingrediente proaspete și produse locale, oferă mereu o surpriză dulce și autentică.",
                    ingredients: "Variază zilnic în funcție de desertul pregătit",
                    allergens: [],
                    image: "https://images.unsplash.com/photo-1601979031466-3ccde7c49a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }
            ], [
                {
                    type: "Felul întâi",
                    name: "Ciorbă de afumătură cu tarhon",
                    description: "Ciorbă tradițională ardelenească, cu afumătură fragedă și aromă intensă de tarhon.",
                    ingredients: "carne afumată (coaste sau ciolan), morcovi, ceapă, țelină, ardei gras, cartofi, usturoi, tarhon, oțet, smântână, ulei, sare, piper.",
                    allergens: ["lapte"],
                    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    },
                    {
                    type: "Felul doi",
                    name: "Pui Țigănesc cu orez",
                    description: "Pui fraged în sos aromat de legume, servit cu orez pufos și plin de savoare.",
                    ingredients: "carne de pui, ceapă, ardei gras, roșii sau pastă de roșii, usturoi, ulei, sare, piper, boia dulce, foi de dafin, orez, apă sau supă de pui.",
                    allergens: ["fără alergeni majori (poate conține urme de țelină sau gluten, în funcție de condimentele utilizate)."],
                    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    }, {
                    type: "Desert",
                    name: "Surpriza bucătarului",
                    description: "Desertul zilei, pregătit cu ingrediente proaspete și produse locale, oferă mereu o surpriză dulce și autentică.",
                    ingredients: "Variază zilnic în funcție de desertul pregătit",
                    allergens: [],
                    image: "https://images.unsplash.com/photo-1601979031466-3ccde7c49a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }
            ], [
                {
                    type: "Felul întâi",
                    name: "Borș de cartofi dres cu smântână și ou",
                    description: "Ciorbă tradițională de cartofi, acrișoară și cremoasă, dreasă cu smântână și ou.",
                    ingredients: "cartofi, ceapă, morcovi, ardei gras, țelină, borș, ou, smântână, ulei, sare, piper, leuștean",
                    allergens: ["ouă", "lapte", "țelină"],
                    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    },
                    {
                    type: "Felul doi",
                    name: "Iahnie de fasole cu cârnați",
                    description: "Fasole gătită lent în sos aromat de legume, servită cu cârnați afumați.",
                    ingredients: "fasole albă, cârnați afumați, ceapă, morcov, usturoi, pastă de roșii, ulei, foi de dafin, cimbru, sare, piper",
                    allergens: ["fără alergeni majori (poate conține urme de muștar sau gluten, în funcție de cârnați și condimente)"],
                    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }, {
                    type: "Desert",
                    name: "Surpriza bucătarului",
                    description: "Desertul zilei, pregătit cu ingrediente proaspete și produse locale, oferă mereu o surpriză dulce și autentică.",
                    ingredients: "Variază zilnic în funcție de desertul pregătit",
                    allergens: [],
                    image: "https://images.unsplash.com/photo-1601979031466-3ccde7c49a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }
            ], [
                {
                    type: "Felul întâi",
                    name: "Ciorbă de perișoare",
                    description: "Ciorbă tradițională cu perișoare fragede din carne tocată, legume și borș acrișor.",
                    ingredients: "carne tocată de pui, orez, ceapă, morcovi, țelină, ardei gras, ou, borș, pastă de roșii, ulei, sare, piper, leuștean",
                    allergens: ["ouă", "țelină"],
                    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    },
                    {
                    type: "Felul doi",
                    name: "Chiftele cu sos și piure",
                    description: "Chiftele fragede în sos de roșii, servite cu piure cremos de cartofi.",
                    ingredients: "carne tocată (porc sau amestec porc-vită), ceapă, usturoi, ou, pesmet, sare, piper, ulei, pastă de roșii, foi de dafin, zahăr, cartofi, lapte, unt.",
                    allergens: ["ouă", "lactoză"],
                    image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }, {
                    type: "Desert",
                    name: "Surpriza bucătarului",
                    description: "Desertul zilei, pregătit cu ingrediente proaspete și produse locale, oferă mereu o surpriză dulce și autentică.",
                    ingredients: "Variază zilnic în funcție de desertul pregătit",
                    allergens: [],
                    image: "https://images.unsplash.com/photo-1601979031466-3ccde7c49a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }
            ], [
                {
                    type: "Felul întâi",
                    name: "Borș de fasole cu afumătură",
                    description: "Ciorbă tradițională cu fasole și afumătură, aromată și ușor acrișoară.",
                    ingredients: "fasole albă, carne afumată (coaste sau ciolan), ceapă, morcovi, țelină, ardei gras, pastă de roșii, borș, ulei, sare, piper, cimbru, foi de dafin, leuștean",
                    allergens: ["țelină"],
                    image: "https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    },
                    {
                    type: "Felul doi",
                    name: "Varză călită cu ciolan afumat",
                    description: "Varză fragedă călită lent, servită cu ciolan afumat aromat.",
                    ingredients: "varză proaspătă, ciolan afumat, ceapă, pastă de roșii, ulei, sare, piper, boia, cimbru, foi de dafin, mărar",
                    allergens: ["fără alergeni majori (poate conține urme de muștar sau gluten, în funcție de condimentele folosite)."],
                    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                },{
                    type: "Desert",
                    name: "Surpriza bucătarului",
                    description: "Desertul zilei, pregătit cu ingrediente proaspete și produse locale, oferă mereu o surpriză dulce și autentică.",
                    ingredients: "Variază zilnic în funcție de desertul pregătit",
                    allergens: [],
                    image: "https://images.unsplash.com/photo-1601979031466-3ccde7c49a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                }
            ],
        ]
    }
]