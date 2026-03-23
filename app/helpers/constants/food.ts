export const desert = {
    type: "Desert",
    name: "Surpriza bucătarului",
    ingredients: "Variază zilnic în funcție de desertul pregătit",
    allergens: []
}

export const food = {
    ///// ÎNTÂI: preparatele FILTRATE /////
    "Borș de curcan": {
        type: "Felul întâi",
        name: "Borș de curcan",
        ingredients: "carne de curcan, morcovi, ceapă, țelină, ardei gras, roșii, borș, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Ciorbă de curcan": {
        type: "Felul întâi",
        name: "Ciorbă de curcan",
        ingredients: "carne de curcan, morcovi, ceapă, țelină, ardei gras, roșii, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Ciorbă de legume": {
        type: "Felul întâi",
        name: "Ciorbă de legume",
        ingredients: "morcovi, ceapă, țelină, ardei gras, cartofi, dovlecei, fasole verde, roșii sau pastă de roșii, borș, ulei, sare, piper, pătrunjel.",
        allergens: []
    },
    "Borș cu fasole și afumătură acrit cu zeamă de varză": {
        type: "Felul întâi",
        name: "Borș cu fasole și afumătură acrit cu zeamă de varză",
        ingredients: "fasole boabe, afumătură (ciolan sau costiță afumată), ceapă, morcovi, țelină, păstârnac, ardei gras, roșii sau suc de roșii, ulei, zeamă de varză, foi de dafin, cimbru, leuștean, sare, piper.",
        allergens: []
    },
    "Stroganof de porc cu orez": {
        type: "Felul principal",
        name: "Stroganof de porc cu orez",
        ingredients: "cotlet  de porc, ciuperci, ceapă, smântână, pastă de roșii, orez, ulei, sare, piper",
        allergens: ["lapte"]
    },
    "Ciorbă de curcan a la greque": {
        type: "Felul întâi",
        name: "Ciorbă de curcan a la greque",
        ingredients: "carne de curcan, morcovi, ceapă, țelină, ardei gras, orez, ouă, smântână, lămâie, ulei, sare, piper, pătrunjel.",
        allergens: ["ouă", "lapte"]
    },
    "Supă de roșii cu linte": {
        type: "Felul întâi",
        name: "Supă de roșii cu linte",
        ingredients: "roșii, linte roșie, morcovi, ceapă, țelină, ardei gras, usturoi, ulei, sare, piper, busuioc, pătrunjel",
        allergens: ["țelină"]
    },
    "Supă de linte": {
        type: "Fel principal",
        name: "Supă de linte",
        ingredients: "linte, ceapă, morcov, ardei, roșii sau pastă de roșii, usturoi, ulei, sare, piper, foi de dafin, apă.",
        allergens: []
    },
    "Supă de roșii": {
        type: "Felul întâi",
        name: "Supă de roșii",
        ingredients: "roșii, morcovi, ceapă, țelină, ardei gras, usturoi, ulei, sare, piper, busuioc, pătrunjel",
        allergens: ["țelină"]
    },
    "Chilli con vegetale cu orez basmati": {
        type: "Felul principal",
        name: "Chilli con vegetale cu orez basmati",
        ingredients: "fasole roșie, porumb dulce, ardei gras, dovlecel, morcov, ceapă, usturoi, roșii, ardei iute, orez basmati, ulei, sare, piper, boia afumată, chimion",
        allergens: []
    },
    "Ciorbă rădăuțeană": {
        type: "Felul întâi",
        name: "Ciorbă rădăuțeană",
        ingredients: "piept de pui, morcovi, țelină, păstârnac, ceapă, usturoi, ouă, smântână, oțet, sare, piper, pătrunjel",
        allergens: ["ouă", "lapte", "țelină"]
    },
    "Varză murată călită cu ciolan și kaizer": {
        type: "Felul doi",
        name: "Varză murată călită cu ciolan și kaizer",
        ingredients: "varză murată, ciolan, kaizer, ceapă, pastă de roșii, ulei, sare, piper, boia, cimbru, foi de dafin, mărar"
    },
    "Borș de pește": {
        type: "Felul întâi",
        name: "Borș de pește",
        ingredients: "pește, ceapă, morcovi, țelină, ardei gras, roșii, orez, borș, sare, piper, leuștean, ulei",
        allergens: ["pește", "țelină"]
    },
    "Macrou prăjit cu mămăligă și usturoi": {
        type: "Felul principal",
        name: "Macrou prăjit cu mămăligă și usturoi",
        ingredients: "macrou, mălai, apă, sare, ulei, usturoi",
        allergens: ["pește"]
    },
    "Borș de afumătură": {
        type: "Felul întâi",
        name: "Borș de afumătură",
        ingredients: "coaste de porc afumate, morcovi, ceapă, țelină, ardei gras, cartofi, roșii, borș, ulei, sare, piper, leuștean, pătrunjel",
        allergens: ["țelină"]
    },
    "Carne de porc la garniță, mămăligă și brânză de putină": {
        type: "Felul principal",
        name: "Carne de porc la garniță, mămăligă și brânză de putină",
        ingredients: "carne de porc, untură, sare, piper, usturoi, foi de dafin, vin alb, cimbru, mămăligă (mălai, apă, sare), brânză de putină",
        allergens: ["lapte"]
    },
    "Ciorbă de hribi și alte ciuperci": {
        type: "Ciorbă",
        name: "Ciorbă de hribi și alte ciuperci",
        ingredients: "hribi, ciuperci champignon sau alte ciuperci de pădure, ceapă, morcov, țelină, usturoi, cartofi, borș sau lămâie, leuștean sau pătrunjel, ulei, sare, piper",
        allergens: ["țelină"]
    },
    "Sarmale de post": {
        type: "Felul principal",
        name: "Sarmale de post",
        ingredients: "varză murată, orez, ceapă, ciuperci, morcov, ardei gras, pastă de roșii, ulei, sare, piper, cimbru, mărar, foi de dafin",
        allergens: []
    },
    "Sarmale de post cu mămăliguță": {
        type: "Fel principal",
        name: "Sarmale de post cu mămăliguță",
        ingredients: "varză murată sau foi de varză, orez, ceapă, morcov, pastă de roșii, ulei, condimente (sare, piper, cimbru, foi de dafin), apă, mălai.",
        allergens: []
    },
    "Ciorbă de perișoare": {
        type: "Felul întâi",
        name: "Ciorbă de perișoare",
        ingredients: "carne tocată de pui, orez, ceapă, morcovi, țelină, ardei gras, ou, borș, pastă de roșii, ulei, sare, piper, leuștean",
        allergens: ["ou", "țelină"]
    },
    "Tocană de vițel cu prune uscate și piure": {
        type: "Felul principal",
        name: "Tocană de vițel cu prune uscate și piure",
        ingredients: "carne de vițel, prune uscate, ceapă, morcov, usturoi, roșii, vin roșu, cartofi, lapte, unt, sare, piper",
        allergens: ["lapte"]
    },
    "Borș de fasole acrit cu zeamă de varză": {
        type: "Felul întâi",
        name: "Borș de fasole acrit cu zeamă de varză",
        ingredients: "fasole boabe, morcovi, ceapă, țelină, ardei gras, roșii, zeamă de varză, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Gulaș de ciuperci": {
        type: "Felul principal",
        name: "Gulaș de ciuperci",
        ingredients: "ciuperci champignon, ceapă, morcovi, ardei gras, roșii, pastă de roșii, usturoi, ulei, boia dulce, chimen, sare, piper, pătrunjel",
        allergens: []
    },
    "Ciorbă de vită": {
        type: "Felul întâi",
        name: "Ciorbă de vită",
        ingredients: "carne de vită, morcovi, ceapă, țelină, ardei gras, roșii, borș, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Pui Toscan cu orez": {
        type: "Felul doi",
        name: "Pui Toscan cu orez",
        ingredients: "carne de pui, smântână pentru gătit, roșii uscate, spanac, usturoi, ceapă, ulei de măsline , sare, piper, orez",
        allergens: ["lapte"]
    },
    "Borș de cartofi cu sfeclă roșie": {
        type: "Felul întâi",
        name: "Borș de cartofi cu sfeclă roșie",
        ingredients: "cartofi, sfeclă roșie, morcovi, ceapă, țelină, ardei gras, pastă de roșii, borș, ulei, sare, piper, leuștean, mărar",
        allergens: ["țelină"]
    },
    "Praz cu măsline și pâinea casei": {
        type: "Felul principal",
        name: "Praz cu măsline și pâinea casei",
        ingredients: "praz, măsline negre, ceapă, roșii, ulei, sare, piper, foi de dafin, pâine de casă",
        allergens: ["gluten"]
    },

    ///// APOI: restul preparatelor /////
    "Borș țărănesc de pui cu tăiței de casă": {
        type: "Felul întâi",
        name: "Borș țărănesc de pui cu tăiței de casă",
        ingredients: "pui, morcovi, ceapă, rădăcină de pătrunjel, țelină, ardei gras, sare, piper boabe, pătrunjel verde, ou, făină de grâu",
        allergens: ["ouă", "gluten", "țelină"]
    },
    "Borș de afumătură făcută cu ciolan": {
        type: "Felul întâi",
        name: "Borș de afumătură făcută cu ciolan",
        ingredients: "ciolan afumat, morcovi, ceapă, țelină, ardei gras, cartofi, usturoi, borș, pastă de roșii, ulei, sare, piper, foi de dafin, cimbru, leuștean",
        allergens: ["țelină"]
    },
    "Ciorbă de burtă": {
        type: "Ciorbă",
        name: "Ciorbă de burtă",
        ingredients: "burtă de vită, oase de vită, morcov, țelină, ceapă, usturoi, ouă, smântână, oțet, sare, piper, ardei iute",
        allergens: ["ouă", "lactate"]
    },
    "Supă de pui cu tăiței de casă": {
        type: "Felul întâi",
        name: "Supă de pui cu tăiței de casă",
        ingredients: "pui, morcovi, ceapă, rădăcină de pătrunjel, țelină, ardei gras, sare, piper boabe, pătrunjel verde, ou, făină de grâu",
        allergens: ["ouă", "gluten", "țelină"]
    },
    "Ciorbă de afumătură cu tarhon": {
        type: "Felul întâi",
        name: "Ciorbă de afumătură cu tarhon",
        ingredients: "carne afumată (coaste sau ciolan), morcovi, ceapă, țelină, ardei gras, cartofi, usturoi, tarhon, oțet, ulei, sare, piper.",
        allergens: ["lapte"]
    },
    "Ciorbă de afumătură": {
        type: "Felul întâi",
        name: "Ciorbă de afumătură",
        ingredients: "carne afumată (ciolan sau costiță), morcovi, ceapă, țelină, ardei gras, cartofi, roșii sau pastă de roșii, usturoi, pătrunjel, borș sau zeamă de varză, ulei, sare, piper.",
        allergens: []
    },
    "Borș de afumătură cu tarhon": {
        type: "Felul întâi",
        name: "Borș de afumătură cu tarhon",
        ingredients: "carne afumată (coaste sau ciolan), morcovi, ceapă, țelină, ardei gras, cartofi, usturoi, tarhon, oțet, ulei, sare, piper.",
        allergens: ["lapte"]
    },
    "Borș de cartofi dres cu smântână și ou": {
        type: "Felul întâi",
        name: "Borș de cartofi dres cu smântână și ou",
        ingredients: "cartofi, ceapă, morcovi, ardei gras, țelină, borș, ou, smântână, ulei, sare, piper, leuștean",
        allergens: ["ouă", "lapte", "țelină"]
    },
    "Borș de cartofi dres cu smântână vegetală": {
        type: "Felul întâi",
        name: "Borș de cartofi dres cu smântână vegetală",
        ingredients: "cartofi, ceapă, morcovi, ardei gras, țelină, borș, smântână vegetală, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Borș de fasole cu afumătură": {
        type: "Felul întâi",
        name: "Borș de fasole cu afumătură",
        ingredients: "fasole albă, carne afumată (coaste sau ciolan), ceapă, morcovi, țelină, ardei gras, pastă de roșii, borș, ulei, sare, piper, cimbru, foi de dafin, leuștean",
        allergens: ["țelină"]
    },
    "Borș de pui": {
        type: "Felul întâi",
        name: "Borș de pui",
        ingredients: "carne de pui, morcovi, ceapă, țelină, ardei gras, roșii, borș, orez, ulei, sare, piper, leuștean, pătrunjel",
        allergens: ["țelină"]
    },
    "Borș de legume cu jumeri de păstârnac": {
        type: "Felul întâi",
        name: "Borș de legume cu jumeri de păstârnac",
        ingredients: "morcovi, păstârnac, țelină, cartofi, ardei gras, ceapă, roșii, borș, ulei, sare, piper, leuștean, pătrunjel",
        allergens: ["țelină"]
    },
    "Borș de afumătură făcută cu coaste": {
        type: "Felul întâi",
        name: "Borș de afumătură făcută cu coaste",
        ingredients: "coaste de porc afumate, morcovi, ceapă, țelină, ardei gras, cartofi, roșii, borș, ulei, sare, piper, leuștean, pătrunjel",
        allergens: ["țelină"]
    },
    "Ciorbă de ciuperci": {
        type: "Felul întâi",
        name: "Ciorbă de ciuperci",
        ingredients: "ciuperci, ceapă, morcovi, țelină, ardei gras, cartofi, smântână, usturoi, ulei, sare, piper, pătrunjel, borș.",
        allergens: ["lapte"]
    },
    "Ciorbă măcelărească de porc": {
        type: "Felul întâi",
        name: "Ciorbă măcelărească de porc",
        ingredients: "carne de porc, morcovi, ceapă, țelină, ardei gras, cartofi, roșii, borș, usturoi, ulei, sare, piper, leuștean, pătrunjel",
        allergens: ["țelină"]
    },
    "Ciorbă de perișoare de pește": {
        type: "Felul întâi",
        name: "Ciorbă de perișoare de pește",
        ingredients: "file de pește alb, morcovi, ceapă, țelină, ardei gras, orez, ou, borș, ulei, sare, piper, pătrunjel",
        allergens: ["pește", "țelină", "ouă"]
    },
    "Borș de legume acrit cu zeamă de varză": {
        type: "Felul întâi",
        name: "Borș de legume acrit cu zeamă de varză",
        ingredients: "cartofi, morcovi, țelină, păstârnac, ardei gras, ceapă, roșii sau pastă de roșii, varză, dovlecel, leuștean, ulei, sare, piper, zeamă de varză",
        allergens: ["țelină"]
    },
    "Borș de legume": {
        type: "Ciorbă",
        name: "Borș de legume",
        ingredients: "morcovi, ceapă, cartofi, țelină, dovlecel, ardei gras, păstârnac, roșii sau bulion, borș, leuștean, pătrunjel, ulei, sare, piper",
        allergens: []
    },
    "Borș de fasole cu afumătură acrit cu zeamă de varză": {
        type: "Ciorbă",
        name: "Borș de fasole cu afumătură acrit cu zeamă de varză",
        ingredients: "fasole boabe, afumătură (costiță, ciolan sau piept afumat), ceapă, morcov, țelină, ardei gras, usturoi, foi de dafin, boia dulce, zeamă de varză, sare, piper, verdeață (leuștean sau pătrunjel)",
        allergens: []
    },
    "Friptură de porc cu cartofi țărănești": {
        name: "Friptură de porc cu cartofi țărănești",
        ingredients: "carne de porc, ceapă, morcov, usturoi, bulion sau pastă de roșii, ulei, unt, cartofi, sare, piper, rozmarin, foi de dafin",
        allergens: ["lapte", "usturoi"]
    },
    "Tocană de vițel cu piure": {
        type: "Felul doi",
        name: "Tocană de vițel cu piure",
        ingredients: "carne de vițel, ceapă, morcovi, ardei gras, usturoi, pastă de roșii, ulei, vin alb (opțional), sare, piper, foi de dafin, cimbru, cartofi, lapte, unt",
        allergens: ["lactoză"]
    },
    "Friptură de pui cu mămăligă și mujdei": {
        type: "Felul principal",
        name: "Friptură de pui cu mămăligă și mujdei",
        ingredients: "carne de pui, mălai, usturoi, ulei, sare, piper"
    },
    "Ceafă de porc în sos de vin roșu cu piure cu usturoi copt": {
        type: "Felul doi",
        name: "Ceafă de porc în sos de vin roșu cu piure cu usturoi copt",
        ingredients: "ceafă de porc, vin roșu, ceapă, morcov, usturoi, bulion sau pastă de roșii, ulei, unt, cartofi, lapte, sare, piper, rozmarin, foi de dafin",
        allergens: ["lapte", "usturoi"]
    },
    "Pui Țigănesc cu orez": {
        type: "Felul doi",
        name: "Pui Țigănesc cu orez",
        ingredients: "carne de pui, ceapă, ardei gras, roșii sau pastă de roșii, usturoi, ulei, sare, piper, boia dulce, foi de dafin, orez, apă sau supă de pui.",
        allergens: ["fără alergeni majori (poate conține urme de țelină sau gluten, în funcție de condimentele utilizate)."]
    },
    "Iahnie de fasole cu cârnați": {
        type: "Felul doi",
        name: "Iahnie de fasole cu cârnați",
        ingredients: "fasole albă, cârnați afumați, ceapă, morcov, usturoi, pastă de roșii, ulei, foi de dafin, cimbru, sare, piper",
        allergens: ["fără alergeni majori (poate conține urme de muștar sau gluten, în funcție de cârnați și condimente)"]
    },
    "Chiftele cu sos și piure": {
        type: "Felul doi",
        name: "Chiftele cu sos și piure",
        ingredients: "carne tocată (porc sau amestec porc-vită), ceapă, usturoi, ou, pesmet, sare, piper, ulei, pastă de roșii, foi de dafin, zahăr, cartofi, lapte, unt.",
        allergens: ["ouă", "lactoză"]
    },
    "Varză călită cu ciolan afumat": {
        type: "Felul doi",
        name: "Varză călită cu ciolan afumat",
        ingredients: "varză proaspătă, ciolan afumat, ceapă, pastă de roșii, ulei, sare, piper, boia, cimbru, foi de dafin, mărar",
        allergens: []
    },
    "Varză călită cu kaizer și ciolan": {
        type: "Felul doi",
        name: "Varză călită cu kaizer și ciolan",
        ingredients: "varză proaspătă, ciolan afumat, kaizer, ceapă, pastă de roșii, ulei, sare, piper, boia, cimbru, foi de dafin, mărar",
        allergens: []
    },
    "Varză călită": {
        type: "Fel principal",
        name: "Varză călită",
        ingredients: "varză albă, ceapă, pastă de roșii, ulei, sare, piper, cimbru, foi de dafin, mărar",
        allergens: []
    },
    "Bulgur cu legume și piftele cu sos": {
        type: "Fel principal",
        name: "Bulgur cu legume și piftele cu sos",
        ingredients: "bulgur, morcovi, ardei gras, dovlecei, ceapă, ulei, sare, piper, carne tocată (porc sau amestec), ouă, usturoi, pesmet, pastă de roșii.",
        allergens: ["gluten", "ouă"]
    },
    "Falafel cu hummus": {
        type: "Felul principal",
        name: "Falafel cu hummus",
        ingredients: "năut, ceapă, usturoi, pătrunjel, coriandru, făină, ulei, sare, piper, pastă de susan (tahini), lămâie, ulei de măsline",
        allergens: ["susan"]
    },
    "Fasole bătută cu cârnați cabanos": {
        type: "Felul principal",
        name: "Fasole bătută cu cârnați cabanos",
        ingredients: "fasole boabe, cârnați cabanos, ceapă, ulei, morcov, foi de dafin, sare, piper, boia dulce"
    },
    "Fasole bătută, conopidă pane și murături": {
        type: "Felul principal",
        name: "Fasole bătută, conopidă pane și murături",
        ingredients: "fasole boabe, conopidă, făină, pesmet, ulei, ceapă, usturoi, sare, piper, murături asortate",
        allergens: ["gluten"]
    },
    "Chilli con carne cu orez basmati": {
        type: "Felul principal",
        name: "Chilli con carne cu orez basmati",
        ingredients: "carne tocată de vită, fasole roșie, roșii, ardei gras, ceapă, usturoi, ardei iute, orez basmati, ulei, sare, piper, boia afumată, chimion",
        allergens: []
    },
    "Ostropel de pui cu piure": {
        type: "Felul principal",
        name: "Ostropel de pui cu piure",
        ingredients: "carne de pui, roșii, pastă de roșii, ceapă, usturoi, ulei, sare, piper, foi de dafin, cartofi, lapte, unt",
        allergens: ["lapte"]
    },
    "Chiftele vegetale cu sos și piure": {
        type: "Felul principal",
        name: "Chiftele vegetale cu sos și piure",
        ingredients: "cartofi, morcovi, dovlecel, linte, ceapă, usturoi, roșii, pastă de roșii, ulei, sare, piper, boia dulce, făină",
        allergens: ["gluten"]
    },
    "Chiftele vegetale cu sos de roșii și piure": {
        type: "Felul doi",
        name: "Chiftele vegetale cu sos de roșii și piure",
        ingredients: "cartofi, morcovi, ceapă, usturoi, dovlecel, făină de grâu, pesmet, ulei, roșii sau pastă de roșii, sare, piper, pătrunjel.",
        allergens: ["gluten"]
    },
    "Chiftele vegetale cu piure de cartofi": {
        type: "Fel principal",
        name: "Chiftele vegetale cu piure de cartofi",
        ingredients: "cartofi, ceapă, morcov, dovlecel sau ciuperci, usturoi, făină de grâu, pesmet, ulei, sare, piper, mărar sau pătrunjel, lapte vegetal sau apă.",
        allergens: ["gluten"]
    },
    "Gulaș de vită": {
        type: "Felul principal",
        name: "Gulaș de vită",
        ingredients: "carne de vită, ceapă, morcovi, ardei gras, cartofi, roșii, pastă de roșii, usturoi, ulei, boia dulce, chimen, sare, piper"
    },
    "Ceafă de porc în sos de vin roșu cu piure": {
        type: "Felul principal",
        name: "Ceafă de porc în sos de vin roșu cu piure",
        ingredients: "ceafă de porc, vin roșu, ceapă, usturoi, morcovi, pastă de roșii, cartofi, unt, lapte, ulei, sare, piper, cimbru",
        allergens: ["lapte"]
    },
    "Pulpe de pui marinate în sos de iaurt cu bulgur și legume coapte": {
        type: "Fel principal",
        name: "Pulpe de pui marinate în sos de iaurt cu bulgur și legume coapte",
        ingredients: "pulpe de pui dezosate și fără piele, iaurt, usturoi, lămâie, ulei de măsline, sare, piper, boia, oregano, bulgur, ardei gras, dovlecei, vinete, ceapă roșie.",
        allergens: ["lapte", "gluten"]
    },
    "Cartofi țărănești cu ceapă caramelizată, bacon și cârnați umpluți cu cașcaval": {
        type: "Felul principal",
        name: "cârnați umpluți cu cașcaval, bacon, cartofi țărănești cu ceapă caramelizată",
        ingredients: "cartofi, ceapă, bacon, cârnați umpluți cu cașcaval, ulei, sare, piper, boia",
        allergens: ["lapte"]
    },
    "Pulled pork cu cartofi copți și sos cheddar": {
        type: "Fel principal",
        name: "Pulled pork cu cartofi copți și sos cheddar",
        ingredients: "ceafă de porc, sos BBQ, usturoi, boia afumată, sare, piper, cartofi, unt, lapte, brânză cheddar",
        allergens: ["lapte"]
    },
    "Macrou în sos tomat și mămăligă": {
        type: "Felul principal",
        name: "Macrou în sos tomat și mămăligă",
        ingredients: "macrou, roșii, pastă de roșii, ceapă, usturoi, ulei, foi de dafin, sare, piper, mărar, mălai, apă",
        allergens: ["pește"]
    },
    "Macrou în sos tomat": {
        type: "Felul principal",
        name: "Macrou în sos tomat",
        ingredients: "macrou, roșii, pastă de roșii, ceapă, usturoi, ulei, foi de dafin, sare, piper, mărar, mălai, apă",
        allergens: ["pește"]
    },
    "Ciulama de ciuperci cu mămăligă": {
        type: "Felul principal",
        name: "Ciulama de ciuperci cu mămăligă",
        ingredients: "ciuperci (champignon sau hribi), ceapă, usturoi, făină, lapte sau smântână, unt sau ulei, sare, piper, mărar, mămăligă (mălai, apă, sare)",
        allergens: ["lapte", "gluten"]
    },
    "Ciulama de ciuperci cu mămăligă (de post)": {
        type: "Felul doi",
        name: "Ciulama de ciuperci cu mămăligă",
        ingredients: "ciuperci, ceapă, usturoi, făină de grâu, ulei, apă sau supă de legume, sare, piper, pătrunjel, mălai, apă, sare.",
        allergens: ["gluten"]
    },
    "Șnițele de pui cu piure": {
        type: "Felul principal",
        name: "Șnițele de pui cu piure",
        ingredients: "piept de pui, ouă, făină, pesmet, ulei pentru prăjit, sare, piper, cartofi, lapte, unt",
        allergens: ["ouă", "lapte", "gluten"]
    },
    "Chiftele de pește cu sos de roșii și piure": {
        type: "Felul principal",
        name: "Chiftele de pește cu sos de roșii și piure",
        ingredients: "pește alb, ceapă, usturoi, ouă, pesmet, sare, piper, roșii sau pastă de roșii, ulei, foi de dafin, cartofi, lapte, unt",
        allergens: ["pește", "ouă", "gluten", "lapte"]
    },
    "Paste cu sos de ciuperci": {
        type: "Fel principal",
        name: "Paste cu sos de ciuperci",
        ingredients: "paste (fără ou), ciuperci champignon, ceapă, usturoi, smântână vegetală pentru gătit, ulei de măsline, sare, piper, pătrunjel",
        allergens: ["gluten"]
    },
    "Iahnie de fasole": {
        type: "Felul principal",
        name: "Iahnie de fasole",
        ingredients: "fasole albă, ceapă, morcovi, ardei gras, pastă de roșii, usturoi, ulei, foi de dafin, cimbru, sare, piper"
    },
    "Iahnie de fasole cu ciolan afumat": {
        type: "Felul principal",
        name: "Iahnie de fasole cu ciolan afumat",
        ingredients: "fasole boabe, ciolan afumat, ceapă, morcov, țelină, ardei gras, usturoi, foi de dafin, cimbru, boia dulce, bulion sau pastă de roșii, ulei, sare, piper"
    },
    "Escalop de porc la tavă cu ciuperci și pilaf": {
        type: "Felul principal",
        name: "Escalop de porc la tavă cu ciuperci și pilaf",
        ingredients: "carne de porc (pulpa sau ceafa), ciuperci, ceapă, usturoi, vin alb, ulei, făină, bulion, sare, piper, foi de dafin, orez, morcov, ardei gras, supă de legume",
        allergens: ["gluten"]
    },
    "Pui cu smântână și ciuperci și mămăligă": {
        type: "Felul principal",
        name: "Pui cu smântână și ciuperci și mămăligă",
        ingredients: "piept de pui, ciuperci, ceapă, usturoi, smântână, făină, unt sau ulei, sare, piper, pătrunjel, mămăligă (mălai, apă, sare)",
        allergens: ["lapte", "gluten"]
    },
    "Ceafă de porc la cuptor cu cartofi țărănești": {
        type: "Felul principal",
        name: "Ceafă de porc la cuptor cu cartofi țărănești",
        ingredients: "ceafă de porc, cartofi, ceapă, usturoi, boia dulce, cimbru, rozmarin, sare, piper, ulei, supă sau apă"
    },
    "Pui la ceaun cu mămăligă și usturoi": {
        type: "Felul principal",
        name: "Pui la ceaun cu mămăligă și usturoi",
        ingredients: "pui (pulpe, aripi sau ciocănele), ulei, sare, piper, boia dulce, usturoi, apă, mălai, sare (pentru mămăligă)"
    },
    "Saramură de crap cu mămăligă": {
        type: "Felul principal",
        name: "Saramură de crap cu mămăligă",
        ingredients: "crap, roșii, ardei capia copți, ceapă, usturoi, ulei, apă, sare, piper, foi de dafin, pătrunjel, mălai (pentru mămăligă)",
        allergens: ["pește"]
    },
    "Aripioare de pui cu sote de ceapă caramelizată și mămăliguță": {
        type: "Fel principal",
        name: "Aripioare de pui cu sote de ceapă caramelizată și mămăliguță",
        ingredients: "aripioare de pui, ceapă, mălai, ulei, unt, sare, piper, boia, usturoi, zahăr.",
        allergens: ["lapte", "gluten"]
    },
    "Aripioare de pui BBQ cu cartofi prăjiți": {
        type: "Fel principal",
        name: "Aripioare de pui BBQ cu cartofi prăjiți",
        ingredients: "aripioare de pui, sos BBQ, usturoi, boia dulce, sare, piper, ulei, cartofi, ketchup (opțional)",
        allergens: []
    },
    "Pilaf cu pulpe la cuptor": {
        type: "Felul principal",
        name: "Pilaf cu pulpe la cuptor",
        ingredients: "pulpe de pui, orez, ceapă, morcov, ardei gras, usturoi, ulei, supă de pui sau apă, sare, piper, foi de dafin"
    },
    "Ciorbă falsă de burtă": {
        type: "Felul întâi",
        name: "Ciorbă falsă de burtă",
        ingredients: "ciuperci pleurotus, morcovi, ceapă, ardei gras, țelină, usturoi, ou, smântână, oțet, ulei, sare, piper, foi de dafin"
    },
    "Ciorbă de păstăi dreasă cu smântână vegetală": {
        type: "Felul întâi",
        name: "Ciorbă de păstăi dreasă cu smântână vegetală",
        ingredients: "păstăi de fasole verde, ceapă, morcovi, țelină, cartofi, usturoi, ulei, smântână vegetală, borș sau oțet, sare, piper, pătrunjel.",
        allergens: []
    },
    "Hummus cu falafel": {
        type: "Felul doi",
        name: "Hummus cu falafel",
        ingredients: "năut, tahini (pastă de susan), usturoi, suc de lămâie, ulei de măsline, sare, chimen, pătrunjel, năut pentru falafel, ceapă, usturoi, coriandru, pătrunjel, făină de grâu sau pesmet, ulei pentru prăjit.",
        allergens: ["gluten", "susan"]
    },
    "Ciorbă de pui a la grecque": {
        type: "Felul întâi",
        name: "Ciorbă de pui a la grecque",
        ingredients: "carne de pui (piept sau pulpe), morcovi, țelină, păstârnac, orez, ouă, smântână, lămâie, ulei, sare, piper, pătrunjel",
        allergens: ["ouă", "lapte", "țelină"]
    },

    ///neadaugate in excel
    "Tocană de purcel la cuptor cu piure": {
        type: "Felul doi",
        name: "Tocană de purcel făcută încet la cuptor cu piure",
        ingredients: "carne de purcel, ceapă, usturoi, ulei, pastă de roșii, sare, piper, boia, cimbru, foi de dafin, cartofi, unt, lapte",
        allergens: ["lapte"]
    },
    "Borș de afumătură cu cartofi acrit cu zeamă de varză": {
        type: "Felul întâi",
        name: "Borș de afumătură cu cartofi acrit cu zeamă de varză",
        ingredients: "afumătură de porc, cartofi, ceapă, morcov, țelină, ardei, roșii sau bulion, zeamă de varză, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },
    "Escalop de porc cu ciuperci și piure de cartofi": {
        type: "Felul principal",
        name: "Escalop de porc cu ciuperci și piure de cartofi",
        ingredients: "carne de porc, ciuperci, ceapă, usturoi, făină, smântână, unt, cartofi, lapte, ulei, sare, piper",
        allergens: ["lapte", "gluten"]
    },
    "Fasole bătută": {
        type: "Felul principal",
        name: "Fasole bătută",
        ingredients: "fasole boabe, ceapă, usturoi, ulei, sare, piper",
        allergens: []
    },
    "Borș de vită": {
        type: "Felul întâi",
        name: "Borș de vită",
        ingredients: "carne de vită , ceapă, morcovi, țelină, păstârnac, ardei, cartofi, roșii sau bulion, borș, leuștean, sare, piper, ulei",
        allergens: ["țelină"]
    },
    "Saramură de pui cu mămăligă": {
        type: "Felul principal",
        name: "Saramură de pui cu mămăligă",
        ingredients: "carne de pui, ardei capia, roșii, usturoi, ceapă, ardei iute, cimbru, foi de dafin, apă, sare, piper, mălai, sare pentru mămăligă",
        allergens: []
    },
    "Ciorbă de perișoare a la grecque": {
        type: "Felul întâi",
        name: "Ciorbă de perișoare a la grecque",
        ingredients: "carne tocată, orez, ceapă, ou, morcovi, țelină, păstârnac, ardei, smântână, lămâie, ouă pentru dres, orez, leuștean sau pătrunjel, sare, piper",
        allergens: ["ouă", "lapte", "țelină"]
    },

    "Chilli con vegetale cu cartof copt": {
        type: "Fel principal",
        name: "Chilli con vegetale cu cartof copt",
        ingredients: "fasole roșie, porumb, ardei, ceapă, usturoi, morcov, roșii cuburi, ardei iute, condimente chilli, ulei, sare, piper, cartofi pentru copt",
        allergens: []
    },

    "Spată de porc făcută încet la cuptor în sos de vin roșu și piure cu usturoi copt": {
        type: "Fel principal",
        name: "Spată de porc făcută încet la cuptor în sos de vin roșu și piure cu usturoi copt",
        ingredients: "spată de porc, vin roșu, ceapă, morcov, țelină, usturoi, bulion, condimente, cartofi, unt, lapte, usturoi copt, sare, piper",
        allergens: ["lapte", "țelină"]
    },

    "Borș de fasole": {
        type: "Felul întâi",
        name: "Borș de fasole",
        ingredients: "fasole boabe, ceapă, morcov, țelină, ardei, roșii sau bulion, borș, ulei, sare, piper, leuștean",
        allergens: ["țelină"]
    },

    "Cod pane cu cartofi natur": {
        type: "Fel principal",
        name: "Cod pane cu cartofi natur",
        ingredients: "cod, ou, făină, pesmet, ulei pentru prăjit, cartofi, unt, pătrunjel, sare, piper",
        allergens: ["pește", "ouă", "gluten", "lapte"]
    },

    "Borș de cartofi acrit cu lapte acru și dres cu ou": {
        type: "Felul întâi",
        name: "Borș de cartofi acrit cu lapte acru și dres cu ou",
        ingredients: "cartofi, ceapă, morcov, țelină, ardei, borș, lapte acru, ouă, ulei, sare, piper, pătrunjel sau leuștean",
        allergens: ["lapte", "ouă", "țelină"]
    },

    "Fasole prăjită cu cârnați": {
        type: "Fel principal",
        name: "Fasole prăjită cu cârnați",
        ingredients: "fasole fiartă, ceapă, usturoi, ulei, bulion, cârnați afumați, sare, piper, foi de dafin",
        allergens: []
    },
    "Fasole prăjită cu murături": {
        type: "Fel principal",
        name: "Fasole prăjită cu murături",
        ingredients: "fasole boabe, ceapă, ulei, pastă de roșii sau bulion, usturoi, sare, piper, foi de dafin, murături asortate (castraveți murați, gogonele sau varză murată).",
        allergens: []
    },
    "Borș cu sfeclă": {
        type: "Felul întâi",
        name: "Borș cu sfeclă",
        ingredients: "sfeclă roșie, cartofi, ceapă, morcov, țelină, borș, ulei, sare, piper, mărar sau leuștean",
        allergens: ["țelină"]
    },
    "Fasole prăjită de post": {
        type: "Garnitură / Fel secundar",
        name: "Fasole prăjită de post",
        ingredients: "fasole fiartă, ceapă, usturoi, ulei, bulion sau pastă de roșii, sare, piper, foi de dafin",
        allergens: []
    },
    "Ciorbă de fasole cu kaizer": {
        type: "Felul întâi",
        name: "Ciorbă de fasole cu kaizer",
        ingredients: "fasole boabe, kaizer afumat, ceapă, morcov, țelină, ardei, roșii sau bulion, ulei, sare, piper, foi de dafin, leuștean",
        allergens: ["țelină"]
    },
    "Ostropel de pui și mămăligă": {
        type: "Fel principal",
        name: "Ostropel de pui și mămăligă",
        ingredients: "pui (pulpe sau piept), usturoi, ceapă, roșii sau bulion, ulei, sare, piper, foi de dafin, mălai, apă, sare pentru mămăligă",
        allergens: []
    },
    "Supă cremă de ciuperci": {
        type: "Felul întâi",
        name: "Supă cremă de ciuperci",
        ingredients: "ciuperci, ceapă, usturoi, cartofi, smântână, unt sau ulei, supă de legume, sare, piper",
        allergens: ["lapte"]
    },
    "Supă cremă de ciuperci (de post)": {
        type: "Felul întâi",
        name: "Supă cremă de ciuperci",
        ingredients: "ciuperci, ceapă, usturoi, cartofi, ulei, supă de legume, sare, piper",
        allergens: []
    },
    "Supa cremă de legume": {
        type: "Felul întâi",
        name: "Supa cremă de legume",
        ingredients: "cartofi, morcovi, țelină, dovlecel, ardei gras, ceapă, usturoi, ulei, sare, piper, pătrunjel",
        allergens: ["țelină"]
    },
    "Păstăi sote cu usturoi și mămăligă": {
        type: "Fel principal / Garnitură",
        name: "Păstăi sote cu usturoi și mămăligă",
        ingredients: "păstăi de fasole verde, usturoi, ulei, sare, piper, mălai, apă, sare pentru mămăligă",
        allergens: []
    },
    "Păstrăv cu mămăliguță și mujdei": {
        type: "Felul doi",
        name: "Păstrăv cu mămăliguță și mujdei",
        ingredients: "păstrăv, mălai, usturoi, ulei, sare, piper, apă",
        allergens: ["pește"]
    },
    "Mâncărică de cartofi cu cârnați și murături": {
        type: "Fel principal",
        name: "Mâncărică de cartofi cu cârnați și murături",
        ingredients: "cartofi, cârnați afumați, ceapă, ardei gras, pastă de roșii, usturoi, foi de dafin, ulei, sare, piper, boia, murături asortate.",
        allergens: []
    },
    "Mâncărică de cartofi cu murături": {
        type: "Fel principal",
        name: "Mâncărică de cartofi cu murături",
        ingredients: "cartofi, ceapă, ardei gras, pastă de roșii, usturoi, foi de dafin, ulei, sare, piper, boia, murături asortate.",
        allergens: []
    },
    "Mâncărică de cartofi": {
        type: "Fel principal",
        name: "Mâncărică de cartofi",
        ingredients: "cartofi, ceapă, ardei gras, pastă de roșii, usturoi, foi de dafin, boia, ulei, sare, piper, pătrunjel.",
        allergens: []
    },
    "Ciorbă de cartofi dreasă cu smântână vegană": {
        type: "Felul întâi",
        name: "Ciorbă de cartofi dreasă cu smântână vegană",
        ingredients: "cartofi, ceapă, morcovi, țelină, usturoi, smântână vegetală pentru gătit, ulei, sare, piper, foi de dafin, leuștean",
        allergens: ["țelină"]
    },
    "Ciorbă de pui": {
        type: "Felul întâi",
        name: "Ciorbă de pui",
        ingredients: "carne de pui (pulpe sau piept), ceapă, morcovi, țelină, păstârnac, ardei, cartofi, tăiței sau orez, ulei, sare, piper, pătrunjel",
        allergens: ["țelină", "gluten"]
    },
    "Tocană de vită cu piure de cartofi": {
        type: "Fel principal",
        name: "Tocană de vită cu piure de cartofi",
        ingredients: "carne de vită, ceapă, morcov, usturoi, roșii sau bulion, ulei, sare, piper, cartofi, lapte, unt",
        allergens: ["lapte"]
    },
    "Ciorbă de fasole": {
        type: "Felul întâi",
        name: "Ciorbă de fasole",
        ingredients: "fasole boabe, ceapă, morcov, țelină, ardei, roșii sau bulion, ulei, sare, piper, foi de dafin, leuștean",
        allergens: ["țelină"]
    },
    "Sarmale cu ciuperci și mămăligă": {
        type: "Fel principal",
        name: "Sarmale cu ciuperci și mămăligă",
        ingredients: "frunze de varză murată, ciuperci, ceapă, orez, morcov, ulei, pastă de roșii, sare, piper, cimbru, foi de dafin, mălai, apă, sare pentru mămăligă",
        allergens: []
    },
    "Cârnați cu cașcaval": {
        type: "Felul principal",
        name: "Cârnați cu cașcaval",
        ingredients: "cârnați, cașcaval, ulei",
        allergens: ["lapte"]
    },
    "Borș de perișoare": {
        type: "Felul principal",
        name: "Borș de perișoare",
        ingredients: "carne tocată, orez, ceapă, morcov, țelină, păstârnac, ou, borș, ulei, sare, piper, pătrunjel",
        allergens: ["ou", "gluten"]
    },
    "Mici cu cartofi pai": {
        type: "Felul principal",
        name: "Mici cu cartofi pai",
        ingredients: "carne tocată de porc și vită, usturoi, condimente, bicarbonat, cartofi, ulei, sare",
        allergens: []
    },
    "Borș de legume dres cu smântână și zdrențe de ou": {
        type: "Ciorbă",
        name: "Borș de legume dres cu smântână și zdrențe de ou",
        ingredients: "morcovi, ceapă, țelină, ardei, cartofi, borș, ouă, smântână, ulei, sare, verdeață",
        allergens: ["ouă", "lapte"]
    },
    "Tocană de ceapă cu aripi și mămăligă": {
        type: "Felul principal",
        name: "Tocană de ceapă cu aripi și mămăligă",
        ingredients: "aripi de pui, ceapă, mălai, ulei, sare, piper"
    },
    "Mămăligă cu brânză și smântână": {
        type: "Felul principal",
        name: "Mămăligă cu brânză și smântână",
        ingredients: "mălai, brânză, smântână, ulei, sare, piper"
    },
    "Friptură de porc cu mămăligă și brânză de burduf": {
        type: "Felul principal",
        name: "Friptură de porc cu mămăligă și brânză de burduf",
        ingredients: "carne de porc, mălai, brânză de burduf, ulei, sare, piper"
    },
    "Friptură de vită înăbușită și piure de cartofi cu usturoi": {
        type: "Fel principal",
        name: "Friptură de vită înăbușită și piure de cartofi cu usturoi",
        ingredients: "carne de vită, ceapă, morcovi, usturoi, ulei, sare, piper, cimbru, cartofi, unt, lapte.",
        allergens: ["lapte"]
    },
    "Friptură de porc cu mămăligă și brânză de putină": {
        type: "Fel principal",
        name: "Friptură de porc cu mămăligă și brânză de putină",
        ingredients: "carne de porc (ceafă, pulpă sau costiță), usturoi, ulei sau untură, sare, piper, cimbru, mălai, brânză de burduf.",
        allergens: ["lapte"]
    },
    "Cotlet de porc vânătoresc": {
        type: "Felul principal",
        name: "Cotlet de porc vânătoresc",
        ingredients: "cotlet de porc, ciuperci, ceapă, usturoi, vin roșu, ulei, sare, piper"
    },
    "Cotlet de porc vânătoresc cu piure": {
        type: "Fel principal",
        name: "Cotlet de porc vânătoresc cu piure",
        ingredients: "cotlet de porc, ceapă, ciuperci, ardei, roșii sau pastă de roșii, usturoi, ulei, sare, piper, boia, cartofi, lapte, unt.",
        allergens: ["lapte"]
    },
    "Tocană de cartofi cu cârnați": {
        type: "Felul principal",
        name: "Tocană de cartofi cu cârnați",
        ingredients: "cartofi, cârnați, ceapă, ulei, sare, piper"
    },
    "Supă de pui cu găluște": {
        type: "Felul întâi",
        name: "Supă de pui cu găluște",
        ingredients: "carne de pui, ouă, griș, morcovi, ceapă, sare"
    },
    "Salată a la Rousse": {
        type: "Felul principal",
        name: "Salată a la Rousse",
        ingredients: "cartofi, morcovi, mazăre, castraveți murați, ouă, maioneză, muștar, sare, piper.",
        allergens: ["ouă", "muștar"]
    },
    "Ciorbă de burtă cu ciuperci": {
        type: "Felul întâi",
        name: "Ciorbă de burtă cu ciuperci",
        ingredients: "ciuperci pleurotus, ceapă, morcovi, țelină, usturoi, smântână vegetală pentru gătit, oțet, ulei, sare, piper, foi de dafin",
        allergens: ["țelină"]
    },
    "Borș de cartofi cu sfeclă": {
        type: "Felul întâi",
        name: "Borș de cartofi cu sfeclă",
        ingredients: "sfeclă roșie, cartofi, ceapă, morcovi, țelină, ardei gras, roșii sau pastă de roșii, usturoi, ulei, borș, sare, piper, leuștean, pătrunjel.",
        allergens: []
    },
    "Supă cremă de ciuperci cu crutoane": {
        type: "Felul întâi",
        name: "Supă cremă de ciuperci cu crutoane",
        ingredients: "ciuperci, ceapă, cartofi, usturoi, ulei, supă de legume, sare, piper, crutoane, pătrunjel.",
        allergens: ["gluten"]
    },
    "Salată orientală de post": {
        type: "Felul principal",
        name: "Salată orientală de post",
        ingredients: "cartofi, ceapă roșie, castraveți murați, măsline, ulei, oțet, sare, piper, pătrunjel.",
        allergens: []
    },
    "Sarmale cu mămăligă": {
        type: "Felul principal",
        name: "Sarmale cu mămăligă",
        ingredients: "carne tocată, varză murată, orez, ceapă, mălai, ulei, sare, piper"
    },
    "Șnițele de soia cu piure de cartofi": {
        type: "Fel principal",
        name: "Șnițele de soia cu piure de cartofi",
        ingredients: "cartofi, ulei, sare, piper, șnițele de soia, făină, pesmet, usturoi, apă minerală.",
        allergens: ["soia", "gluten"]
    },
    "Șnițele de soia și bulgur cu legume coapte": {
        type: "Felul doi",
        name: "Șnițele de soia și bulgur cu legume coapte",
        ingredients: "șnițele de soia, bulgur, dovlecel, ardei, vinete, ceapă, usturoi, ulei, sare, piper, boia",
        allergens: ["gluten", "soia"]
    },
    "Tocană de cartofi cu murături": {
        type: "Felul doi",
        name: "Tocană de cartofi cu murături",
        ingredients: "cartofi, ceapă, morcovi, ardei gras, roșii sau pastă de roșii, usturoi, ulei, boia dulce, foi de dafin, sare, piper, pătrunjel, murături asortate.",
        allergens: []
    },
    "Mușchiuleț de porc cu sos alb și ciuperci, piure de cartofi": {
        type: "Felul doi",
        name: "Mușchiuleț de porc cu sos alb și ciuperci, piure de cartofi",
        ingredients: "mușchiuleț de porc, ciuperci champignon, smântână pentru gătit, usturoi, ceapă, unt, ulei, sare, piper, cartofi, lapte",
        allergens: ["lapte"]
    },
    //desert
    "Gogoși": {
        type: "Desert",
        name: "Gogoși",
        ingredients: "făină de grâu, drojdie, zahăr, apă, ulei, sare, zahăr pudră.",
        allergens: ["gluten"]
    },
    "Clătite cu gem": {
        type: "Desert",
        name: "Clătite cu gem",
        ingredients: "făină de grâu, apă minerală, zahăr, ulei, sare, gem.",
        allergens: ["gluten"]
    },
    "Clătite cu dulceață (de post)": {
        type: "Desert",
        name: "Clătite cu dulceață",
        ingredients: "făină de grâu, apă minerală, zahăr, ulei, sare, dulceașă.",
        allergens: ["gluten"]
    },
    "Salam de biscuiți (de post)": {
        type: "Desert",
        name: "Salam de biscuiți",
        ingredients: "biscuiți simpli, zahăr, cacao, margarină vegetală, esență de rom, nucă sau rahat, lapte vegetal sau apă.",
        allergens: ["gluten", "nuci"]
    },
    "Măr copt cu scorțișoară": {
        type: "Desert",
        name: "Măr copt cu scorțișoară",
        ingredients: "mere, zahăr sau miere, scorțișoară, nucă (opțional), stafide (opțional).",
        allergens: ["nuci"]
    },
    "Negresă (de post)": {
        type: "Desert",
        name: "Negresă",
        ingredients: "făină de grâu, zahăr, cacao, apă minerală sau apă, ulei, praf de copt, esență de rom sau vanilie.",
        allergens: ["gluten"]
    },
    "Budincă de griș cu dulceață de afine (de post)": {
        type: "Desert",
        name: "Budincă de griș cu dulceață de afine",
        ingredients: "apă sau lapte vegetal, griș de grâu, zahăr, dulceață de afine, esență de vanilie.",
        allergens: ["gluten"]
    },
    "Prăjitură cu morcov și nuci (de post)": {
        type: "Desert",
        name: "Prăjitură cu morcov și nuci",
        ingredients: "făină de grâu, morcov ras, zahăr, nuci, ulei, apă minerală sau apă, praf de copt, scorțișoară, esență de vanilie.",
        allergens: ["gluten", "nuci"]
    },
    "Plăcintă cu măr": {
        type: "Desert",
        name: "Plăcintă cu măr",
        ingredients: "mere, făină, zahăr, margarină, scorțișoară, sare",
        allergens: []
    },
};

