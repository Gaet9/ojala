import i18n from "@/i18n";

type LocalizedText = { en?: string; es?: string; fr?: string } | string;

// Localized metadata for gallery images (progressively localized)
const localizedMeta: Record<string, { caption: LocalizedText; alt: LocalizedText }> = {
    // (Map images not used in the gallery lookup; itinerary captions live in i18n)

    // First pages gallery (fully localized)
    "Photo_article2_1.jpg": {
        caption: {
            en: "Jérémy on Jean-Louis' catamaran, at the start of the adventure.",
            es: "Jérémy en el catamarán de Jean-Louis, al inicio de la aventura.",
            fr: "Jérémy sur le catamaran de Jean-Louis, au départ de l’aventure.",
        },
        alt: {
            en: "Jérémy on Jean-Louis' catamaran, at the start of the adventure.",
            es: "Jérémy en el catamarán de Jean-Louis, al inicio de la aventura.",
            fr: "Jérémy sur le catamaran de Jean-Louis, au départ de l’aventure.",
        },
    },
    "Photo_article3_1.jpg": {
        caption: { en: "A memorable sunset", es: "Una puesta de sol memorable", fr: "Un coucher de soleil dont on se souvient" },
        alt: { en: "A memorable sunset", es: "Una puesta de sol memorable", fr: "Un coucher de soleil dont on se souvient" },
    },
    "Photo_article4_1.jpg": {
        caption: {
            en: "Dominique enjoying calm with style",
            es: "Dominique disfruta de la calma con estilo",
            fr: "Dominique profite du calme avec classe",
        },
        alt: {
            en: "Dominique enjoying calm with style",
            es: "Dominique disfruta de la calma con estilo",
            fr: "Dominique profite du calme avec classe",
        },
    },
    "Photo_article5_1.jpg": {
        caption: { en: "First stopover", es: "Primera escala", fr: "Première escale" },
        alt: { en: "First stopover", es: "Primera escala", fr: "Première escale" },
    },
    "Photo_article9_1.jpg": {
        caption: { en: "Gibraltar", es: "Gibraltar", fr: "Gibraltar" },
        alt: { en: "Gibraltar", es: "Gibraltar", fr: "Gibraltar" },
    },
    "Photo_article10_1.jpg": {
        caption: {
            en: "Finally past the strait, the Atlantic",
            es: "Por fin pasado el estrecho, el Atlántico",
            fr: "Enfin passé le détroit, l’Atlantique",
        },
        alt: {
            en: "Finally past the strait, the Atlantic",
            es: "Por fin pasado el estrecho, el Atlántico",
            fr: "Enfin passé le détroit, l’Atlantique",
        },
    },
    "Photo_article13_1.jpg": {
        caption: { en: "Large sails billowing", es: "Grandes velas henchidas", fr: "De grandes voiles bien gonflées" },
        alt: { en: "Large sails billowing", es: "Grandes velas henchidas", fr: "De grandes voiles bien gonflées" },
    },
    "Photo_article13_2.jpg": {
        caption: { en: "Never gets old", es: "Nunca cansa", fr: "On ne s’en lasse jamais" },
        alt: { en: "Never gets old", es: "Nunca cansa", fr: "On ne s’en lasse jamais" },
    },
    "Photo_article14_1.jpg": {
        caption: {
            en: "A large rig maneuvering in the port of Lanzarote",
            es: "Un gran aparejo maniobrando en el puerto de Lanzarote",
            fr: "Un gros grément en pleine manoeuvre au port de Lanzarote",
        },
        alt: {
            en: "A large rig maneuvering in the port of Lanzarote",
            es: "Un gran aparejo maniobrando en el puerto de Lanzarote",
            fr: "Un gros grément en pleine manoeuvre au port de Lanzarote",
        },
    },
    "Photo_article16_1.jpg": {
        caption: { en: "The Soho crew", es: "El grupo del Soho", fr: "La bande du Soho" },
        alt: { en: "The Soho crew", es: "El grupo del Soho", fr: "La bande du Soho" },
    },
    "Photo_article17_1.jpg": {
        caption: {
            en: "Our goal in sight each evening: West",
            es: "Nuestro objetivo cada noche: el Oeste",
            fr: "Notre objectif en vu chaque soir, l’Ouest",
        },
        alt: {
            en: "Our goal in sight each evening: West",
            es: "Nuestro objetivo cada noche: el Oeste",
            fr: "Notre objectif en vu chaque soir, l’Ouest",
        },
    },
    "Photo_article18_1.jpg": {
        caption: { en: "Strange clouds", es: "Nubes curiosas", fr: "Drôle de nuages" },
        alt: { en: "Strange clouds", es: "Nubes curiosas", fr: "Drôle de nuages" },
    },
    "Photo_article19_1.jpg": {
        caption: {
            en: "Dolphins showing us the way",
            es: "Los delfines nos muestran el camino",
            fr: "Les dauphins nous montrent le chemin",
        },
        alt: { en: "Dolphins showing us the way", es: "Los delfines nos muestran el camino", fr: "Les dauphins nous montrent le chemin" },
    },
    "Photo_article22_1.jpg": {
        caption: { en: "In search of the famous green flash", es: "En busca del famoso rayo verde", fr: "En quête du fameux rayon vert" },
        alt: { en: "In search of the famous green flash", es: "En busca del famoso rayo verde", fr: "En quête du fameux rayon vert" },
    },
    "Photo_article23_1.jpg": {
        caption: { en: "In the shade of the sails", es: "A la sombra de las velas", fr: "A l’ombre des voiles" },
        alt: { en: "In the shade of the sails", es: "A la sombra de las velas", fr: "A l’ombre des voiles" },
    },
    "Photo_article24_1.jpg": {
        caption: {
            en: "At anchor in a bay of Mindelo, Cape Verde",
            es: "Fondeados en una bahía de Mindelo, Cabo Verde",
            fr: "Au mouillage dans une baie de Mindelo, Cap-Vert",
        },
        alt: {
            en: "At anchor in a bay of Mindelo, Cape Verde",
            es: "Fondeados en una bahía de Mindelo, Cabo Verde",
            fr: "Au mouillage dans une baie de Mindelo, Cap-Vert",
        },
    },
    "Photo_article25_1.jpg": {
        caption: {
            en: "Our captain proud of his catch",
            es: "Nuestro capitán orgulloso de su pesca",
            fr: "Notre capitaine fier de sa prise",
        },
        alt: {
            en: "Our captain proud of his catch",
            es: "Nuestro capitán orgulloso de su pesca",
            fr: "Notre capitaine fier de sa prise",
        },
    },
    "Photo_article26_1.jpg": {
        caption: {
            en: "Watching the horizon emerge",
            es: "Atento al surgimiento del horizonte",
            fr: "Attentif à l’émergence de l’horizon",
        },
        alt: { en: "Watching the horizon emerge", es: "Atento al surgimiento del horizonte", fr: "Attentif à l’émergence de l’horizon" },
    },
    "Photo_article27_1.jpg": {
        caption: { en: "One last for the road", es: "Uno último para el camino", fr: "Un dernier pour la route" },
        alt: { en: "One last for the road", es: "Uno último para el camino", fr: "Un dernier pour la route" },
    },
    "Photo_article28_2.jpg": {
        caption: {
            en: "Mast climbing in the port of Pointe-à-Pitre",
            es: "Ascenso al mástil en el puerto de Pointe-à-Pitre",
            fr: "Ascension du mât au port de Pointe-à-Pitre",
        },
        alt: {
            en: "Mast climbing in the port of Pointe-à-Pitre",
            es: "Ascenso al mástil en el puerto de Pointe-à-Pitre",
            fr: "Ascension du mât au port de Pointe-à-Pitre",
        },
    },
    // Second pages gallery
    "Photo_article30_3.jpg": {
        caption: {
            en: "Distant rain at our surf spot, Port-Louis",
            es: "Lluvia distante en nuestro lugar de surf, Port-Louis",
            fr: "Une pluie lointaine à notre spot de surf, Port-Louis",
        },
        alt: {
            en: "Distant rain at our surf spot, Port-Louis",
            es: "Lluvia distante en nuestro lugar de surf, Port-Louis",
            fr: "Une pluie lointaine à notre spot de surf, Port-Louis",
        },
    },
    "Photo_article31_3.jpg": {
        caption: {
            en: "Nature quickly takes over",
            es: "La naturaleza recupera terreno rápidamente",
            fr: "La nature reprend le dessus rapidement",
        },
        alt: {
            en: "Nature quickly takes over",
            es: "La naturaleza recupera terreno rápidamente",
            fr: "La nature reprend le dessus rapidement",
        },
    },
    "Photo_article33_4.jpg": {
        caption: { en: "We don't pass this way often", es: "No pasamos por aquí a menudo", fr: "On ne passe pas souvent par ici" },
        alt: { en: "We don't pass this way often", es: "No pasamos por aquí a menudo", fr: "On ne passe pas souvent par ici" },
    },
    "Photo_article34_1.jpg": {
        caption: {
            en: "We enjoy the view.",
            es: "Disfrutamos la vista.",
            fr: "Nous profitons d’une fenêtre avec vue.",
        },
        alt: {
            en: "We enjoy the view.",
            es: "Disfrutamos la vista.",
            fr: "Nous profitons d’une fenêtre avec vue.",
        },
    },
    "Photo_article34_7.jpg": {
        caption: {
            en: "The only cabin with an open view",
            es: "La única cabaña con vistas despejadas",
            fr: "l’unique cabane avec vue dégagée",
        },
        alt: {
            en: "The only cabin with an open view",
            es: "La única cabaña con vistas despejadas",
            fr: "l’unique cabane avec vue dégagée",
        },
    },
    "Photo_article35_6.jpg": {
        caption: {
            en: "The Morne-Frébault hut in the rain",
            es: "La cabaña de Morne-Frébault bajo la lluvia",
            fr: "La cabane de Morne-Frébault sous la pluie",
        },
        alt: {
            en: "The Morne-Frébault hut in the rain",
            es: "La cabaña de Morne-Frébault bajo la lluvia",
            fr: "La cabane de Morne-Frébault sous la pluie",
        },
    },
    "Photo_article37_1.jpg": {
        caption: {
            en: "The bird observatory of Guadeloupe",
            es: "El observatorio de aves de Guadalupe",
            fr: "L’observatoire d’oiseaux de la Guadeloupe",
        },
        alt: {
            en: "The bird observatory of Guadeloupe",
            es: "El observatorio de aves de Guadalupe",
            fr: "L’observatoire d’oiseaux de la Guadeloupe",
        },
    },
    "Photo_article38_1.jpg": {
        caption: {
            en: "Our lighthouse in the fog atop La Soufrière",
            es: "Nuestro faro en la niebla en la cima de la Soufrière",
            fr: "Notre phare dans le brouillard au sommet de la soufrière",
        },
        alt: {
            en: "Our lighthouse in the fog atop La Soufrière",
            es: "Nuestro faro en la niebla en la cima de la Soufrière",
            fr: "Notre phare dans le brouillard au sommet de la soufrière",
        },
    },
    "Photo_article39_2.jpg": {
        caption: { en: "Sunset over Les Saintes", es: "Atardecer sobre Les Saintes", fr: "Coucher de soleil sur les saintes" },
        alt: { en: "Sunset over Les Saintes", es: "Atardecer sobre Les Saintes", fr: "Coucher de soleil sur les saintes" },
    },
    "Photo_article39_1.jpg": {
        caption: {
            en: "Sunrise at our campsite, Pompierre Bay",
            es: "Amanecer en nuestro campamento, Bahía de Pompierre",
            fr: "Lever de soleil sur notre site de campement, Baie de Pompierre",
        },
        alt: {
            en: "Sunrise at our campsite, Pompierre Bay",
            es: "Amanecer en nuestro campamento, Bahía de Pompierre",
            fr: "Lever de soleil sur notre site de campement, Baie de Pompierre",
        },
    },
    // Third pages gallery
    "Photo_article40_1.jpg": {
        caption: {
            en: "The pontoon of Bas du Fort marina",
            es: "El pontón del puerto de Bas du Fort",
            fr: "Le ponton de la marina de Bas du Fort",
        },
        alt: {
            en: "The pontoon of Bas du Fort marina",
            es: "El pontón del puerto de Bas du Fort",
            fr: "Le ponton de la marina de Bas du Fort",
        },
    },
    "Photo_article43_2.jpg": {
        caption: { en: "Hurah, Joe's boat in Antigua", es: "Hurah, el barco de Joe en Antigua", fr: "Hurah, le bateau de Joe à Antigua" },
        alt: { en: "Hurah, Joe's boat in Antigua", es: "Hurah, el barco de Joe en Antigua", fr: "Hurah, le bateau de Joe à Antigua" },
    },
    "Photo_article44_1.jpg": {
        caption: { en: "The incredible sausage tree", es: "El increíble árbol de las salchichas", fr: "L’incroyable arbre a saucisse" },
        alt: { en: "The incredible sausage tree", es: "El increíble árbol de las salchichas", fr: "L’incroyable arbre a saucisse" },
    },
    "Photo_article45_1.jpg": {
        caption: {
            en: "A warm welcome at Stingray City",
            es: "Una cálida bienvenida en Stingray City",
            fr: "On est plutôt bien accueilli à Stingray City",
        },
        alt: {
            en: "A warm welcome at Stingray City",
            es: "Una cálida bienvenida en Stingray City",
            fr: "On est plutôt bien accueilli à Stingray City",
        },
    },
    "Photo_article45_3.jpg": {
        caption: {
            en: "A fine camping spot at Half Moon Bay",
            es: "Un buen lugar de camping en Half Moon Bay",
            fr: "Un beau sport de bivouac à Half moon bay",
        },
        alt: {
            en: "A fine camping spot at Half Moon Bay",
            es: "Un buen lugar de camping en Half Moon Bay",
            fr: "Un beau sport de bivouac à Half moon bay",
        },
    },
    // Fourth pages gallery
    "Photo_article46_1.jpg": {
        caption: {
            en: "Sunset at the Cousteau Reserve",
            es: "Atardecer en la Reserva Cousteau",
            fr: "Coucher de soleil à la réserve Cousteau",
        },
        alt: {
            en: "Sunset at the Cousteau Reserve",
            es: "Atardecer en la Reserva Cousteau",
            fr: "Coucher de soleil à la réserve Cousteau",
        },
    },
    "Photo_article46_2.jpg": {
        caption: { en: "Kundalini under full sail", es: "Kundalini a toda vela", fr: "le Kundalini toutes voiles dehors" },
        alt: { en: "Kundalini under full sail", es: "Kundalini a toda vela", fr: "le Kundalini toutes voiles dehors" },
    },
    "Photo_article47_1.jpg": {
        caption: { en: "Sunset from Dominica", es: "Atardecer desde Dominica", fr: "Coucher de soleil depuis la Dominique" },
        alt: { en: "Sunset from Dominica", es: "Atardecer desde Dominica", fr: "Coucher de soleil depuis la Dominique" },
    },
    "Photo_article48_1.jpg": {
        caption: { en: "Loaded with bananas", es: "Cargado con plátanos", fr: "Chargé avec les bananes" },
        alt: { en: "Loaded with bananas", es: "Cargado con plátanos", fr: "Chargé avec les bananes" },
    },
    "Photo_article49_5.jpg": {
        caption: { en: "The boiling lake", es: "El lago hirviente", fr: "The boiling lake" },
        alt: { en: "The boiling lake", es: "El lago hirviente", fr: "The boiling lake" },
    },
    "Photo_article50_1.jpg": {
        caption: {
            en: "First glimpse of the mount Pelée, Martinica",
            es: "Primer vistazo al monte Pelée, Martinica",
            fr: "Premier aperçu du volcan martiniquais, la montagne pelée",
        },
        alt: {
            en: "First glimpse of the Pelée mountain, Martinica",
            es: "Primer vistazo al monte Pelée, Martinica",
            fr: "Premier aperçu du volcan martiniquais, la montagne pelée",
        },
    },
    "Photo_article51_1.jpg": {
        caption: { en: "The good life", es: "La buena vida", fr: "La belle vie" },
        alt: { en: "The good life", es: "La buena vida", fr: "La belle vie" },
    },
    "Photo_article52_1.jpg": {
        caption: {
            en: "Best camping spot, near Le Prêcheur",
            es: "El mejor lugar de camping, cerca de Le Prêcheur",
            fr: "Le meilleur spot de bivouac, proche du prêcheur",
        },
        alt: {
            en: "Best camping spot, near Le Prêcheur",
            es: "El mejor lugar de camping, cerca de Le Prêcheur",
            fr: "Le meilleur spot de bivouac, proche du prêcheur",
        },
    },
    "Photo_article52_3.jpg": {
        caption: { en: "The caldera of Mount Pelée", es: "La caldera del Monte Pelée", fr: "La caldeira de la montagne pelée" },
        alt: { en: "The caldera of Mount Pelée", es: "La caldera del Monte Pelée", fr: "La caldeira de la montagne pelée" },
    },
    // Fifth pages gallery
    "Photo_article53_2.jpg": {
        caption: {
            en: "A new maritime adventure, Hopen at Bas du Fort marina",
            es: "Una nueva aventura marítima, Hopen en la marina Bas du Fort",
            fr: "Une nouvelle aventure maritime, Hopen à la marina du bas du fort",
        },
        alt: {
            en: "A new maritime adventure, Hopen at Bas du Fort marina",
            es: "Una nueva aventura marítima, Hopen en la marina Bas du Fort",
            fr: "Une nouvelle aventure maritime, Hopen à la marina du bas du fort",
        },
    },
    "Photo_article55_1.jpg": {
        caption: {
            en: "Headsails and the famous whisker pole in action",
            es: "Las velas de proa y el famoso tangón en plena acción",
            fr: "Les voiles d’avant et le fameux tangon en pleine action",
        },
        alt: {
            en: "Headsails and the famous whisker pole in action",
            es: "Las velas de proa y el famoso tangón en plena acción",
            fr: "Les voiles d’avant et le fameux tangon en pleine action",
        },
    },
    "Photo_article56_2.jpg": {
        caption: {
            en: "A charming street in Willemstad, Curaçao",
            es: "Una calle encantadora de Willemstad, Curazao",
            fr: "Une rue charmante de Willemstad, Curaçao",
        },
        alt: {
            en: "A charming street in Willemstad, Curaçao",
            es: "Una calle encantadora de Willemstad, Curazao",
            fr: "Une rue charmante de Willemstad, Curaçao",
        },
    },
    "Photo_article57_1.jpg": {
        caption: {
            en: "Long-awaited landfall on a new continent",
            es: "La tan esperada llegada al nuevo continente",
            fr: "L’arrivée tant espérée au nouveau continent",
        },
        alt: {
            en: "Long-awaited landfall on a new continent",
            es: "La tan esperada llegada al nuevo continente",
            fr: "L’arrivée tant espérée au nouveau continent",
        },
    },
    "Photo_article59_1.jpg": {
        caption: {
            en: "Souvenir photo of Hopen in Puerto Valero, Colombia",
            es: "Foto recuerdo de Hopen en Puerto Valero, Colombia",
            fr: "Photo souvenir de Hopen a Puerto Valero, Colombia",
        },
        alt: {
            en: "Souvenir photo of Hopen in Puerto Valero, Colombia",
            es: "Foto recuerdo de Hopen en Puerto Valero, Colombia",
            fr: "Photo souvenir de Hopen a Puerto Valero, Colombia",
        },
    },
    // Sixth pages gallery
    "Photo_article59_3.jpg": {
        caption: {
            en: "A lovely quote found by chance in Santa Marta",
            es: "Una hermosa cita encontrada al azar en Santa Marta",
            fr: "Une belle citation rencontré au hasard dans une rue de Santa Marta",
        },
        alt: {
            en: "A lovely quote found by chance in Santa Marta",
            es: "Una hermosa cita encontrada al azar en Santa Marta",
            fr: "Une belle citation rencontré au hasard dans une rue de Santa Marta",
        },
    },
    "Photo_article60_2.jpg": {
        caption: {
            en: "Working in the cornfield under tropical sun",
            es: "Trabajo en el maizal bajo un sol tropical",
            fr: "Le travail dans le champ de maïs sous un soleil tropical",
        },
        alt: {
            en: "Working in the cornfield under tropical sun",
            es: "Trabajo en el maizal bajo un sol tropical",
            fr: "Le travail dans le champ de maïs sous un soleil tropical",
        },
    },
    "Photo_article60_4.jpg": {
        caption: { en: "The every night show", es: "El espectáculo de cada noche", fr: "Le spectacle de chaque soir" },
        alt: { en: "The nightly spectacle", es: "El espectáculo de cada noche", fr: "Le spectacle de chaque soir" },
    },
    "Photo_article61_2.jpg": {
        caption: { en: "Back from shopping", es: "De vuelta de las compras", fr: "Retour des courses" },
        alt: { en: "Back from shopping", es: "De vuelta de las compras", fr: "Retour des courses" },
    },
    "Photo_article62_1.jpg": {
        caption: { en: "An unexpected satisfaction", es: "Una satisfacción inesperada", fr: "Une satisfaction inespérée" },
        alt: { en: "An unexpected satisfaction", es: "Una satisfacción inesperada", fr: "Une satisfaction inespérée" },
    },
    "Photo_article63_2.jpg": {
        caption: { en: "The famous Guacamaya", es: "El famoso Guacamaya", fr: "Le fameux Guacamaya" },
        alt: { en: "The famous Guacamaya", es: "El famoso Guacamaya", fr: "Le fameux Guacamaya" },
    },
    // Seventh pages gallery
    "Photo_article64_1.jpg": {
        caption: {
            en: "A well-loaded bike leaving Santa Marta",
            es: "Una bici bien cargada saliendo de Santa Marta",
            fr: "Un vélo bien chargé au départ de Santa Marta",
        },
        alt: {
            en: "A well-loaded bike leaving Santa Marta",
            es: "Una bici bien cargada saliendo de Santa Marta",
            fr: "Un vélo bien chargé au départ de Santa Marta",
        },
    },
    "Photo_article65_3.jpg": {
        caption: {
            en: "A deserved bath on arrival in Cartagena",
            es: "Un baño merecido al llegar a Cartagena",
            fr: "Un bon bain à l’arrivée à Carthagena",
        },
        alt: {
            en: "A deserved bath on arrival in Cartagena",
            es: "Un baño merecido al llegar a Cartagena",
            fr: "Un bon bain à l’arrivée à Carthagena",
        },
    },
    "Photo_article66_1.jpg": {
        caption: { en: "The diving club of Barú", es: "El club de buceo de Barú", fr: "Le club de plongée de Barù" },
        alt: { en: "The diving club of Barú", es: "El club de buceo de Barú", fr: "Le club de plongée de Barù" },
    },
    "Photo_article67_1.jpg": {
        caption: {
            en: "My resting place in this paradise at Palenque",
            es: "Mi lugar de descanso en este paraíso en Palenque",
            fr: "Mon lieu de repos dans ce paradis à Palenque",
        },
        alt: {
            en: "My resting place in this paradise at Palenque",
            es: "Mi lugar de descanso en este paraíso en Palenque",
            fr: "Mon lieu de repos dans ce paradis à Palenque",
        },
    },
    "Photo_article69_1.jpg": {
        caption: { en: "My hosts in Sahagún", es: "Mis anfitriones de Sahagún", fr: "Mes hôtes de Sahagùn" },
        alt: { en: "My hosts in Sahagún", es: "Mis anfitriones de Sahagún", fr: "Mes hôtes de Sahagùn" },
    },
    "Photo_article70_1.jpg": {
        caption: { en: "Funny sign", es: "Señal curiosa", fr: "Drôle de panneau" },
        alt: { en: "Funny sign", es: "Señal curiosa", fr: "Drôle de panneau" },
    },
    "Photo_article71_3.jpg": {
        caption: {
            en: "Not great for pitching the tent",
            es: "No es ideal para montar la carpa",
            fr: "Pas terrible pour planter la tente",
        },
        alt: { en: "Not great for pitching the tent", es: "No es ideal para montar la tienda", fr: "Pas terrible pour planter la tente" },
    },
    "Photo_article71_4.jpg": {
        caption: {
            en: "Not great for pitching the tent",
            es: "No es ideal para montar la carpa",
            fr: "Pas terrible pour planter la tente",
        },
        alt: { en: "Not great for pitching the tent", es: "No es ideal para montar la tienda", fr: "Pas terrible pour planter la tente" },
    },
    "photo_article73_1.png": {
        caption: {
            en: "The famous droopy-eared cows",
            es: "Las famosas vacas de orejas caídas",
            fr: "Les fameuses vaches aux oreilles pendantes",
        },
        alt: {
            en: "The famous droopy-eared cows",
            es: "Las famosas vacas de orejas caídas",
            fr: "Les fameuses vaches aux oreilles pendantes",
        },
    },
    "photo_article73_5.png": {
        caption: {
            en: "My host from Yarumal full of love",
            es: "Mi anfitrión de Yarumal lleno de amor",
            fr: "Mon hôte de Yarumal plein d’amour",
        },
        alt: {
            en: "My host from Yarumal full of love",
            es: "Mi anfitrión de Yarumal lleno de amor",
            fr: "Mon hôte de Yarumal plein d’amour",
        },
    },
    "photo_article75_1.png": {
        caption: {
            en: "A rather faithful depiction",
            es: "Una representación bastante fiel",
            fr: "Une représentation plutôt ressemblante",
        },
        alt: { en: "A rather faithful depiction", es: "Una representación bastante fiel", fr: "Une représentation plutôt ressemblante" },
    },
    "photo_article76_5.png": {
        caption: { en: "The view from the top of El Peñol", es: "La vista desde la cima de El Peñol", fr: "La vue du haut du peñol" },
        alt: { en: "The view from the top of El Peñol", es: "La vista desde la cima de El Peñol", fr: "La vue du haut du peñol" },
    },
    "photo_article78_1.png": {
        caption: {
            en: "A horse having a drink in Jardín",
            es: "Un caballo tomando algo en Jardín",
            fr: "Un cheval prenant un verre à Jardin",
        },
        alt: { en: "A horse having a drink in Jardín", es: "Un caballo tomando algo en Jardín", fr: "Un cheval prenant un verre à Jardin" },
    },
    // Eighth pages gallery
    "photo_article81_5.png": {
        caption: { en: "The coffee region", es: "La zona cafetera", fr: "La zona cafetera" },
        alt: { en: "The coffee region", es: "La zona cafetera", fr: "La zona cafetera" },
    },
    "photo_article81_6.png": {
        caption: { en: "The famous Cocora palms", es: "Las famosas palmeras de Cocora", fr: "Les fameux palmiers de Cocora" },
        alt: { en: "The famous Cocora palms", es: "Las famosas palmeras de Cocora", fr: "Les fameux palmiers de Cocora" },
    },
    "photo_article82_1.png": {
        caption: {
            en: "At La Línea pass, descending to Ibagué",
            es: "En el alto de La Línea, bajando hacia Ibagué",
            fr: "Au col de la Linea, en descente vers Ibagué",
        },
        alt: {
            en: "At La Línea pass, descending to Ibagué",
            es: "En el alto de La Línea, bajando hacia Ibagué",
            fr: "Au col de la Linea, en descente vers Ibagué",
        },
    },
    "photo_article84_2.png": {
        caption: {
            en: "A fine view of Nevado del Ruiz behind an ambitious cyclist",
            es: "Una bella vista del Nevado del Ruiz tras un ciclista ambicioso",
            fr: "Une belle vue sur le nevado del ruiz derrière un cycliste ambitieux",
        },
        alt: {
            en: "A fine view of Nevado del Ruiz behind an ambitious cyclist",
            es: "Una bella vista del Nevado del Ruiz tras un ciclista ambicioso",
            fr: "Une belle vue sur le nevado del ruiz derrière un cycliste ambitieux",
        },
    },
    "photo_article85_3.png": {
        caption: {
            en: "Family photo in the Falan mine",
            es: "Foto familiar en la mina de Falan",
            fr: "Photo de famille dans la mine de Falan",
        },
        alt: {
            en: "Family photo in the Falan mine",
            es: "Foto familiar en la mina de Falan",
            fr: "Photo de famille dans la mine de Falan",
        },
    },
    "photo_article87_3.png": {
        caption: { en: "My host and her best friend", es: "Mi anfitriona y su mejor amiga", fr: "Mon hôte et sa meilleure amie" },
        alt: { en: "My host and her best friend", es: "Mi anfitriona y su mejor amiga", fr: "Mon hôte et sa meilleure amie" },
    },
    "photo_article89_1.png": {
        caption: {
            en: "Movie-like landscapes in the Tatacoa desert",
            es: "Paisajes de película en el desierto de la Tatacoa",
            fr: "Des paysages de films dans le désert de Tatacoa",
        },
        alt: {
            en: "Movie-like landscapes in the Tatacoa desert",
            es: "Paisajes de película en el desierto de la Tatacoa",
            fr: "Des paysages de films dans le désert de Tatacoa",
        },
    },
    "photo_article90_1.png": {
        caption: { en: "Captivated by the present moment", es: "Cautivado por el momento presente", fr: "Captivé par le moment présent" },
        alt: { en: "Captivated by the present moment", es: "Cautivado por el momento presente", fr: "Captivé par le moment présent" },
    },
    "photo_article91_1.png": {
        caption: { en: "A calm moment on the road", es: "Un momento de calma en la ruta", fr: "Un moment calme sur la route" },
        alt: { en: "A calm moment on the road", es: "Un momento de calma en la ruta", fr: "Un moment calme sur la route" },
    },
    "photo_article92_3.png": {
        caption: { en: "Memories of bygone times", es: "Recuerdo de tiempos pasados", fr: "Souvenir de temps anciens" },
        alt: { en: "Memories of bygone times", es: "Recuerdo de tiempos pasados", fr: "Souvenir de temps anciens" },
    },
    "photo_article93_1.png": {
        caption: { en: "Unexpected encounter on the road", es: "Encuentro sorpresa en la ruta", fr: "Rencontre surprise sur la route" },
        alt: { en: "Unexpected encounter on the road", es: "Encuentro sorpresa en la ruta", fr: "Rencontre surprise sur la route." },
    },
    "photo_article94_2.png": {
        caption: { en: "A temple built in the earth", es: "Un templo construido en la tierra", fr: "Un temple construit dans la terre" },
        alt: { en: "A temple built in the earth", es: "Un templo construido en la tierra", fr: "Un temple construit dans la terre" },
    },
    "photo_article97_1.png": {
        caption: { en: "A perfect picnic spot", es: "Un lugar perfecto para picnic", fr: "Un lieu de picnic parfait" },
        alt: { en: "A perfect picnic spot", es: "Un lugar perfecto para picnic", fr: "Un lieu de picnic parfait" },
    },
    "photo_article98_4.png": {
        caption: {
            en: "Typical páramo flower at high altitude",
            es: "Flor típica del páramo",
            fr: "Fleur typique du paramo à haute altitude",
        },
        alt: {
            en: "Typical páramo flower at high altitude",
            es: "Flor típica del páramo",
            fr: "Fleur typique du paramo à haute altitude",
        },
    },
    "photo_article98_9.png": {
        caption: { en: "For a change, a dirt road", es: "Para variar, un camino de tierra", fr: "Pour changer, un chemin de terre" },
        alt: { en: "For a change, a dirt road", es: "Para variar, un camino de tierra", fr: "Pour changer, un chemin de terre" },
    },
    "photo_article98_12.png": {
        caption: { en: "A fine specimen", es: "Un buen espécimen", fr: "Un beau specimen" },
        alt: { en: "A fine specimen", es: "Un buen espécimen", fr: "Un beau specimen" },
    },
    "photo_article99_1.png": {
        caption: { en: "A good team", es: "Un buen equipo", fr: "Une bonne équipe" },
        alt: { en: "A good team", es: "Un buen equipo", fr: "Une bonne équipe" },
    },
    "photo_article99_5.png": {
        caption: {
            en: "A house whose hospitality is beyond doubt",
            es: "Una casa cuya hospitalidad no deja dudas",
            fr: "Une maison dont on ne peut pas douter de l’hospitalité",
        },
        alt: {
            en: "A house whose hospitality is beyond doubt",
            es: "Una casa cuya hospitalidad no deja dudas",
            fr: "Une maison dont on ne peut pas douter de l’hospitalité",
        },
    },
    "photo_article100_1.png": {
        caption: { en: "Sanctuary of Las Lajas", es: "Santuario de Las Lajas", fr: "Sanctuaire de las Lajas" },
        alt: { en: "Sanctuary of Las Lajas", es: "Santuario de Las Lajas", fr: "Sanctuaire de las Lajas" },
    },
    // Ninth pages gallery
    "photo_article101_2.png": {
        caption: {
            en: "Stunning view of Cuicocha and its islands",
            es: "Vista impresionante del Cuicocha y sus islas",
            fr: "Vue imprenable sur le Cuicocha et ses îles",
        },
        alt: {
            en: "Stunning view of Cuicocha and its islands",
            es: "Vista impresionante del Cuicocha y sus islas",
            fr: "Vue imprenable sur le Cuicocha et ses îles",
        },
    },
    "photo_article101_8.png": {
        caption: { en: "The famous Taita", es: "El famoso Taita", fr: "Le fameux Taita" },
        alt: { en: "The famous Taita", es: "El famoso Taita", fr: "Le fameux Taita" },
    },
    "photo_article102_4.png": {
        caption: {
            en: "Probably my favorite spot in Quito",
            es: "Sin duda mi lugar favorito de Quito",
            fr: "Sans doute l’endroit de Quito que j’ai le plus apprécié",
        },
        alt: {
            en: "Probably my favorite spot in Quito",
            es: "Sin duda mi lugar favorito de Quito",
            fr: "Sans doute l’endroit de Quito que j’ai le plus apprécié",
        },
    },
    "photo_article105_1.png": {
        caption: {
            en: "The workshop that gets me back in the saddle",
            es: "El taller que me vuelve a poner en marcha",
            fr: "Le garage qui me remet en selle",
        },
        alt: {
            en: "The workshop that gets me back in the saddle",
            es: "El taller que me vuelve a poner en marcha",
            fr: "Le garage qui me remet en selle",
        },
    },
    "photo_article106_2.png": {
        caption: {
            en: "I finally reach the Pacific Ocean",
            es: "Por fin llego al Océano Pacífico",
            fr: "Je rejoins enfin l’océan Pacifique",
        },
        alt: { en: "I finally reach the Pacific Ocean", es: "Por fin llego al Océano Pacífico", fr: "Je rejoins enfin l’océan Pacifique" },
    },
    "photo_article107_1.png": {
        caption: {
            en: "The daily struggle of Puerto Lopez fishermen",
            es: "La lucha diaria de los pescadores de Puerto López",
            fr: "Le combat quotidien des pécheurs de Puerto Lopez",
        },
        alt: {
            en: "The daily struggle of Puerto Lopez fishermen",
            es: "La lucha diaria de los pescadores de Puerto López",
            fr: "Le combat quotidien des pécheurs de Puerto Lopez",
        },
    },
    "photo_article108_1.png": {
        caption: { en: "The first whale!", es: "¡La primera ballena!", fr: "La première baleine!" },
        alt: { en: "The first whale!", es: "¡La primera ballena!", fr: "La première baleine!" },
    },
    "photo_article108_2.png": {
        caption: {
            en: "Blue-footed boobies of Isla de la Plata",
            es: "Piqueros de patas azules de la Isla de la Plata",
            fr: "Les fous à pattes bleus de l’île de la plata",
        },
        alt: {
            en: "Blue-footed boobies of Isla de la Plata",
            es: "Piqueros de patas azules de la Isla de la Plata",
            fr: "Les fous à pattes bleus de l’île de la plata",
        },
    },
    "photo_article108_8.png": {
        caption: {
            en: "Statue representing the origins of Puerto Lopez",
            es: "Estatua que representa los orígenes de Puerto López",
            fr: "Statut représentant les origines de Puerto Lopez",
        },
        alt: {
            en: "Statue representing the origins of Puerto Lopez",
            es: "Estatua que representa los orígenes de Puerto López",
            fr: "Statut représentant les origines de Puerto Lopez",
        },
    },
    "photo_article112_1.png": {
        caption: {
            en: "Today's dinner lacks variety.",
            es: "La cena de hoy hace falta variedad.",
            fr: "Le dîner du jour manque de variété.",
        },
        alt: { en: "Today's dinner lacks variety.", es: "La cena de hoy hace falta variedad.", fr: "Le dîner du jour manque de variété." },
    },
    "photo_article113_1.png": {
        caption: {
            en: "The last pedal strokes have been made",
            es: "Se han dado los últimos pedalazos",
            fr: "Les derniers coups de pédale ont été donnés",
        },
        alt: {
            en: "The last pedal strokes have been made",
            es: "Se han dado los últimos pedalazos",
            fr: "Les derniers coups de pédale ont été donnés",
        },
    },
    "photo_article114_1.png": {
        caption: {
            en: "The wild banks in central Cuenca",
            es: "Las orillas salvajes en el centro de Cuenca",
            fr: "Les berges sauvages dans le centre de Cuenca",
        },
        alt: {
            en: "The wild banks in central Cuenca",
            es: "Las orillas salvajes en el centro de Cuenca",
            fr: "Les berges sauvages dans le centre de Cuenca",
        },
    },
    "photo_article114_4.png": {
        caption: { en: "Cajas National Park", es: "Parque Nacional de las Cajas", fr: "Le parc des Cajas" },
        alt: { en: "Cajas National Park", es: "Parque Nacional de las Cajas", fr: "Le parc des Cajas" },
    },
    // Tenth pages gallery
    "photo_article116_1.png": {
        caption: {
            en: "Always time to go to the market",
            es: "Siempre hay tiempo para ir al mercado",
            fr: "Toujours le temps d’aller au marché",
        },
        alt: {
            en: "Always time to go to the market",
            es: "Siempre hay tiempo para ir al mercado",
            fr: "Toujours le temps d’aller au marché",
        },
    },
    "photo_article117_3.png": {
        caption: { en: "Main place to spend time", es: "Lugar principal para pasar el tiempo", fr: "Lieu principal pour passer le temps" },
        alt: { en: "Main place to spend time", es: "Lugar principal para pasar el tiempo", fr: "Lieu principal pour passer le temps" },
    },
    "photo_article117_4.png": {
        caption: { en: "Our house in Llucanayacu", es: "Nuestra casa en Llucanayacu", fr: "Notre maison a LLucanayacu" },
        alt: { en: "Our house in Llucanayacu", es: "Nuestra casa en Llucanayacu", fr: "Notre maison a LLucanayacu" },
    },
    "photo_article118_1.png": {
        caption: {
            en: "Graphic representation of ayahuasca",
            es: "Representación gráfica de la ayahuasca",
            fr: "Représentation graphique de l’ayahuasca",
        },
        alt: {
            en: "Graphic representation of ayahuasca",
            es: "Representación gráfica de la ayahuasca",
            fr: "Représentation graphique de l’ayahuasca",
        },
    },
    "photo_article119_1.png": {
        caption: {
            en: "Our arrival in Iquitos in water full of pink dolphins",
            es: "Nuestra llegada a Iquitos en aguas llenas de delfines rosados",
            fr: "Notre arrivée à Iquitos dans une eau pleine de dauphin rose",
        },
        alt: {
            en: "Our arrival in Iquitos in water full of pink dolphins",
            es: "Nuestra llegada a Iquitos en aguas llenas de delfines rosados",
            fr: "Notre arrivée à Iquitos dans une eau pleine de dauphin rose",
        },
    },
    "photo_article120_6.png": {
        caption: { en: "Pure Amazonia", es: "La pura Amazonía", fr: "La pure amazonie" },
        alt: { en: "Pure Amazonia", es: "La pura Amazonía", fr: "La pure amazonie" },
    },
    "photo_article125_5.png": {
        caption: { en: "My evening company", es: "Mi compañía de la noche", fr: "Ma compagnie du soir" },
        alt: { en: "My evening company", es: "Mi compañía de la noche", fr: "Ma compagnie du soir" },
    },
    "photo_article125_11.png": {
        caption: { en: "I finally arrive at the lost city", es: "Al fin llego a la ciudad perdida", fr: "J’arrive enfin à la cité perdue" },
        alt: { en: "I finally arrive at the lost city", es: "Al fin llego a la ciudad perdida", fr: "J’arrive enfin à la cité perdue" },
    },
    "photo_article125_14.png": {
        caption: { en: "The famous terraced steps", es: "Las famosas terrazas en escalones", fr: "Les fameuses terrasses en escaliers" },
        alt: { en: "The famous terraced steps", es: "Las famosas terrazas en escalones", fr: "Les fameuses terrasses en escaliers" },
    },
    "photo_article126_2.png": {
        caption: { en: "The ruins of Ollantaytambo", es: "Las ruinas de Ollantaytambo", fr: "Les ruines d’Ollantaytambo" },
        alt: { en: "The ruins of Ollantaytambo", es: "Las ruinas de Ollantaytambo", fr: "Les ruines d’Ollantaytambo" },
    },
    "photo_article126_4.png": {
        caption: { en: "The village seen from the ruins", es: "El pueblo visto desde las ruinas", fr: "Le village vue depuis les ruines" },
        alt: { en: "The village seen from the ruins", es: "El pueblo visto desde las ruinas", fr: "Le village vue depuis les ruines" },
    },
    "photo_article126_6.png": {
        caption: { en: "The famous rainbow mountains", es: "Las famosas montañas de colores", fr: "Les fameuses montagnes de couleurs" },
        alt: { en: "The famous rainbow mountains", es: "Las famosas montañas de colores", fr: "Les fameuses montagnes de couleurs" },
    },
    "photo_article127_1.png": {
        caption: { en: "On the way to Machu Picchu", es: "En camino al Machu Picchu", fr: "Sur le chemin du Macchu Picchu" },
        alt: { en: "On the way to Machu Picchu", es: "En camino al Machu Picchu", fr: "Sur le chemin du Macchu Picchu" },
    },
    "photo_article127_2.png": {
        caption: { en: "The famous one", es: "El famoso", fr: "Le fameux" },
        alt: { en: "The famous one", es: "El famoso", fr: "Le fameux" },
    },
    "photo_article128_6.png": {
        caption: {
            en: "A birthday on the Island of the Moon",
            es: "Un cumpleaños en la Isla de la Luna",
            fr: "Un anniversaire sur l’île de la lune",
        },
        alt: {
            en: "A birthday on the Island of the Moon",
            es: "Un cumpleaños en la Isla de la Luna",
            fr: "Un anniversaire sur l’île de la lune",
        },
    },
    "photo_article128_9.png": {
        caption: { en: "A beautiful connection", es: "Una hermosa conexión", fr: "Une belle connexion" },
        alt: { en: "A beautiful connection", es: "Una hermosa conexión", fr: "Une belle connexion" },
    },
    // Eleventh pages gallery
    "photo_article129_1.png": {
        caption: { en: "The witches' market", es: "El mercado de las brujas", fr: "Le marché des sorcières" },
        alt: { en: "The witches' market", es: "El mercado de las brujas", fr: "Le marché des sorcières" },
    },
    "photo_article130_1.png": {
        caption: {
            en: "The Bolivian plateau over 4000m",
            es: "El altiplano boliviano a más de 4000 m",
            fr: "Le plateau bolivien à plus de 4000m d’altitude",
        },
        alt: {
            en: "The Bolivian plateau over 4000m",
            es: "El altiplano boliviano a más de 4000 m",
            fr: "Le plateau bolivien à plus de 4000m d’altitude",
        },
    },
    "photo_article131_8.png": {
        caption: {
            en: "You don't get an opportunity like this every day...",
            es: "No se tiene una oportunidad así todos los días...",
            fr: "On a pas une opportunité comme ça tous les jours...",
        },
        alt: {
            en: "You don't get an opportunity like this every day...",
            es: "No se tiene una oportunidad así todos los días...",
            fr: "On a pas une opportunité comme ça tous les jours...",
        },
    },
    "photo_article131_10.png": {
        caption: {
            en: "Fleeing the dinosaurs of the desert",
            es: "Huyendo de los dinosaurios del desierto",
            fr: "Fuyant les dinosaures du désert",
        },
        alt: {
            en: "Fleeing the dinosaurs of the desert",
            es: "Huyendo de los dinosaurios del desierto",
            fr: "Fuyant les dinosaures du désert",
        },
    },
    "photo_article132_1.png": {
        caption: { en: "Funny threat", es: "Amenaza curiosa", fr: "Drôle de menace" },
        alt: { en: "Funny threat", es: "Amenaza curiosa", fr: "Drôle de menace" },
    },
    "photo_article132_4.png": {
        caption: { en: "An ambitious Mexican Vespa", es: "Una Vespa mexicana ambiciosa", fr: "Une vespa mexicaine ambitieuse" },
        alt: { en: "An ambitious Mexican Vespa", es: "Una Vespa mexicana ambiciosa", fr: "Une vespa mexicaine ambitieuse" },
    },
    "photo_article134_1.png": {
        caption: { en: "Far West cacti", es: "Cactus del Lejano Oeste", fr: "Les cactus du farwest" },
        alt: { en: "Far West cacti", es: "Cactus del Lejano Oeste", fr: "Les cactus du farwest" },
    },
    // Twelth pages gallery
    "photo_article134_2.png": {
        caption: {
            en: "Argentina's rainbow mountains, Hornocal",
            es: "Las montañas de colores de Argentina, el Hornocal",
            fr: "Les montagnes de couleurs Argentine, l’Hornocal",
        },
        alt: {
            en: "Argentina's rainbow mountains, Hornocal",
            es: "Las montañas de colores de Argentina, el Hornocal",
            fr: "Les montagnes de couleurs Argentine, l’Hornocal",
        },
    },
    "photo_article135_1.png": {
        caption: {
            en: "The Jujuy salt flats (Salinas Grandes)",
            es: "El salar de Jujuy o Salinas Grandes",
            fr: "Le salar de Jujuy ou Salinas grandes",
        },
        alt: {
            en: "The Jujuy salt flats (Salinas Grandes)",
            es: "El salar de Jujuy o Salinas Grandes",
            fr: "Le salar de Jujuy ou Salinas grandes",
        },
    },

    "photo_article137_2.png": {
        caption: {
            en: "Our camp we didn’t want to leave",
            es: "Nuestro campamento que no queríamos abandonar",
            fr: "Notre campement que nous ne voulions plus quitter",
        },
        alt: {
            en: "Our camp we didn’t want to leave",
            es: "Nuestro campamento que no queríamos abandonar",
            fr: "Notre campement que nous ne voulions plus quitter",
        },
    },
    "photo_article137_1.png": {
        caption: { en: "A mate in the amphitheater", es: "Un mate en el anfiteatro", fr: "Un maté en el amphiteatro" },
        alt: { en: "A mate in the amphitheater", es: "Un mate en el anfiteatro", fr: "Un maté en el amphiteatro" },
    },
    "photo_article140_2.png": {
        caption: { en: "An emotional farewell", es: "Una despedida llena de emociones", fr: "Un aurevoir plein d’émotions" },
        alt: { en: "An emotional farewell", es: "Una despedida llena de emociones", fr: "Un aurevoir plein d’émotions" },
    },
};

export function getPhotoMeta(filename: string): { caption: string; alt: string } {
    const lang = (i18n.language || "en").slice(0, 2) as "en" | "es" | "fr";
    const entry = localizedMeta[filename];
    if (entry) {
        const resolve = (text: LocalizedText): string => (typeof text === "string" ? text : text[lang] ?? text.en ?? text.fr ?? filename);
        return { caption: resolve(entry.caption), alt: resolve(entry.alt) };
    }
    return { caption: filename, alt: filename };
}

export default getPhotoMeta;
