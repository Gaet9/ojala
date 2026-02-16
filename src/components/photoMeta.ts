import i18n from "@/i18n";

type LocalizedText = { en?: string; es?: string; fr?: string } | string;

// Localized metadata for gallery images (progressively localized)
const localizedMeta: Record<string, { caption: LocalizedText; alt: LocalizedText }> = {
    // (Map images not used in the gallery lookup; itinerary captions live in i18n)

    // First pages gallery (fully localized)
    "Photo_article1_1.jpg": {
        caption: { en: "Jean-Louis' catamaran", es: "El catamarán de Jean-Louis", fr: "Le Catamaran de Jean-Louis" },
        alt: { en: "Jean-Louis' catamaran", es: "El catamarán de Jean-Louis", fr: "Le Catamaran de Jean-Louis" },
    },
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
    "Photo_article3_2.jpg": {
        caption: {
            en: "Jeremy holds the gennaker that fell into the water",
            es: "Jérémy retiene el gennaker que se ha caído al agua",
            fr: "Jérémy qui retient le gennaker tombé a l'eau",
        },
        alt: {
            en: "Jeremy holds the gennaker that fell into the water",
            es: "Jérémy retiene el gennaker que se ha caído al agua",
            fr: "Jérémy qui retient le gennaker tombé a l'eau",
        },
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

    "Photo_article4_2.jpg": {
        caption: {
            en: "Posing for a picture on the nets",
            es: "Pausando en los filetes del catamaran",
            fr: "Je prends la pose sur les filets du catamaran",
        },
        alt: {
            en: "Posing for a picture on the nets",
            es: "Pausando en los filetes del catamaran",
            fr: "Je prends la pose sur les filets du catamaran",
        },
    },
    "Photo_article5_1.jpg": {
        caption: { en: "First stopover", es: "Primera escala", fr: "Première escale" },
        alt: { en: "First stopover", es: "Primera escala", fr: "Première escale" },
    },
    "Photo_article6_1.jpg": {
        caption: {
            en: "Viewing the mountains of Andalucía",
            es: "Viendo las montañas de Andalucía",
            fr: "Vue sur les montagnes d'Andalousie",
        },
        alt: { en: "Viewing the mountains of Andalucía", es: "Viendo las montañas de Andalucía", fr: "Vue sur les montagnes d'Andalousie" },
    },
    "Photo_article7_1.jpg": {
        caption: {
            en: "Sunset at the Strait of Gibraltar",
            es: "Puesta de sol en las puertas del estrecho",
            fr: "Coucher de soleil aux portes du détroit",
        },
        alt: {
            en: "Sunset at the Strait of Gibraltar",
            es: "Puesta de sol en las puertas del estrecho",
            fr: "Coucher de soleil aux portes du détroit",
        },
    },
    "Photo_article8_1.jpg": {
        caption: {
            en: "Descending along the Spanish coast",
            es: "Descenso por la costa española",
            fr: "Descente le long de la côte espagnole",
        },
        alt: {
            en: "Descending along the Spanish coast",
            es: "Descenso por la costa española",
            fr: "Descente le long de la côte espagnole",
        },
    },
    "Photo_article8_2.jpg": {
        caption: { en: "The traffic intensifies", es: "El tráfico se intensifica", fr: "Le traffic s'intensifie" },
        alt: { en: "The traffic intensifies", es: "El tráfico se intensifica", fr: "Le traffic s'intensifie" },
    },
    "Photo_article9_1.jpg": {
        caption: { en: "Gibraltar", es: "Gibraltar", fr: "Gibraltar" },
        alt: { en: "Gibraltar", es: "Gibraltar", fr: "Gibraltar" },
    },
    "Photo_article13_1.jpg": {
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
    "Photo_article10_1.jpg": {
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
    "Photo_article15_1.jpg": {
        caption: { en: "Deep diving in Lanzarote", es: "Buceando en Lanzarote", fr: "Plongée sous-marine a Lanzarote" },
        alt: { en: "Deep diving in Lanzarote", es: "Buceando en Lanzarote", fr: "Plongée sous-marine a Lanzarote" },
    },
    "Photo_article16_1.jpg": {
        caption: { en: "The Soho crew", es: "El grupo del Soho", fr: "La bande du Soho" },
        alt: { en: "The Soho crew", es: "El grupo del Soho", fr: "La bande du Soho" },
    },
    "Photo_article19_1.jpg": {
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
    "Photo_article17_1.jpg": {
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
    "Photo_article24_2.jpg": {
        caption: {
            en: "Leaving Mindelo for the great crossing",
            es: "Saliendo de Mindelo para la gran travesía",
            fr: "Départ de Mindelo pour la grande traversée",
        },
        alt: {
            en: "Leaving Mindelo for the great crossing",
            es: "Saliendo de Mindelo para la gran travesía",
            fr: "Départ de Mindelo pour la grande traversée",
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
    "Photo_article28_1.jpg": {
        caption: {
            en: "Up the mast to repair the winch of the main sail",
            es: "Arriba el mastil, arreglando la polea de la vela grande",
            fr: "En haut du mât pour réparer la poulie de grand-voile",
        },
        alt: {
            en: "Up the mast to repair the winch of the main sail",
            es: "Arriba el mastil, arreglando la polea de la vela grande",
            fr: "En haut du mât pour réparer la poulie de grand-voile",
        },
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
    "Photo_article28_3.jpg": {
        caption: {
            en: "The famous Penduick 3 of the Tabarly family",
            es: "El famoso Penduick 3 de la familia Tabarly",
            fr: "Le fameux Penduick 3 de la famille Tabarly",
        },
        alt: {
            en: "The famous Penduick 3 of the Tabarly family",
            es: "El famoso Penduick 3 de la familia Tabarly",
            fr: "Le fameux Penduick 3 de la famille Tabarly",
        },
    },
    "Photo_article29_1.jpg": {
        caption: { en: "The Gosier beach", es: "La playa de Gosier", fr: "La plage du Gosier" },
        alt: { en: "The Gosier beach", es: "La playa de Gosier", fr: "La plage du Gosier" },
    },
    // Second pages gallery
    "Photo_article30_1.jpg": {
        caption: { en: "View from my office", es: "Vista desde mi oficina", fr: "Vue de mon bureau" },
        alt: { en: "View from my office", es: "Vista desde mi oficina", fr: "Vue de mon bureau" },
    },
    "Photo_article30_2.jpg": {
        caption: {
            en: "Our surfboard rental stand",
            es: "Nuestro puesto de alquiler de tablas de surf",
            fr: "Notre stand de location de planche de surf",
        },
        alt: {
            en: "Our surfboard rental stand",
            es: "Nuestro puesto de alquiler de tablas de surf",
            fr: "Notre stand de location de planche de surf",
        },
    },
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

    "Photo_article31_1.jpg": {
        caption: {
            en: "Some gardening with the machete",
            es: "Un poco de jardinería con el machete",
            fr: "Un peu de jardinage à la machete",
        },
        alt: { en: "Some gardening with the machete", es: "Un poco de jardinería con el machete", fr: "Un peu de jardinage à la machete" },
    },
    "Photo_article31_3.jpg": {
        caption: {
            en: "View from the tip of the castles",
            es: "Vista desde la punta de los castillos",
            fr: "Vue depuis la pointe des chateaux",
        },
        alt: {
            en: "View from the tip of the castles",
            es: "Vista desde la punta de los castillos",
            fr: "Vue depuis la pointe des chateaux",
        },
    },
    "Photo_article31_2.jpg": {
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

    "Photo_article32_1.jpg": {
        caption: {
            en: "Entering the depths of the island",
            es: "Entrando en las profundidades de la isla",
            fr: "Nous entrons dans les profondeurs de l'île",
        },
        alt: {
            en: "Entering the depths of the island",
            es: "Entrando en las profundidades de la isla",
            fr: "Nous entrons dans les profondeurs de l'île",
        },
    },
    "Photo_article32_2.jpg": {
        caption: { en: "The dense rainforest", es: "El bosque denso", fr: "La forêt est dense" },
        alt: { en: "The dense rainforest", es: "El bosque denso", fr: "La forêt est dense" },
    },
    "Photo_article33_1.jpg": {
        caption: { en: "At least there is a sign", es: "Al menos hay un cartel", fr: "Au moins il y a un panneau" },
        alt: { en: "At least there is a sign", es: "Al menos hay un cartel", fr: "Au moins il y a un panneau" },
    },
    "Photo_article33_2.jpg": {
        caption: { en: "Wading all day", es: "Vadeando todo el día", fr: "On patauge toute la journée" },
        alt: { en: "Wading all day", es: "Vadeando todo el día", fr: "On patauge toute la journée" },
    },
    "Photo_article33_3.jpg": {
        caption: { en: "Endless", es: "Interminable", fr: "Interminable" },
        alt: { en: "Endless", es: "Interminable", fr: "Interminable" },
    },
    "Photo_article33_4.jpg": {
        caption: { en: "We don't pass this way often", es: "No pasamos por aquí a menudo", fr: "On ne passe pas souvent par ici" },
        alt: { en: "We don't pass this way often", es: "No pasamos por aquí a menudo", fr: "On ne passe pas souvent par ici" },
    },
    "Photo_article34_1.jpg": {
        caption: {
            en: "We enjoy the view.",
            es: "Disfrutamos la vista.",
            fr: "Nous profitons d'une fenêtre avec vue.",
        },
        alt: {
            en: "We enjoy the view.",
            es: "Disfrutamos la vista.",
            fr: "Nous profitons d'une fenêtre avec vue.",
        },
    },
    "Photo_article34_2.jpg": {
        caption: { en: "The famous mamelles", es: "Las famosas mamelles", fr: "Les fameuses mamelles" },
        alt: { en: "The famous mamelles", es: "Las famosas mamelles", fr: "Les fameuses mamelles" },
    },
    "Photo_article34_3.jpg": {
        caption: { en: "Taking the height", es: "Tomando la altura", fr: "On prend de la hauteur" },
        alt: { en: "Taking the height", es: "Tomando la altura", fr: "On prend de la hauteur" },
    },
    "Photo_article34_4.jpg": {
        caption: { en: "First panorama", es: "Primer panorama", fr: "Premier panorama" },
        alt: { en: "First panorama", es: "Primer panorama", fr: "Premier panorama" },
    },
    "Photo_article34_5.jpg": {
        caption: { en: "The highest point of the trek", es: "Punto más alto del trek", fr: "Point le plus haut du trek" },
        alt: { en: "The highest point of the trek", es: "Punto más alto del trek", fr: "Point le plus haut du trek" },
    },
    "Photo_article34_6.jpg": {
        caption: { en: "Sunset from the cabin", es: "Puesta de sol desde el refugio", fr: "Joli coucher de soleil depuis le refuge" },
        alt: { en: "Sunset from the cabin", es: "Puesta de sol desde el refugio", fr: "Joli coucher de soleil depuis le refuge" },
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
    "Photo_article35_1.jpg": {
        caption: { en: "We are on the right path", es: "Estamos en la ruta correcta", fr: "Visiblement nous sommes bien sur le chemin" },
        alt: { en: "We are on the right path", es: "Estamos en la ruta correcta", fr: "Visiblement nous sommes bien sur le chemin" },
    },
    "Photo_article35_2.jpg": {
        caption: {
            en: "Enjoying the view at any opportunity",
            es: "Aprovechamos cada ventana con vista",
            fr: "Nous profitons de chaque fenêtre avec vue",
        },
        alt: {
            en: "Enjoying the view at any opportunity",
            es: "Aprovechamos cada ventana con vista",
            fr: "Nous profitons de chaque fenêtre avec vue",
        },
    },
    "Photo_article35_3.jpg": {
        caption: { en: "Between hiking and climbing", es: "Entre senderismo y escalada", fr: "Entre randonnée et escalade" },
        alt: { en: "Between hiking and climbing", es: "Entre senderismo y escalada", fr: "Entre randonnée et escalade" },
    },
    "Photo_article35_6.jpg": {
        caption: { en: "New panorama", es: "Nuevo panorama", fr: "Nouveau panorama" },
        alt: { en: "New panorama", es: "Nuevo panorama", fr: "Nouveau panorama" },
    },
    "Photo_article35_4.jpg": {
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
    "Photo_article36_1.jpg": {
        caption: { en: "Natural disaster", es: "Un desastre natural", fr: "Un glissement de terrain" },
        alt: { en: "Natural disaster", es: "Un desastre natural", fr: "Un glissement de terrain" },
    },
    "Photo_article36_2.jpg": {
        caption: { en: "The banana farms", es: "Los bananeros", fr: "les bananiers" },
        alt: { en: "The banana farms", es: "Los bananeros", fr: "les bananiers" },
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
    "Photo_article37_2.jpg": {
        caption: { en: "The Waterfall of the Carbet", es: "Caída del Carbet", fr: "Chute du Carbet" },
        alt: { en: "The Waterfall of the Carbet", es: "Caída del Carbet", fr: "Chute du Carbet" },
    },
    "Photo_article37_3.jpg": {
        caption: {
            en: "Another angle of the Carbet waterfall",
            es: "Otro ángulo de la caída del Carbet",
            fr: "Chute du Carbet sous un autre angle",
        },
        alt: {
            en: "Another angle of the Carbet waterfall",
            es: "Otro ángulo de la caída del Carbet",
            fr: "Chute du Carbet sous un autre angle",
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
    "Photo_article38_2.jpg": {
        caption: { en: "A little hike up the volcano", es: "Una escapadita arriba el volcán", fr: "Une promenade au sommet du volcan" },
        alt: { en: "A little hike up the volcano", es: "Una escapadita arriba el volcán", fr: "Une promenade au sommet du volcan" },
    },
    "Photo_article38_3.jpg": {
        caption: { en: "Souvenir photo from the top", es: "Foto recuerdo desde la cima", fr: "Photo souvenir du sommet du volcan" },
        alt: { en: "Souvenir photo from the top", es: "Foto recuerdo desde la cima", fr: "Photo souvenir du sommet du volcan" },
    },
    "Photo_article38_4.jpg": {
        caption: {
            en: "Going down, the sun shows up again",
            es: "Bajando, el sol vuelve a aparecer",
            fr: "Sur la descente la soleil revient",
        },
        alt: { en: "Going down, the sun shows up again", es: "Bajando, el sol vuelve a aparecer", fr: "Sur la descente la soleil revient" },
    },
    "Photo_article38_5.jpg": {
        caption: { en: "Landscape description", es: "Descripción del paisaje", fr: "Description du paysage" },
        alt: { en: "Landscape description", es: "Descripción del paisaje", fr: "Description du paysage" },
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

    "Photo_article39_2.jpg": {
        caption: { en: "Sunset over Les Saintes", es: "Atardecer sobre Les Saintes", fr: "Coucher de soleil sur les saintes" },
        alt: { en: "Sunset over Les Saintes", es: "Atardecer sobre Les Saintes", fr: "Coucher de soleil sur les saintes" },
    },
    "Photo_article39_3.jpg": {
        caption: { en: "Iguana in the Fort Napoléon", es: "Un iguana en el Fort Napoléon", fr: "Un Iguane au Fort Napoléon" },
        alt: { en: "Iguana in the Fort Napoléon", es: "Un iguana en el Fort Napoléon", fr: "Un Iguane au Fort Napoléon" },
    },
    "Photo_article39_4.jpg": {
        caption: { en: "View from the Fort Napoléon", es: "Vista desde el Fort Napoléon", fr: "Vue depuis le Fort Napoléon" },
        alt: { en: "View from the Fort Napoléon", es: "Vista desde el Fort Napoléon", fr: "Vue depuis le Fort Napoléon" },
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

    "Photo_article41_1.jpg": {
        caption: {
            en: "The serpentine eel in free diving",
            es: "La anguila serpiente en apnea",
            fr: "Anguille serpentine en apnée aux Saintes",
        },
        alt: {
            en: "The serpentine eel in free diving",
            es: "La anguila serpiente en apnea",
            fr: "Anguille serpentine en apnée aux Saintes",
        },
    },
    "Photo_article41_2.jpg": {
        caption: { en: "Free diving session at the Saintes", es: "Apnea libre en las Saintes", fr: "Session apnée aux Saintes" },
        alt: { en: "Free diving session at the Saintes", es: "Apnea libre en las Saintes", fr: "Session apnée aux Saintes" },
    },
    "Photo_article41_3.jpg": {
        caption: { en: "Free diving session at the Saintes", es: "Apnea libre en las Saintes", fr: "Session apnée aux Saintes" },
        alt: { en: "Free diving session at the Saintes", es: "Apnea libre en las Saintes", fr: "Session apnée aux Saintes" },
    },
    "Photo_article41_4.jpg": {
        caption: {
            en: "Observation of the fauna and flora in free diving",
            es: "Observación de la fauna y flora en apnea",
            fr: "Observation de la faune et flore en apnée",
        },
        alt: {
            en: "Observation of the fauna and flora in free diving",
            es: "Observación de la fauna y flora en apnea",
            fr: "Observation de la faune et flore en apnée",
        },
    },
    "Photo_article41_5.jpg": {
        caption: { en: "The workshop trimaran", es: "El taller trimaran", fr: "Trimaran de l'atelier" },
        alt: { en: "The workshop trimaran", es: "El taller trimaran", fr: "Trimaran de l'atelier" },
    },
    "Photo_article41_6.jpg": {
        caption: { en: "A small trip on a sailboat", es: "Una escapadita en vela", fr: "Petite sortie en voilier" },
        alt: { en: "A small trip on a sailboat", es: "Una escapadita en vela", fr: "Petite sortie en voilier" },
    },
    "Photo_article41_7.jpg": {
        caption: { en: "On the way to Marie-Galante", es: "En dirección a Marie-Galante", fr: "En direction de Marie-Galante" },
        alt: { en: "On the way to Marie-Galante", es: "En dirección a Marie-Galante", fr: "En direction de Marie-Galante" },
    },
    "Photo_article42_1.jpg": {
        caption: {
            en: "The Tarzan with which Diony leaves",
            es: "El Tarzan con el cual Diony se va",
            fr: "Le Tarzan avec lequel s'en va Diony",
        },
        alt: {
            en: "The Tarzan with which Diony leaves",
            es: "El Tarzan con el cual Diony se va",
            fr: "Le Tarzan avec lequel s'en va Diony",
        },
    },
    "Photo_article43_1.jpg": {
        caption: { en: "Chilean jasmine", es: "Jazmin de Chile", fr: "Jasmin du Chilie" },
        alt: { en: "Chilean jasmine", es: "Jazmin de Chile", fr: "Jasmin du Chilie" },
    },
    "Photo_article43_2.jpg": {
        caption: { en: "Hurah, Joe's boat in Antigua", es: "Hurah, el barco de Joe en Antigua", fr: "Hurah, le bateau de Joe à Antigua" },
        alt: { en: "Hurah, Joe's boat in Antigua", es: "Hurah, el barco de Joe en Antigua", fr: "Hurah, le bateau de Joe à Antigua" },
    },
    "Photo_article43_4.jpg": {
        caption: { en: "A flower of Clusier", es: "Una flor de Clusier", fr: "Une fleur de Clusier" },
        alt: { en: "A flower of Clusier", es: "Una flor de Clusier", fr: "Une fleur de Clusier" },
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
    "Photo_article45_2.jpg": {
        caption: { en: "A flower of Frangipani", es: "Una flor de Frangipani", fr: "Fleur de Frangipanier" },
        alt: { en: "A flower of Frangipani", es: "Una flor de Frangipani", fr: "Fleur de Frangipanier" },
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
    "Photo_article45_4.jpg": {
        caption: { en: "The winner of the race in Antigua", es: "Ganador de la carrera de Antigua", fr: "Gagnant de la course d'Antigua" },
        alt: { en: "The winner of the race in Antigua", es: "Ganador de la carrera de Antigua", fr: "Gagnant de la course d'Antigua" },
    },
    "Photo_article45_5.jpg": {
        caption: {
            en: "The sunset from the heights of Antigua",
            es: "Atardecer desde las alturas de Antigua",
            fr: "Coucher de soleil depuis les hauteurs d'Antigua",
        },
        alt: {
            en: "The sunset from the heights of Antigua",
            es: "Atardecer desde las alturas de Antigua",
            fr: "Coucher de soleil depuis les hauteurs d'Antigua",
        },
    },
    "Photo_article45_6.jpg": {
        caption: { en: "The horizon in view", es: "Horizon en vista", fr: "Horizon en vue" },
        alt: { en: "The horizon in view", es: "Horizon en vista", fr: "Horizon en vue" },
    },
    "Photo_article45_7.jpg": {
        caption: { en: "Portrait 1", es: "Retrato 1", fr: "Portrait 1" },
        alt: { en: "Portrait 1", es: "Retrato 1", fr: "Portrait 1" },
    },
    "Photo_article45_8.jpg": {
        caption: { en: "Portrait 2", es: "Retrato 2", fr: "Portrait 2" },
        alt: { en: "Portrait 2", es: "Retrato 2", fr: "Portrait 2" },
    },
    "Photo_article46_1.jpg": {
        caption: { en: "Kundalini under full sail", es: "Kundalini a toda vela", fr: "le Kundalini toutes voiles dehors" },
        alt: { en: "Kundalini under full sail", es: "Kundalini a toda vela", fr: "le Kundalini toutes voiles dehors" },
    },
    "Photo_article46_2.jpg": {
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
    "Photo_article46_3.jpg": {
        caption: {
            en: "The Soufrière summit is finally clear as I leave the island",
            es: "El volcán Soufrière está finalmente despejado cuando me voy de la isla",
            fr: "Le sommet de la Soufrière enfin dégagée alors que je quitte l'île",
        },
        alt: {
            en: "The Soufrière summit is finally clear as I leave the island",
            es: "El volcán Soufrière está finalmente despejado cuando me voy de la isla",
            fr: "Le sommet de la Soufrière enfin dégagée alors que je quitte l'île",
        },
    },
    "Photo_article47_1.jpg": {
        caption: { en: "Sunset from Dominica", es: "Atardecer desde Dominica", fr: "Coucher de soleil depuis la Dominique" },
        alt: { en: "Sunset from Dominica", es: "Atardecer desde Dominica", fr: "Coucher de soleil depuis la Dominique" },
    },
    "Photo_article48_1.jpg": {
        caption: { en: "Loaded with bananas", es: "Cargado con plátanos", fr: "Chargé avec les bananes" },
        alt: { en: "Loaded with bananas", es: "Cargado con plátanos", fr: "Chargé avec les bananes" },
    },
    "Photo_article48_2.jpg": {
        caption: {
            en: "A peaceful walk in Dominica",
            es: "Ruta de senderismo relajante en Dominica",
            fr: "Chemin de randonnée paisible en Domnique",
        },
        alt: {
            en: "A peaceful walk in Dominica",
            es: "Ruta de senderismo relajante en Dominica",
            fr: "Chemin de randonnée paisible en Domnique",
        },
    },
    "Photo_article48_3.jpg": {
        caption: {
            en: "A much more difficult walk near the Morne Diablotin summit",
            es: "Un camino bien más complicado cerca de la cima del Morne Diablotin",
            fr: "Chemin bien plus compliqué proche du sommet de Morne Diablotin",
        },
        alt: {
            en: "A much moredifficult walk near the Morne Diablotin summit",
            es: "Un camino bien más complicado cerca de la cima del Morne Diablotin",
            fr: "Chemin bien plus compliqué proche du sommet de Morne Diablotin",
        },
    },
    "Photo_article48_4.jpg": {
        caption: { en: "A Hibiscus", es: "Hibiscus rosa", fr: "Hibiscus rose" },
        alt: { en: "A Hibiscus", es: "Hibiscus rosa", fr: "Hibiscus rose" },
    },
    "Photo_article48_5.jpg": {
        caption: { en: "Another Hibiscus", es: "Otro Hibiscus rosa", fr: "Autre Hibiscus rose" },
        alt: { en: "Another Hibiscus", es: "Otro Hibiscus rosa", fr: "Autre Hibiscus rose" },
    },
    "Photo_article48_6.jpg": {
        caption: { en: "A waterfall in Dominica", es: "Cascada en Dominica", fr: "Chute en Dominique" },
        alt: { en: "A waterfall in Dominica", es: "Cascada en Dominica", fr: "Chute en Dominique" },
    },
    "Photo_article49_1.jpg": {
        caption: { en: "The neighborhood of Roseau", es: "El barrio de Roseau", fr: "Banlieu de Roseau" },
        alt: { en: "The neighborhood of Roseau", es: "El barrio de Roseau", fr: "Banlieu de Roseau" },
    },
    "Photo_article49_3.jpg": {
        caption: { en: "The path to the Boiling lake", es: "El camino al lago hirviente", fr: "Chemin vers le Boiling lake" },
        alt: { en: "The path to the Boiling lake", es: "El camino al lago hirviente", fr: "Chemin vers le Boiling lake" },
    },
    "Photo_article49_4.jpg": {
        caption: { en: "The boiling river", es: "El río hirviendo", fr: "La rivière bouillante" },
        alt: { en: "The boiling river", es: "El río hirviendo", fr: "La rivière bouillante" },
    },
    "Photo_article49_5.jpg": {
        caption: { en: "The boiling lake", es: "El lago hirviente", fr: "The boiling lake" },
        alt: { en: "The boiling lake", es: "El lago hirviente", fr: "The boiling lake" },
    },
    "Photo_article49_6.jpg": {
        caption: { en: "Collection for my host", es: "Recojo para mi anfitrión", fr: "Cueillette pour mon hôte" },
        alt: { en: "Collection for my host", es: "Recojo para mi anfitrión", fr: "Cueillette pour mon hôte" },
    },
    "Photo_article49_7.jpg": {
        caption: { en: "Middleham falls", es: "Cascada de Middleham", fr: "Chute de Middleham" },
        alt: { en: "Middleham falls", es: "Cascada de Middleham", fr: "Chute de Middleham" },
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
    "Photo_article51_2.jpg": {
        caption: { en: "The captain in full confidence", es: "El capitán en plena confianza", fr: "Le capitaine en toute confiance" },
        alt: { en: "The captain in full confidence", es: "El capitán en plena confianza", fr: "Le capitaine en toute confiance" },
    },
    "Photo_article51_3.jpg": {
        caption: { en: "A percussion lesson", es: "Un curso de percusión", fr: "Petit cours de percussion" },
        alt: { en: "A percussion lesson", es: "Un curso de percusión", fr: "Petit cours de percussion" },
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
    "Photo_article52_2.jpg": {
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
    "Photo_article52_4.jpg": {
        caption: { en: "A walk on the coast", es: "Una caminata en la costa", fr: "Promenade sur la côte" },
        alt: { en: "A walk on the coast", es: "Una caminata en la costa", fr: "Promenade sur la côte" },
    },
    // Fifth pages gallery
    "Photo_article53_1.jpg": {
        caption: {
            en: "The Beauregard Canal (known as Slave Canal)",
            es: "El Canal de Beauregard (conocido como Canal de los Esclavos)",
            fr: "Canal de Beauregard (dit Canal des Esclaves)",
        },
        alt: {
            en: "The Beauregard Canal (known as Slave Canal)",
            es: "El Canal de Beauregard (conocido como Canal de los Esclavos)",
            fr: "Canal de Beauregard (dit Canal des Esclaves)",
        },
    },
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
    "Photo_article56_1.jpg": {
        caption: { en: "Church in Willemstad, Curaçao", es: "Une iglesia en Willemstad, Curaçao", fr: "Une église à Willemstad, Curaçao" },
        alt: { en: "Church in Willemstad, Curaçao", es: "La iglesia en Willemstad, Curaçao", fr: "Une église à Willemstad, Curaçao" },
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
    "Photo_article56_3.jpg": {
        caption: { en: "View of the beach in Curaçao", es: "Vista de la playa en Curaçao", fr: "Plage de Curaçao" },
        alt: { en: "View of the beach in Curaçao", es: "Vista de la playa en Curaçao", fr: "Plage de Curaçao" },
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
    "Photo_article58_1.jpg": {
        caption: {
            en: "Photo souvenir of the crew of Hopen",
            es: "Photo recuerdo de la tripulación de Hopen",
            fr: "Photo souvenir de l'équipage d'Hopen",
        },
        alt: {
            en: "Photo souvenir of the crew of Hopen",
            es: "Photo recuerdo de la tripulación de Hopen",
            fr: "Photo souvenir de l'équipage d'Hopen",
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
    "Photo_article59_2.jpg": {
        caption: { en: "Porcelain rose", es: "Rosa porcelana", fr: "Rose porcelaine" },
        alt: { en: "Porcelain rose", es: "Rosa porcelana", fr: "Rose porcelaine" },
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
    "Photo_article60_1.jpg": {
        caption: {
            en: "Pizarro who carries my backpack to the finca",
            es: "Pizarro que lleva mi mochila hasta la finca",
            fr: "Pizarro qui porte mon sac jusqu'à la finca",
        },
        alt: {
            en: "Pizarro who carries my backpack to the finca",
            es: "Pizarro que lleva mi mochila hasta la finca",
            fr: "Pizarro qui porte mon sac jusqu'à la finca",
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
    "Photo_article60_3.jpg": {
        caption: {
            en: "The farm Bellavista carries its name well",
            es: "La finca bellavista lleva bien su nombre",
            fr: "La finca bellavista porte bien son nom",
        },
        alt: {
            en: "The farm Bellavista carries its name well",
            es: "La finca bellavista lleva bien su nombre",
            fr: "La finca bellavista porte bien son nom",
        },
    },
    "Photo_article60_4.jpg": {
        caption: { en: "The every night show", es: "El espectáculo de cada noche", fr: "Le spectacle de chaque soir" },
        alt: { en: "The nightly spectacle", es: "El espectáculo de cada noche", fr: "Le spectacle de chaque soir" },
    },
    "Photo_article61_1.jpg": {
        caption: { en: "The Colombian flag", es: "El escudo de Colombia", fr: "Le blason colombien" },
        alt: { en: "The Colombian flag", es: "El escudo de Colombia", fr: "Le blason colombien" },
    },
    "Photo_article61_2.jpg": {
        caption: { en: "Back from shopping", es: "De vuelta de las compras", fr: "Retour des courses" },
        alt: { en: "Back from shopping", es: "De vuelta de las compras", fr: "Retour des courses" },
    },
    "Photo_article61_3.jpg": {
        caption: {
            en: "The provisional camp for shopping day",
            es: "El campamento provisional para ir a hacer las compras",
            fr: "Le campement provisoire pour aller faire les courses",
        },
        alt: {
            en: "The provisional camp for shopping day",
            es: "El campamento provisional para ir a hacer las compras",
            fr: "Le campement provisoire pour aller faire les courses",
        },
    },
    "Photo_article61_4.jpg": {
        caption: {
            en: "The last portion of the path to the farm",
            es: "La ultima parte del camino hacia la finca",
            fr: "La dernière portion du chemin allant a la finca",
        },
        alt: {
            en: "The last portion of the path to the farm",
            es: "La ultima parte del camino hacia la finca",
            fr: "La dernière portion du chemin allant a la finca",
        },
    },
    "Photo_article61_5.jpg": {
        caption: {
            en: "We don't want to miss these sunset views",
            es: "No queremos perder estas vistas de atardecer",
            fr: "On ne se lasse pas de ces couchers de soleil",
        },
        alt: {
            en: "We don't want to miss these sunset views",
            es: "No queremos perder estas vistas de atardecer",
            fr: "On ne se lasse pas de ces couchers de soleil",
        },
    },
    "Photo_article61_6.jpg": {
        caption: { en: "A working companion", es: "Un compañero de trabajo", fr: "Un compagnon de travail" },
        alt: { en: "A working companion", es: "Un compañero de trabajo", fr: "Un compagnon de travail" },
    },
    "Photo_article62_1.jpg": {
        caption: { en: "An unexpected satisfaction", es: "Una satisfacción inesperada", fr: "Une satisfaction inespérée" },
        alt: { en: "An unexpected satisfaction", es: "Una satisfacción inesperada", fr: "Une satisfaction inespérée" },
    },
    "Photo_article62_2.jpg": {
        caption: { en: "A visit to the farm around", es: "Una visita de finca alrededor", fr: "Visite de finca alentour" },
        alt: { en: "A visit to the farm around", es: "Una visita de finca alrededor", fr: "Visite de finca alentour" },
    },
    "Photo_article62_3.jpg": {
        caption: { en: "A small stream on the path", es: "Un arroyo en el camino", fr: "Un petit cours d'eau sur le chemin" },
        alt: { en: "A small stream on the path", es: "Un arroyo en el camino", fr: "Un petit cours d'eau sur le chemin" },
    },
    "Photo_article62_4.jpg": {
        caption: {
            en: "An abandoned house in the mountain",
            es: "Una casa abandonada en la montaña",
            fr: "Une maison abandonnée dans la montagne",
        },
        alt: {
            en: "An abandoned house in the mountain",
            es: "Una casa abandonada en la montaña",
            fr: "Une maison abandonnée dans la montagne",
        },
    },
    "Photo_article62_5.jpg": {
        caption: {
            en: "Jack and a farmer in the mountain",
            es: "Jack y un agricultor en la montaña",
            fr: "Jack et un fermier de la montagne",
        },
        alt: { en: "Jack and a farmer in the mountain", es: "Jack y un agricultor en la montaña", fr: "Jack et un fermier de la montagne" },
    },
    "Photo_article62_6.jpg": {
        caption: {
            en: "I take a break in front of the view",
            es: "Me tomo un descanso frente a la vista",
            fr: "Je prends la pause devant la vue",
        },
        alt: {
            en: "I take a break in front of the view",
            es: "Me tomo un descanso frente a la vista",
            fr: "Je prends la pause devant la vue",
        },
    },
    "Photo_article62_7.jpg": {
        caption: { en: "A shelter for the night", es: "Un lugar para pasar la noche", fr: "Un abri pour la nuit" },
        alt: { en: "A shelter for the night", es: "Un lugar para pasar la noche", fr: "Un abri pour la nuit" },
    },
    "Photo_article62_8.jpg": {
        caption: {
            en: "A view from the garden of our hosts",
            es: "Una vista desde el jardín de nuestros anfitriones",
            fr: "Vue depuis le jardin de nos hôtes",
        },
        alt: {
            en: "A view from the garden of our hosts",
            es: "Una vista desde el jardín de nuestros anfitriones",
            fr: "Vue depuis le jardin de nos hôtes",
        },
    },
    "Photo_article62_9.jpg": {
        caption: { en: "Our bed under the roofs", es: "Nuestra cama bajo las chapas", fr: "Notre lit sous les toits" },
        alt: { en: "Our bed under the roofs", es: "Nuestra cama bajo las chapas", fr: "Notre lit sous les toits" },
    },
    "Photo_article62_10.jpg": {
        caption: { en: "We help as we can", es: "Ayudamos como podemos", fr: "On aide comme on peut" },
        alt: { en: "We help as we can", es: "Ayudamos como podemos", fr: "On aide comme on peut" },
    },
    "Photo_article62_11.jpg": {
        caption: { en: "The cows in the mountains", es: "Las vacas en las montañas", fr: "Les vaches des montagnes" },
        alt: { en: "The cows in the mountains", es: "Las vacas en las montañas", fr: "Les vaches des montagnes" },
    },
    "Photo_article62_12.jpg": {
        caption: {
            en: "A simple bridge that does the job",
            es: "Un puente simple que cumple la función",
            fr: "Un pont sommaire qui fait le job",
        },
        alt: {
            en: "A simple bridge that does the job",
            es: "Un puente simple que cumple la función",
            fr: "Un pont sommaire qui fait le job",
        },
    },
    "Photo_article62_13.jpg": {
        caption: { en: "The famous toucan", es: "El famoso tucan", fr: "Le fameux toucan" },
        alt: { en: "The famous toucan", es: "El famoso tucan", fr: "Le fameux toucan" },
    },
    "Photo_article62_14.jpg": {
        caption: { en: "The last before leaving", es: "El último por terminar", fr: "Une dernière pour la route" },
        alt: { en: "The last before leaving", es: "El último por terminar", fr: "Une dernière pour la route" },
    },
    "Photo_article62_15.jpg": {
        caption: {
            en: "The meat dries on Jack's head",
            es: "La carne seca en la cabeza de Jack",
            fr: "La viande seche sur la tête de Jack",
        },
        alt: { en: "The meat dries on Jack's head", es: "La carne seca en la cabeza de Jack", fr: "La viande seche sur la tête de Jack" },
    },
    "Photo_article63_1.jpg": {
        caption: { en: "First tests", es: "Primeras pruebas", fr: "Premiers tests" },
        alt: { en: "First tests", es: "Primeras pruebas", fr: "Premiers tests" },
    },
    "Photo_article63_2.jpg": {
        caption: { en: "The famous Guacamaya", es: "El famoso Guacamaya", fr: "Le fameux Guacamaya" },
        alt: { en: "The famous Guacamaya", es: "El famoso Guacamaya", fr: "Le fameux Guacamaya" },
    },
    "Photo_article63_3.jpg": {
        caption: {
            en: "An iguana in the streets of Santa Marta",
            es: "Un iguana en las calles de Santa Marta",
            fr: "Un Iguane dans les rues de Santa Marta",
        },
        alt: {
            en: "An iguana in the streets of Santa Marta",
            es: "Un iguana en las calles de Santa Marta",
            fr: "Un Iguane dans les rues de Santa Marta",
        },
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
    "Photo_article64_2.jpg": {
        caption: { en: "The first stop in pueblo viejo", es: "Primera parada en un pueblo viejo", fr: "Premier stop a pueblo viejo" },
        alt: { en: "The first stop in pueblo viejo", es: "Primera parada en un pueblo viejo", fr: "Premier stop a pueblo viejo" },
    },
    "Photo_article65_1.jpg": {
        caption: { en: "The very strong sun", es: "El sol muy fuerte", fr: "Le soleil tape très fort" },
        alt: { en: "The very strong sun", es: "El sol muy fuerte", fr: "Le soleil tape très fort" },
    },
    "Photo_article65_2.jpg": {
        caption: { en: "The Totumo, a mud volcano", es: "El Totumo, un volcán de barro", fr: "El Totumo, volcan de boue" },
        alt: { en: "The Totumo, a mud volcano", es: "El Totumo, un volcán de barro", fr: "El Totumo, volcan de boue" },
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
    "Photo_article65_4.jpg": {
        caption: {
            en: "Little monkeys in the parks of Cartagena",
            es: "Monitos en los parques de Cartagena",
            fr: "Petits singe dans les parcs de Cartagena",
        },
        alt: {
            en: "Little monkeys in the parks of Cartagena",
            es: "Monitos en los parques de Cartagena",
            fr: "Petits singe dans les parcs de Cartagena",
        },
    },
    "Photo_article65_5.jpg": {
        caption: {
            en: "Different mix of ethnicities",
            es: "Differente mezclas ethnicas en Colombias",
            fr: "Différents mélanges éthnique de Colombie",
        },
        alt: {
            en: "Different mix of ethnicities",
            es: "Differente mezclas ethnicas en Colombias",
            fr: "Différents mélanges éthnique de Colombie",
        },
    },
    "Photo_article66_1.jpg": {
        caption: { en: "The diving club of Barú 1", es: "El club de buceo de Barú 1", fr: "Le club de plongée de Barù 1" },
        alt: { en: "The diving club of Barú 1", es: "El club de buceo de Barú 1", fr: "Le club de plongée de Barù 1" },
    },
    "Photo_article66_2.jpg": {
        caption: { en: "The diving club of Barú 2", es: "El club de buceo de Barú 2", fr: "Le club de plongée de Barù 2" },
        alt: { en: "The diving club of Barú 2", es: "El club de buceo de Barú 2", fr: "Le club de plongée de Barù 2" },
    },
    "Photo_article66_3.jpg": {
        caption: { en: "The back of the store", es: "La tienda de atrás", fr: "Arrière boutique" },
        alt: { en: "The back of the store", es: "La tienda de atrás", fr: "Arrière boutique" },
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
    "Photo_article67_2.jpg": {
        caption: {
            en: "The liberation monument of the slaves",
            es: "El monumento de la liberación de los esclavos",
            fr: "Mémorial de la libération des escalves",
        },
        alt: {
            en: "The liberation monument of the slaves",
            es: "El monumento de la liberación de los esclavos",
            fr: "Mémorial de la libération des escalves",
        },
    },
    "Photo_article67_3.jpg": {
        caption: { en: "Blender's friend", es: "Compania de Blender", fr: "La compagnie de Blender" },
        alt: { en: "Blender's friend", es: "Amigo de Blender", fr: "La compagnie de Blender" },
    },
    "Photo_article67_4.jpg": {
        caption: { en: "Blender's house", es: "Casa de Blender", fr: "Maison de Blender" },
        alt: { en: "Blender's house", es: "Casa de Blender", fr: "Maison de Blender" },
    },
    "Photo_article67_5.jpg": {
        caption: {
            en: "Blender's kitchen under the generous mango tree",
            es: "Cocina de Blender bajo el abundante palo de mango",
            fr: "Cuisine de Blender sous l'abondant manguier",
        },
        alt: {
            en: "Blender's kitchen under the generous mango tree",
            es: "Cocina de Blender bajo el abundante palo de mango",
            fr: "Cuisine de Blender sous l'abondant manguier",
        },
    },
    "Photo_article68_1.jpg": {
        caption: {
            en: "A glimpse of the road on bike",
            es: "Un vistazo de la carretera en bicicleta",
            fr: "Un aperçu de la route en vélo",
        },
        alt: { en: "A glimpse of the road on bike", es: "Un vistazo de la carretera en bicicleta", fr: "Un aperçu de la route en vélo" },
    },
    "Photo_article69_1.jpg": {
        caption: { en: "My hosts in Sahagún", es: "Mis anfitriones de Sahagún", fr: "Mes hôtes de Sahagùn" },
        alt: { en: "My hosts in Sahagún", es: "Mis anfitriones de Sahagún", fr: "Mes hôtes de Sahagùn" },
    },
    "Photo_article69_2.jpg": {
        caption: { en: "Lunch break", es: "Pausa del mediodía", fr: "Pause du midi" },
        alt: { en: "Lunch break", es: "Pausa del mediodía", fr: "Pause du midi" },
    },
    "Photo_article69_3.jpg": {
        caption: { en: "Welcome from the boss station", es: "Bienvenida del jefe de caserne", fr: "Accueil du chef de caserne" },
        alt: { en: "Welcome from the boss station", es: "Bienvenida del jefe de caserne", fr: "Accueil du chef de caserne" },
    },
    "Photo_article70_1.jpg": {
        caption: { en: "Funny sign", es: "Señal curiosa", fr: "Drôle de panneau" },
        alt: { en: "Funny sign", es: "Señal curiosa", fr: "Drôle de panneau" },
    },
    "Photo_article71_1.jpg": {
        caption: { en: "A road full of mangos", es: "Ruta llena de mangos", fr: "Route pleine de manguiers" },
        alt: { en: "A road full of mangos", es: "Ruta llena de mangos", fr: "Route pleine de manguiers" },
    },
    "Photo_article71_2.jpg": {
        caption: { en: "The valleys begin", es: "Empiezan los valles", fr: "Les vallons commencent" },
        alt: { en: "The valleys begin", es: "Empiezan los valles", fr: "Les vallons commencent" },
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
            en: "All the country side is under water",
            es: "Todo el campo esta inondado",
            fr: "Toute la campagne est inondée",
        },
        alt: { en: "All the country side is under water", es: "Todo el campo esta inondado", fr: "Toute la campagne est inondée" },
    },
    "photo_article72_1.png": {
        caption: {
            en: "First mountain stage in Valdivia",
            es: "Primera etapa de montaña en Valdivia",
            fr: "Première étape de montagne à Valdivia",
        },
        alt: {
            en: "First mountain stage in Valdivia",
            es: "Primera etapa de montaña en Valdivia",
            fr: "Première étape de montagne à Valdivia",
        },
    },
    "photo_article72_2.png": {
        caption: {
            en: "Last picture before starting the ascent in Puerto Valdivia",
            es: "Última foto antes de empezar la subida en Puerto Valdivia",
            fr: "Dernière photo avant le début de la montée à Puerto Valdivia",
        },
        alt: {
            en: "Last picture before starting the ascent in Puerto Valdivia",
            es: "Última foto antes de empezar la subida en Puerto Valdivia",
            fr: "Dernière photo avant le début de la montée à Puerto Valdivia",
        },
    },
    "photo_article72_3.png": {
        caption: { en: "The route is shared", es: "Se comparte la ruta", fr: "On partage la route" },
        alt: { en: "The route is shared", es: "Se comparte la ruta", fr: "On partage la route" },
    },
    "photo_article72_4.png": {
        caption: {
            en: "Despite the height, the landscape remains green",
            es: "A pesar de la altura, el paisaje sigue verde",
            fr: "Malgré l'altidude le paysage reste vert",
        },
        alt: {
            en: "Despite the height, the landscape remains green",
            es: "A pesar de la altura, el paisaje sigue verde",
            fr: "Malgré l'altidude le paysage reste vert",
        },
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
    "photo_article73_2.png": {
        caption: {
            en: "A squirrel bridge in arriving at the pass",
            es: "Un puente para las ardillas en llegar a la ventana",
            fr: "Un pont pour écureuil en arrivant au col",
        },
        alt: {
            en: "A squirrel bridge in arriving at the pass",
            es: "Un puente para las ardillas en llegar a la ventana",
            fr: "Un pont pour écureuil en arrivant au col",
        },
    },
    "photo_article73_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article73_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
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
    "photo_article73_6.png": {
        caption: {
            en: "The tree that gives its name to the village, the Yarumo",
            es: "El árbol que da su nombre al pueblo, el Yarumo",
            fr: "L'arbre qui donne son nom au village, le Yarumo",
        },
        alt: {
            en: "The tree that gives its name to the village, the Yarumo",
            es: "El árbol que da su nombre al pueblo, el Yarumo",
            fr: "L'arbre qui donne son nom au village, le Yarumo",
        },
    },
    "photo_article73_7.png": {
        caption: {
            en: "The church of silver color like the leaves of the Yarumo",
            es: "La iglesia de color plata como las hojas del Yarumo",
            fr: "l'église aux couleurs argent comme les feuilles du Yarumo",
        },
        alt: {
            en: "The church of silver color like the leaves of the Yarumo ",
            es: "La iglesia de color plata como las hojas del Yarumo",
            fr: "l'église aux couleurs argent comme les feuilles du Yarumo",
        },
    },
    "photo_article74_1.png": {
        caption: { en: "Going down to Medellin", es: "Bajando hacia Medellin", fr: "La descente vers Medellin" },
        alt: { en: "Going down to Medellin", es: "Bajando hacia Medellin", fr: "La descente vers Medellin" },
    },
    "photo_article74_2.png": {
        caption: { en: "The view of the descent", es: "La vista de la bajada", fr: "La vue de la descente" },
        alt: { en: "The view of the descent", es: "La vista de la bajada", fr: "La vue de la descente" },
    },
    "photo_article74_3.png": {
        caption: { en: "A small waterfall on the road", es: "Una cascadita en la carretera", fr: "Petite cascade sur la route" },
        alt: { en: "A small waterfall on the road", es: "Una cascadita en la carretera", fr: "Petite cascade sur la route" },
    },
    "photo_article75_1.png": {
        caption: {
            en: "A rather faithful depiction",
            es: "Una representación bastante fiel",
            fr: "Une représentation plutôt ressemblante",
        },
        alt: { en: "A rather faithful depiction", es: "Una representación bastante fiel", fr: "Une représentation plutôt ressemblante" },
    },
    "photo_article76_1.png": {
        caption: {
            en: "Arrival at the alto de Palmas",
            es: "Llegada al alto de Palmas",
            fr: "Arrivée de l'alto de Palmas",
        },
        alt: { en: "Arrival at the alto de Palmas", es: "Llegada al alto de Palmas", fr: "Arrivée de l'alto de Palmas" },
    },
    "photo_article76_2.png": {
        caption: { en: "The church on the way to Guatapé", es: "La iglesia en la ruta a Guatapé", fr: "Eglise sur la route vers Guatapé" },
        alt: { en: "The church on the way to Guatapé", es: "La iglesia en la ruta a Guatapé", fr: "Eglise sur la route vers Guatapé" },
    },
    "photo_article76_3.png": {
        caption: { en: "A photo taken by passengers", es: "Foto tomada por pasajeros", fr: "Photo prise par des passants" },
        alt: { en: "A photo taken by passengers", es: "Foto tomada por pasajeros", fr: "Photo prise par des passants" },
    },
    "photo_article76_4.png": {
        caption: {
            en: "The view of El Peñol from the parking lot",
            es: "Vista desde el parking de El Peñol",
            fr: "El Peñol vue du parking",
        },
        alt: { en: "The view of El Peñol from the parking lot", es: "Vista desde el parking de El Peñol", fr: "El Peñol vue du parking" },
    },
    "photo_article76_5.png": {
        caption: { en: "The view from the top of El Peñol", es: "Vista desde la cima del Peñol", fr: "La vue depuis el Peñol" },
        alt: { en: "The view from the top of El Peñol", es: "Vista desde la cima del Peñol", fr: "La vue depuis el Peñol" },
    },
    "photo_article76_6.png": {
        caption: { en: "Another view from the top of El Peñol", es: "Otra vista desde la cima del Peñol", fr: "Autre vue depuis el Peñol" },
        alt: { en: "Another view from the top of El Peñol", es: "Otra vista desde la cima del Peñol", fr: "Autre vue depuis el Peñol" },
    },
    "photo_article76_7.png": {
        caption: {
            en: "Memorial of the first ascent of El Peñol",
            es: "Memorial de la primera ascensión del Peñol",
            fr: "Mémorial de la première asenscion du Peñol",
        },
        alt: {
            en: "Memorial of the first ascent of El Peñol",
            es: "Memorial de la primera ascensión del Peñol",
            fr: "Mémorial de la première asenscion du Peñol",
        },
    },
    "photo_article78_1.png": {
        caption: {
            en: "A horse having a drink in Jardín",
            es: "Un caballo tomando algo en Jardín",
            fr: "Un cheval prenant un verre à Jardin",
        },
        alt: { en: "A horse having a drink in Jardín", es: "Un caballo tomando algo en Jardín", fr: "Un cheval prenant un verre à Jardin" },
    },
    "photo_article78_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article78_5.png": {
        caption: {
            en: "A holy sign",
            es: "Una señal divina",
            fr: "Un signal divin",
        },
        alt: { en: "A holy sign", es: "Una señal divina", fr: "Un signal divin" },
    },
    "photo_article78_6.png": {
        caption: {
            en: "The super thinker",
            es: "El super pensador",
            fr: "Le super penseur",
        },
        alt: { en: "The super thinker", es: "El super pensador", fr: "Le super penseur" },
    },
    "photo_article79_1.png": {
        caption: {
            en: "First views of the coffee region",
            es: "Primeras vistas de la zona cafetera",
            fr: "Premiers vues de la région du café",
        },
        alt: {
            en: "First views of the coffee region",
            es: "Primeras vistas de la zona cafetera",
            fr: "Premiers vues de la région du café",
        },
    },
    "photo_article79_2.png": {
        caption: {
            en: "Selfie",
            es: "Selfie",
            fr: "Selfie",
        },
        alt: { en: "Selfie", es: "Selfie", fr: "Selfie" },
    },
    "photo_article79_3.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article80_1.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article80_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article80_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article81_1.png": {
        caption: {
            en: "A well tuned bike",
            es: "Una bicicleta bien ajustada",
            fr: "Un vélo bien tuné",
        },
        alt: { en: "A well tuned bike", es: "Una bicicleta bien ajustada", fr: "Un vélo bien tuné" },
    },
    "photo_article81_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article81_3.png": {
        caption: {
            en: "Taking a shortcut",
            es: "Tomando un atajo",
            fr: "On prend un raccourci",
        },
        alt: { en: "Taking a shortcut", es: "Tomando un atajo", fr: "On prend un raccourci" },
    },
    "photo_article81_4.png": {
        caption: {
            en: "Souvenir photo with my friends from Pereira",
            es: "Foto recuerdo con mis amigos de Pereira",
            fr: "Photo souvenir avec mes amis de Pereira",
        },
        alt: {
            en: "Souvenir photo with my friends from Pereira",
            es: "Foto recuerdo con mis amigos de Pereira",
            fr: "Photo souvenir avec mes amis de Pereira",
        },
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
    "photo_article81_7.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
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
    "photo_article82_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article82_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_1.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_5.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_6.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article83_7.png": {
        caption: {
            en: "The largest rodent in the world, the capybara",
            es: "El rodente mas grande del mundo, el carpincho",
            fr: "Le rongeur le plus grand du monde, el carpincho",
        },
        alt: {
            en: "The largest rodent in the world, the capybara",
            es: "El rodente mas grande del mundo, el carpincho",
            fr: "Le rongeur le plus grand du monde, el carpincho",
        },
    },
    "photo_article84_1.png": {
        caption: { en: "Another summit conquered", es: "Otro cerro conquistado", fr: "Un sommet de plus conquis" },
        alt: { en: "Another summit conquered", es: "Otro cerro conquistado", fr: "Un sommet de plus conquis" },
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
    "photo_article84_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article84_3.png": {
        caption: { en: "Elvin climbs with style", es: "Elvin sube con estilo", fr: "Elvin grimpe avec style" },
        alt: { en: "Elvin climbs with style", es: "Elvin sube con estilo", fr: "Elvin grimpe avec style" },
    },
    "photo_article84_5.png": {
        caption: {
            en: "Together in the suffering up to the end",
            es: "Juntos en el sufrimiento hasta el final",
            fr: "On termine ensemble dans la souffrance",
        },
        alt: {
            en: "Together in the suffering up to the end",
            es: "Juntos en el sufrimiento hasta el final",
            fr: "On termine ensemble dans la souffrance",
        },
    },
    "photo_article84_7.png": {
        caption: { en: "Proud to have reached the end", es: "Orgulloso de haber llegado al final", fr: "Fier d'être arrivé au bout" },
        alt: { en: "Proud to have reached the end", es: "Orgulloso de haber llegado al final", fr: "Fier d'être arrivé au bout" },
    },
    "photo_article84_8.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article85_1.png": {
        caption: {
            en: "Never the bike traveled so fast",
            es: "Nunca la bicicleta viajó tan rápido",
            fr: "Jamais le vélo n'a voyagé si vite",
        },
        alt: {
            en: "Never the bike traveled so fast",
            es: "Nunca la bicicleta viajó tan rápido",
            fr: "Jamais le vélo n'a voyagé si vite",
        },
    },
    "photo_article85_2.png": {
        caption: {
            en: "An overview of the route",
            es: "Una vista general de la ruta",
            fr: "Une vue générale de la route",
        },
        alt: {
            en: "An overview of the route",
            es: "Una vista general de la ruta",
            fr: "Une vue générale de la route",
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
    "photo_article86_1.png": {
        caption: { en: "Mandatory repair", es: "Réparacion obligatoria", fr: "Réparation obligatoire" },
        alt: { en: "Mandatory repair", es: "Réparacion obligatoria", fr: "Réparation obligatoire" },
    },
    "photo_article87_1.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article87_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article87_3.png": {
        caption: { en: "My host and her best friend", es: "Mi anfitriona y su mejor amiga", fr: "Mon hôte et sa meilleure amie" },
        alt: { en: "My host and her best friend", es: "Mi anfitriona y su mejor amiga", fr: "Mon hôte et sa meilleure amie" },
    },
    "photo_article87_4.png": {
        caption: { en: "A school to sleep", es: "Una escuela para dormir", fr: "Une école pour loger la nuit" },
        alt: { en: "A school to sleep", es: "Una escuela para dormir", fr: "Une école pour loger la nuit" },
    },
    "photo_article87_5.png": {
        caption: { en: "The desert road", es: "La carretera del desierto", fr: "Route du désert" },
        alt: { en: "The desert road", es: "La carretera del desierto", fr: "Route du désert" },
    },
    "photo_article87_6.png": {
        caption: { en: "Old mine tunel", es: "Tunel de mina antiguo", fr: "Ancien tunnel de mine" },
        alt: { en: "Old mine tunel", es: "Tunel de mina antiguo", fr: "Ancien tunnel de mine" },
    },
    "photo_article87_7.png": {
        caption: { en: "Mine bats", es: "Murcielago de la mina", fr: "Chauve souris dans la mine" },
        alt: { en: "Mine bats", es: "Murcielago de la mina", fr: "Chauve souris dans la mine" },
    },
    "photo_article87_8.png": {
        caption: { en: "Entrance to the Tatacoa desert", es: "Entrada al desierto de Tatacoa", fr: "Entrée du désert de Tatacoa" },
        alt: { en: "Entrance to the Tatacoa desert", es: "Entrada al desierto de Tatacoa", fr: "Entrée du désert de Tatacoa" },
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
    "photo_article89_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article89_3.png": {
        caption: {
            en: "A faster road than the dirt roads",
            es: "Una carretera más rápida que las carreteras de tierra",
            fr: "Une route plus rapide que les chemins de terre",
        },
        alt: {
            en: "A faster road than the dirt roads",
            es: "Una carretera más rápida que las carreteras de tierra",
            fr: "Une route plus rapide que les chemins de terre",
        },
    },
    "photo_article89_4.png": {
        caption: { en: "Strange monument in Neiva", es: "Monumento extraño en Neiva", fr: "Drôle de monument a Neiva" },
        alt: { en: "Strange monument in Neiva", es: "Monumento extraño en Neiva", fr: "Drôle de monument a Neiva" },
    },
    "photo_article90_1.png": {
        caption: { en: "Captivated by the present moment", es: "Cautivado por el momento presente", fr: "Captivé par le moment présent" },
        alt: { en: "Captivated by the present moment", es: "Cautivado por el momento presente", fr: "Captivé par le moment présent" },
    },
    "photo_article90_2.png": {
        caption: { en: "My host en Gigante", es: "Mi anfitriona en Gigante", fr: "Mon hôte à Gigante" },
        alt: { en: "My host en Gigante", es: "Mi anfitriona en Gigante", fr: "Mon hôte à Gigante" },
    },
    "photo_article91_1.png": {
        caption: { en: "Trying out the kite", es: "Probando la cometa", fr: "On essaye le cerf-volant" },
        alt: { en: "Trying out the kite", es: "Probando la cometa", fr: "On essaye le cerf-volant" },
    },
    "photo_article90_4.png": {
        caption: { en: "Cotton field", es: "Campo de algodón", fr: "Champ de coton" },
        alt: { en: "Cotton field", es: "Campo de algodón", fr: "Champ de coton" },
    },
    "photo_article90_5.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article90_3.png": {
        caption: { en: "A calm moment on the road", es: "Un momento de calma en la ruta", fr: "Un moment calme sur la route" },
        alt: { en: "A calm moment on the road", es: "Un momento de calma en la ruta", fr: "Un moment calme sur la route" },
    },
    "photo_article92_1.png": {
        caption: { en: "View going up to San Agustín", es: "Vista subiendo a San Agustín", fr: "Vue en montant vers San Agustín" },
        alt: { en: "View going up to San Agustín", es: "Vista subiendo a San Agustín", fr: "Vue en montant vers San Agustín" },
    },
    "photo_article92_2.png": {
        caption: { en: "The beginning of the coffee", es: "El comienzo del café", fr: "Le début du café" },
        alt: { en: "The beginning of the coffee", es: "El comienzo del café", fr: "Le début du café" },
    },
    "photo_article92_3.png": {
        caption: { en: "Memories of bygone times", es: "Recuerdo de tiempos pasados", fr: "Souvenir de temps anciens" },
        alt: { en: "Memories of bygone times", es: "Recuerdo de tiempos pasados", fr: "Souvenir de temps anciens" },
    },
    "photo_article92_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article92_5.png": {
        caption: { en: "Barbecue en San Agustin", es: "Parilla en San Agustín", fr: "Barbecue à San Agustin" },
        alt: { en: "Barbecue en San Agustin", es: "Parilla en San Agustín", fr: "Barbecue à San Agustin" },
    },
    "photo_article93_1.png": {
        caption: { en: "Unexpected encounter on the road", es: "Encuentro sorpresa en la ruta", fr: "Rencontre surprise sur la route" },
        alt: { en: "Unexpected encounter on the road", es: "Encuentro sorpresa en la ruta", fr: "Rencontre surprise sur la route." },
    },
    "photo_article93_2.png": {
        caption: {
            en: "The beginning of the dirt road in the Páramo",
            es: "El comienzo del camino de tierra en el Páramo",
            fr: "Début du chemin de terre dans le Páramo",
        },
        alt: {
            en: "The beginning of the dirt road in the Páramo",
            es: "El comienzo del camino de tierra en el Páramo",
            fr: "Début du chemin de terre dans le Páramo",
        },
    },
    "photo_article93_3.png": {
        caption: {
            en: "Getting to the top of the Páramo",
            es: "Llegando a la cima del Páramo",
            fr: "Arrivée au sommet du Páramo",
        },
        alt: {
            en: "Getting to the top of the Páramo",
            es: "Llegando a la cima del Páramo",
            fr: "Arrivée au sommet du Páramo",
        },
    },
    "photo_article93_4.png": {
        caption: {
            en: "Crossing the Páramo",
            es: "Cruzando el páramo",
            fr: "Je traverse le plateau du Páramo",
        },
        alt: {
            en: "Crossing the Páramo",
            es: "Cruzando el páramo",
            fr: "Je traverse le plateau du Páramo",
        },
    },
    "photo_article93_5.png": {
        caption: {
            en: "Purace volcano",
            es: "El volcán Purace",
            fr: "Vue du volcan Purace",
        },
        alt: {
            en: "Purace volcano",
            es: "El volcán Purace",
            fr: "Vue du volcan Purace",
        },
    },
    "photo_article93_6.png": {
        caption: {
            en: "Back to the asphalt",
            es: "Retorno al asfalto",
            fr: "Je retrouve le bitume",
        },
        alt: {
            en: "Back to the asphalt",
            es: "Retorno al asfalto",
            fr: "Je retrouve le bitume",
        },
    },
    "photo_article93_7.png": {
        caption: {
            en: "Coconuco waterfall",
            es: "Una catarata en la ruta a Coconuco",
            fr: "Une cascade sur la descente vers Coconuco",
        },
        alt: {
            en: "Coconuco waterfall",
            es: "Una catarata en la ruta a Coconuco",
            fr: "Une cascade sur la descente vers Coconuc",
        },
    },
    "photo_article94_1.png": {
        caption: { en: "A place for the temazcal", es: "Un lugar para el temazcal", fr: "Un abri pour le temazcal" },
        alt: { en: "A place for the temazcal", es: "Un lugar para el temazcal", fr: "Un abri pour le temazcal" },
    },
    "photo_article94_2.png": {
        caption: { en: "A temple built in the earth", es: "Un templo construido en la tierra", fr: "Un temple construit dans la terre" },
        alt: { en: "A temple built in the earth", es: "Un templo construido en la tierra", fr: "Un temple construit dans la terre" },
    },
    "photo_article94_3.png": {
        caption: { en: "The theatre", es: "El teatro", fr: "Le théatre" },
        alt: { en: "The theatre", es: "El teatro", fr: "Le théatre" },
    },
    "photo_article94_4.png": {
        caption: { en: "Main house of my host", es: "La casa principal de mi anfitrión", fr: "La maison principal de mon hôte" },
        alt: { en: "Main house of my host", es: "La casa principal de mi anfitrión", fr: "La maison principal de mon hôte" },
    },
    "photo_article95_1.png": {
        caption: { en: "At the departure of Popayan", es: "Al salir de Popayan", fr: "Au départ de Popayan" },
        alt: { en: "At the departure of Popayan", es: "Al salir de Popayan", fr: "Au départ de Popayan" },
    },
    "photo_article97_1.png": {
        caption: {
            en: "Night in this place under construction",
            es: "Noche en este lugar en obra",
            fr: "Je passe la nuit dans ce centre en construction",
        },
        alt: {
            en: "Night in this place under construction",
            es: "Noche en este lugar en obra",
            fr: "Je passe la nuit dans ce centre en construction",
        },
    },
    "photo_article96_2.png": {
        caption: {
            en: "A drier landscape in the valley",
            es: "El paisaje es más seco en el fondo del valle",
            fr: "Le paysage est plus aride en fond de vallée",
        },
        alt: {
            en: "A drier landscape in the valley",
            es: "El paisaje es más seco en el fondo del valle",
            fr: "Le paysage est plus aride en fond de vallée",
        },
    },
    "photo_article96_1.png": {
        caption: { en: "A perfect picnic spot", es: "Un lugar perfecto para picnic", fr: "Un lieu de picnic parfait" },
        alt: { en: "A perfect picnic spot", es: "Un lugar perfecto para picnic", fr: "Un lieu de picnic parfait" },
    },
    "photo_article97_2.png": {
        caption: { en: "The rough climb to Pasto", es: "La subida difícil a Pasto", fr: "La montée est rude vers Pasto" },
        alt: { en: "The rough climb to Pasto", es: "La subida difícil a Pasto", fr: "La montée est rude vers Pasto" },
    },
    "photo_article97_3.png": {
        caption: { en: "But the view is worth the climb", es: "Pero la vista vale la pena", fr: "Mais la vue en vaut le coup" },
        alt: { en: "But the view is worth the climb", es: "Pero la vista vale la pena", fr: "Mais la vue en vaut le coup" },
    },
    "photo_article97_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article97_5.png": {
        caption: { en: "Church at the arrival to Pasto", es: "Iglesia a la llegada a Pasto", fr: "Eglise à l'arrivée à Pasto" },
        alt: { en: "Church at the arrival to Pasto", es: "Iglesia a la llegada a Pasto", fr: "Eglise à l'arrivée à Pasto" },
    },
    "photo_article98_1.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_3.png": {
        caption: { en: "View from the Galeras volcano", es: "Vista desde el volcán Galeras", fr: "Vue depuis le volcan Galeras" },
        alt: { en: "View from the Galeras volcano", es: "Vista desde el volcán Galeras", fr: "Vue depuis le volcan Galeras" },
    },
    "photo_article98_4.png": {
        caption: {
            en: "Typical páramo flower",
            es: "Flor típica del páramo",
            fr: "Fleur typique du paramo",
        },
        alt: {
            en: "Typical páramo flower",
            es: "Flor típica del páramo",
            fr: "Fleur typique du paramo",
        },
    },
    "photo_article98_5.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_6.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_7.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_8.png": {
        caption: { en: "The team of the day walk", es: "El equipo de la caminata del día", fr: "L'équipe de la promenade du jour" },
        alt: { en: "The team of the day walk", es: "El equipo de la caminata del día", fr: "L'équipe de la promenade du jour" },
    },
    "photo_article98_9.png": {
        caption: { en: "For a change, a dirt road", es: "Para variar, un camino de tierra", fr: "Pour changer, un chemin de terre" },
        alt: { en: "For a change, a dirt road", es: "Para variar, un camino de tierra", fr: "Pour changer, un chemin de terre" },
    },
    "photo_article98_10.png": {
        caption: {
            en: "A dirt road along the Cocha lake",
            es: "Un camino de tierra a lo largo del lago Cocha",
            fr: "Chemin de terre le long de la laguna Cocha",
        },
        alt: {
            en: "A dirt road along the Cocha lake",
            es: "Un camino de tierra a lo largo del lago Cocha",
            fr: "Chemin de terre le long de la laguna Cocha",
        },
    },
    "photo_article98_11.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article98_12.png": {
        caption: { en: "A fine specimen", es: "Un buen espécimen", fr: "Un beau specimen" },
        alt: { en: "A fine specimen", es: "Un buen espécimen", fr: "Un beau specimen" },
    },
    "photo_article98_13.png": {
        caption: {
            en: "At the end of the lake, the village of Santa Lucia",
            es: "Al final del lago, el pueblo de Santa Lucia",
            fr: "Au bout du lac, le village de Santa Lucia",
        },
        alt: {
            en: "At the end of the lake, the village of Santa Lucia",
            es: "Al final del lago, el pueblo de Santa Lucia",
            fr: "Au bout du lac, le village de Santa Lucia",
        },
    },
    "photo_article98_14.png": {
        caption: {
            en: "The towers, souvenir of the battle",
            es: "Las torres, recuerdo de la batalla",
            fr: "Les tours, souvenir de bataille",
        },
        alt: { en: "The towers, souvenir of the battle", es: "Las torres, recuerdo de la batalla", fr: "Les tours, souvenir de bataille" },
    },
    "photo_article98_15.png": {
        caption: { en: "Back by boat", es: "Volver en lancha", fr: "Retour en bateau" },
        alt: { en: "Back by boat", es: "Volver en lancha", fr: "Retour en bateau" },
    },
    "photo_article98_16.png": {
        caption: { en: "Path between the plants", es: "Camino entre las plantas", fr: "Chemin entre les plantes" },
        alt: { en: "Path between the plants", es: "Camino entre las plantas", fr: "Chemin entre les plantes" },
    },
    "photo_article98_17.png": {
        caption: {
            en: "Last descent of the day back to Pasto",
            es: "Ultima bajada del dia de vuelta a Pasto",
            fr: "Dernière descente de retour vers Pasto",
        },
        alt: {
            en: "Last descent of the day back to Pasto",
            es: "Ultima bajada del dia de vuelta a Pasto",
            fr: "Dernière descente de retour vers Pasto",
        },
    },
    "photo_article98_18.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article99_1.png": {
        caption: { en: "A good team", es: "Un buen equipo", fr: "Une bonne équipe" },
        alt: { en: "A good team", es: "Un buen equipo", fr: "Une bonne équipe" },
    },
    "photo_article99_2.png": {
        caption: { en: "Back to solo trip", es: "Vamos de vuelta solo", fr: "C'est reparti solo" },
        alt: { en: "Back to solo trip", es: "Vamos de vuelta solo", fr: "C'est reparti solo" },
    },
    "photo_article99_3.png": {
        caption: { en: "We try the avocado ice cream", es: "Probamos el helado de aguacate", fr: "On essaye la glace à l'avocat" },
        alt: { en: "We try the avocado ice cream", es: "Probamos el helado de aguacate", fr: "On essaye la glace à l'avocat" },
    },
    "photo_article99_4.png": {
        caption: { en: "Back on the road", es: "Volver a la carretera", fr: "Retour sur la route" },
        alt: { en: "Back on the road", es: "Volver a la carretera", fr: "Retour sur la route" },
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
    "photo_article99_6.png": {
        caption: { en: "The loro of the house", es: "El loro de la casa", fr: "Le loro de la maison" },
        alt: { en: "The loro of the house", es: "El loro de la casa", fr: "Le loro de la maison" },
    },
    "photo_article99_7.png": {
        caption: { en: "The specialty, the Cuy", es: "La especialidad, el Cuy", fr: "La specialité, le Cuy" },
        alt: { en: "The specialty, the Cuy", es: "La especialidad, el Cuy", fr: "La specialité, le Cuy" },
    },
    "photo_article100_1.png": {
        caption: { en: "Sanctuary of Las Lajas", es: "Santuario de Las Lajas", fr: "Sanctuaire de las Lajas" },
        alt: { en: "Sanctuary of Las Lajas", es: "Santuario de Las Lajas", fr: "Sanctuaire de las Lajas" },
    },
    "photo_article100_2.png": {
        caption: {
            en: "I cross the border, I'm already missing Colombia",
            es: "Paso la frontera, ya extraño Colombia",
            fr: "Je passe la frontière, la Colombie me manque déjà",
        },
        alt: {
            en: "I cross the border, I'm already missing Colombia",
            es: "Paso la frontera, ya extraño Colombia",
            fr: "Je passe la frontière, la Colombie me manque déjà",
        },
    },
    "photo_article100_3.png": {
        caption: {
            en: "Special carving of the Tulcán cemetery",
            es: "El corte especial del cementerio de Tulcán",
            fr: "Le taillage spécial du cimetiere de Tulcán",
        },
        alt: {
            en: "Special carving of the Tulcán cemetery",
            es: "El corte especial del cementerio de Tulcán",
            fr: "Le taillage spécial du cimetiere de Tulcán",
        },
    },
    "photo_article100_4.png": {
        caption: {
            en: "Special carving of the Tulcán cemetery 2",
            es: "El corte especial del cementerio de Tulcán 2",
            fr: "Le taillage spécial du cimetiere de Tulcán 2",
        },
        alt: {
            en: "Special carving of the Tulcán cemetery 2",
            es: "El corte especial del cementerio de Tulcán 2",
            fr: "Le taillage spécial du cimetiere de Tulcán 2",
        },
    },
    "photo_article100_5.png": {
        caption: {
            en: "Special carving of the Tulcán cemetery 3",
            es: "El corte especial del cementerio de Tulcán 3",
            fr: "Le taillage spécial du cimetiere de Tulcán 3",
        },
        alt: {
            en: "Special carving of the Tulcán cemetery 3",
            es: "El corte especial del cementerio de Tulcán 3",
            fr: "Le taillage spécial du cimetiere de Tulcán 3",
        },
    },
    "photo_article100_6.png": {
        caption: {
            en: "Special carving of the Tulcán cemetery 4",
            es: "El corte especial del cementerio de Tulcán 4",
            fr: "Le taillage spécial du cimetiere de Tulcán 4",
        },
        alt: {
            en: "Special carving of the Tulcán cemetery 4",
            es: "El corte especial del cementerio de Tulcán 4",
            fr: "Le taillage spécial du cimetiere de Tulcán 4",
        },
    },
    "photo_article100_7.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_8.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_9.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_10.png": {
        caption: {
            en: "I stop on the road contemplating the garden of this man",
            es: "Paro en la carretera para contemplar el jardín de este hombre",
            fr: "Je m'arrête sur la route pour contempler le jardin de cet homme",
        },
        alt: {
            en: "I stop on the road contemplating the garden of this man",
            es: "Paro en la carretera para contemplar el jardín de este hombre",
            fr: "Je m'arrête sur la route pour contempler le jardin de cet homme",
        },
    },
    "photo_article100_11.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_12.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_13.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article100_14.png": {
        caption: {
            en: "The great volcanoes emerge on the horizon",
            es: "Los grandes volcanes salen del horizonte",
            fr: "Les grands volcan émergent à l'horizon",
        },
        alt: {
            en: "The great volcanoes emerge on the horizon",
            es: "Los grandes volcanes salen del horizonte",
            fr: "Les grands volcan émergent à l'horizon",
        },
    },
    // Ninth pages gallery
    "photo_article101_1.png": {
        caption: { en: "First llamas", es: "Primeros llamas", fr: "Premiers llamas" },
        alt: { en: "First llamas", es: "Primeros llamas", fr: "Premiers llamas" },
    },
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
    "photo_article101_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article101_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article101_5.png": {
        caption: {
            en: "The mojanda lake has a well-deserved name",
            es: "La laguna mojanda tiene bien su nombre",
            fr: "La laguna mojanda porte bien son nom",
        },
        alt: {
            en: "The mojanda lake has a well-deserved name",
            es: "La laguna mojanda tiene bien su nombre",
            fr: "La laguna mojanda porte bien son nom",
        },
    },
    "photo_article101_6.png": {
        caption: {
            en: "Climbing up the Fuya Fuya",
            es: "Subiendo el Fuya Fuya",
            fr: "Ascension du Fuya Fuya",
        },
        alt: { en: "Climbing up the Fuya Fuya", es: "Ascenso del Fuya Fuya", fr: "Ascension du Fuya Fuya" },
    },
    "photo_article101_7.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article101_8.png": {
        caption: { en: "The famous Taita", es: "El famoso Taita", fr: "Le fameux Taita" },
        alt: { en: "The famous Taita", es: "El famoso Taita", fr: "Le fameux Taita" },
    },
    "photo_article101_9.png": {
        caption: { en: "A potential home", es: "Un potencial hogar", fr: "Un potential abri" },
        alt: { en: "A potential home", es: "Un potencial hogar", fr: "Un potential abri" },
    },
    "photo_article101_11.png": {
        caption: { en: "At the top of the Taita", es: "En la cima del Taita", fr: "Au sommet du Taita" },
        alt: { en: "At the top of the Taita", es: "En la cima del Taita", fr: "Au sommet du Taita" },
    },
    "photo_article101_10.png": {
        caption: {
            en: "View of three great volcanoes of Ecuador (Cayambe, Cotopaxi and Chimborazo)",
            es: "Vista de tres grandes volcanes de Ecuador (Cayambe, Cotopaxi y Chimborazo)",
            fr: "Vue sur les trois grands volcans d'Equateur (Cayambe, Cotopaxi et Chimborazo)",
        },
        alt: {
            en: "View of three great volcanoes of Ecuador (Cayambe, Cotopaxi and Chimborazo)",
            es: "Vista de tres grandes volcanes de Ecuador (Cayambe, Cotopaxi y Chimborazo)",
            fr: "Vue sur trois grands volcans d'Equateur (Cayambe, Cotopaxi et Chimborazo)",
        },
    },
    "photo_article101_12.png": {
        caption: { en: "Ice cream of paella", es: "Helado de paella", fr: "Glace de paella" },
        alt: { en: "Ice cream of paella", es: "Helado de paella", fr: "Glace de paella" },
    },
    "photo_article102_1.png": {
        caption: {
            en: "Bonzai in the botanical garden of Quito",
            es: "Bonzai en el jardin botanique de Quito",
            fr: "Bonzaï au jardin botanique de Quito",
        },
        alt: {
            en: "Bonzai in the botanical garden of Quito",
            es: "Bonzai en el jardin botanique de Quito",
            fr: "Bonzaï au jardin botanique de Quito",
        },
    },
    "photo_article102_2.png": {
        caption: {
            en: "Japanese cherry in the botanical garden of Quito",
            es: "Cerezo japonés en el jardin botanique de Quito",
            fr: "Cerisier japonais au jardin botanique de Quito",
        },
        alt: {
            en: "Japanese cherry in the botanical garden of Quito",
            es: "Cerezo japonés en el jardin botanique de Quito",
            fr: "Cerisier japonais au jardin botanique de Quito",
        },
    },
    "photo_article102_3.png": {
        caption: {
            en: "My participation in the language center of Quito",
            es: "Mi participación en el centro de idiomas de Quito",
            fr: "Ma participation au centre de langue de Quito",
        },
        alt: {
            en: "My participation in the language center of Quito",
            es: "Mi participación en el centro de idiomas de Quito",
            fr: "Ma participation au centre de langue de Quito",
        },
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
    "photo_article102_5.png": {
        caption: {
            en: "A brand new frame",
            es: "Un nuevo marco",
            fr: "Un tout nouveau cadre",
        },
        alt: {
            en: "A brand new frame",
            es: "Un nuevo marco",
            fr: "Un tout nouveau cadre",
        },
    },
    "photo_article103_1.png": {
        caption: { en: "Descending to the Pacific coast", es: "Descenso a la costa del Pacífico", fr: "Descente vers la côte pacifique" },
        alt: { en: "Descending to the Pacific coast", es: "Descenso a la costa del Pacífico", fr: "Descente vers la côte pacifique" },
    },
    "photo_article104_1.png": {
        caption: {
            en: "Cocoa",
            es: "Cacao",
            fr: "Cacao",
        },
        alt: { en: "Cocoa", es: "Cacao", fr: "Cacao" },
    },
    "photo_article104_2.png": {
        caption: { en: "The cocoa beans", es: "Los granos y manteca de Cacao", fr: "Les fèves et beurre de Cacao" },
        alt: { en: "The cocoa beans", es: "Los granos y manteca de Cacao", fr: "Les fèves et beurre de Cacao" },
    },
    "photo_article104_3.png": {
        caption: { en: "Medical maté wine", es: "Vino de maté medicinal", fr: "Vin de maté (médicinal)" },
        alt: { en: "Medical maté wine", es: "Vino de maté medicinal", fr: "Vin de maté (médicinal)" },
    },
    "photo_article104_4.png": {
        caption: {
            en: "My host from Carmen",
            es: "Mi anfitrión del Carmen",
            fr: "Mon hôte del Carmen",
        },
        alt: { en: "My host from Carmen", es: "Mi anfitrión del Carmen", fr: "Mon hôte del Carmen" },
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
    "photo_article106_1.png": {
        caption: {
            en: "Pitahaya field (dragon fruit)",
            es: "Campo de Pitahaya (fruto del dragón)",
            fr: "Champ de Pitahaya (fruit du dragon)",
        },
        alt: {
            en: "Pitahaya field (dragon fruit)",
            es: "Campo de Pitahaya (fruto del dragón)",
            fr: "Champ de Pitahaya (fruit du dragon)",
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
    "photo_article106_3.png": {
        caption: {
            en: "View of San Lorenzo",
            es: "Vista de San Lorenzo",
            fr: "Vue sur San Lorenzo",
        },
        alt: { en: "View of San Lorenzo", es: "Vista de San Lorenzo", fr: "Vue sur San Lorenzo" },
    },
    "photo_article106_4.png": {
        caption: {
            en: "Ecuador bike trip experience",
            es: "Experiencia del viaje en bici por Ecuador",
            fr: "Expérience du voyage à vélo en Équateur",
        },
        alt: {
            en: "Ecuador bike trip experience",
            es: "Experiencia del viaje en bici por Ecuador",
            fr: "Expérience du voyage à vélo en Équateur",
        },
    },
    "photo_article106_5.png": {
        caption: {
            en: "The firefighters of San Lorenzo host me for the night",
            es: "Los bomberos de San Lorenzo me alojan para la noche",
            fr: "Les pompiers de San Lorenzo me loge pour la nuit",
        },
        alt: {
            en: "The firefighters of San Lorenzo host me for the night",
            es: "Los bomberos de San Lorenzo me alojan para la noche",
            fr: "Les pompiers de San Lorenzo me loge pour la nuit",
        },
    },
    "photo_article108_2.png": {
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
    "photo_article107_1.png": {
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
    "photo_article108_3.png": {
        caption: { en: "A old cactus", es: "Un cactus viejo", fr: "Un vieux cactus" },
        alt: { en: "A old cactus", es: "Un cactus viejo", fr: "Un vieux cactus" },
    },
    "photo_article108_4.png": {
        caption: {
            en: "Sea lions of the island of plata",
            es: "Leones marinos de la isla de la plata",
            fr: "Les lions de mers ou otaries de l'ile de la plata",
        },
        alt: {
            en: "Sea lions of the island of plata",
            es: "Leones marinos de la isla de la plata",
            fr: "Les lions de mers ou otaries de l'ile de la plata",
        },
    },
    "photo_article108_5.png": {
        caption: {
            en: "Pineapple plant",
            es: "Planta de ananá",
            fr: "Plante d'ananas",
        },
        alt: { en: "Pineapple plant", es: "Planta de ananá", fr: "Plante d'ananas" },
    },
    "photo_article108_6.png": {
        caption: {
            en: "Walk into the woods",
            es: "Caminata en el bosque",
            fr: "Promenade dans la forêt",
        },
        alt: {
            en: "Walk into the woods",
            es: "Caminata en el bosque",
            fr: "Promenade dans la forêt",
        },
    },
    "photo_article108_7.png": {
        caption: {
            en: "Running on the beach",
            es: "Corriendo en la playa",
            fr: "Footing sur la plage",
        },
        alt: { en: "Running on the beach", es: "Corriendo en la playa", fr: "Footing sur la plage" },
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
    "photo_article110_1.png": {
        caption: {
            en: "Sunset leaving Puerto Lopez",
            es: "Puesta de sol saliendode Puerto Lopez",
            fr: "Coucher de soleil en repartant de Puerto Lopez",
        },
        alt: {
            en: "Sunset leaving Puerto Lopez",
            es: "Puesta de sol saliendode Puerto Lopez",
            fr: "Coucher de soleil en repartant de Puerto Lopez",
        },
    },
    "photo_article110_2.png": {
        caption: { en: "Hotel for the night", es: "Hotel para la noche", fr: "Hotel pur la nuit" },
        alt: { en: "Hotel for the night", es: "Hotel para la noche", fr: "Hotel pur la nuit" },
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
    "photo_article114_2.png": {
        caption: {
            en: "Soapbox race in the streets of Cuenca",
            es: "Carrera de tribuna en las calles de Cuenca",
            fr: "Course de caisse à savon dans les rues de Cuenca",
        },
        alt: {
            en: "Soapbox race in the streets of Cuenca",
            es: "Carrera de tribuna en las calles de Cuenca",
            fr: "Course de caisse à savon dans les rues de Cuenca",
        },
    },
    "photo_article114_3.png": {
        caption: {
            en: "Goodbye to Ojalà after more than 5000 km together",
            es: "Despedida a Ojalà después de más de 5000 km juntos",
            fr: "Mes adieux à Ojalà après plus de 5000 km ensemble",
        },
        alt: {
            en: "Goodbye to Ojalà after more than 5000 km together",
            es: "Despedida a Ojalà después de más de 5000 km juntos",
            fr: "Mes adieux à Ojalà après plus de 5000 km ensemble",
        },
    },
    "photo_article114_4.png": {
        caption: { en: "Cajas National Park", es: "Parque Nacional de las Cajas", fr: "Le parc des Cajas" },
        alt: { en: "Cajas National Park", es: "Parque Nacional de las Cajas", fr: "Le parc des Cajas" },
    },
    "photo_article114_5.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article114_6.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article114_7.png": {
        caption: { en: "A lake in the park of the cajas", es: "Un lago en el parque de las cajas", fr: "Un lac dans le parc des cajas" },
        alt: { en: "A lake in the park of the cajas", es: "Un lago en el parque de las cajas", fr: "Un lac dans le parc des cajas" },
    },
    "photo_article114_8.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article114_9.png": {
        caption: {
            en: "Offering to the mountain",
            es: "Ofrenda a la montaña",
            fr: "Offrande à la montagne",
        },
        alt: { en: "Offering to the mountain", es: "Ofrenda a la montaña", fr: "Offrande à la montagne" },
    },
    "photo_article114_10.png": {
        caption: {
            en: "Ascension of the Mandango to Vilcabamba",
            es: "Ascensión del Mandango a Vilcabamba",
            fr: "Ascension del mMandango à Vilcabamba",
        },
        alt: {
            en: "Ascension of the Mandango to Vilcabamba",
            es: "Ascensión del Mandango a Vilcabamba",
            fr: "Ascension du mMandango à Vilcabamba",
        },
    },
    "photo_article116_1.png": {
        caption: {
            en: "An strangely inspiring message",
            es: "Un mensaje extrañamente inspirador",
            fr: "Un message étrangement inspirant",
        },
        alt: { en: "An strangely inspiring message", es: "Un mensaje extrañamente inspirador", fr: "Un message étrangement inspirant" },
    },
    "photo_article115_2.png": {
        caption: {
            en: "A trip in the bus's hold due to lack of space",
            es: "Un viaje en la bodega del bus porfalta de espacio",
            fr: "Voyage dans la soute du bus par manque de place",
        },
        alt: {
            en: "A trip in the bus's hold due to lack of space",
            es: "Un viaje en la bodega del bus porfalta de espacio",
            fr: "Voyage dans la soute du bus par manque de place",
        },
    },
    // Tenth pages gallery
    "photo_article115_1.png": {
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
    "photo_article117_1.png": {
        caption: {
            en: "A frog that is better not to touch",
            es: "Una rana que es mejor no tocar",
            fr: "Une grenouille à ne pas toucher",
        },
        alt: { en: "A frog that is better not to touch", es: "Una rana que es mejor no tocar", fr: "Une grenouille à ne pas toucher" },
    },
    "photo_article117_2.png": {
        caption: {
            en: "A motorcycle tour in the Amazonia",
            es: "Une vuelta en moto en la Amazonía",
            fr: "Sortie en moto dans l'amazonie",
        },
        alt: { en: "A motorcycle tour in the Amazonia", es: "Une vuelta en moto en la Amazonía", fr: "Sortie en moto dans l'amazonie" },
    },
    "photo_article117_3.png": {
        caption: { en: "Main place to spend time", es: "Lugar principal para pasar el tiempo", fr: "Lieu principal pour passer le temps" },
        alt: { en: "Main place to spend time", es: "Lugar principal para pasar el tiempo", fr: "Lieu principal pour passer le temps" },
    },
    "photo_article117_4.png": {
        caption: { en: "Our house in Llucanayacu", es: "Nuestra casa en Llucanayacu", fr: "Notre maison a LLucanayacu" },
        alt: { en: "Our house in Llucanayacu", es: "Nuestra casa en Llucanayacu", fr: "Notre maison a LLucanayacu" },
    },
    "photo_article117_5.png": {
        caption: {
            en: "Ameerega trivittata",
            es: "Ameerega trivittata",
            fr: "Ameerega trivittata",
        },
        alt: {
            en: "Ameerega trivittata",
            es: "Ameerega trivittata",
            fr: "Ameerega trivittata",
        },
    },
    "photo_article117_6.png": {
        caption: {
            en: "Peaceful looking at the central place of Llucanayacu",
            es: "Tranquilo mirando la plaza central de Llucanayacu",
            fr: "Tranquille en regardant la place centrale de Llucanayacu",
        },
        alt: {
            en: "Peaceful looking at the central place of Llucanayacu",
            es: "Tranquilo mirando la plaza central de Llucanayacu",
            fr: "Tranquille en regardant la place centrale de Llucanayacu",
        },
    },
    "photo_article117_7.png": {
        caption: {
            en: "The children of the village are curious about us",
            es: "Los niños del pueblo están curiosos de conocernos",
            fr: "Les enfants du village sont curieux de nous connaître",
        },
        alt: {
            en: "The children of the village are curious about us",
            es: "Los niños del pueblo están curiosos de conocernos",
            fr: "Les enfants du village sont curieux de nous connaître",
        },
    },
    "photo_article117_8.png": {
        caption: {
            en: "In the central place of Llucanayacu",
            es: "En la plaza central de Llucanayacu",
            fr: "Sur la place centrale de llucanayacu",
        },
        alt: {
            en: "In the central place of Llucanayacu",
            es: "En la plaza central de Llucanayacu",
            fr: "Sur la place centrale de llucanayacu",
        },
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
    "photo_article118_2.png": {
        caption: {
            en: "Two frogs found in the right moment",
            es: "Dos sapos encontrados en el momento justo",
            fr: "Deux crapeaux pris en flagrant délit ",
        },
        alt: {
            en: "Two frogs found in the right moment",
            es: "Dos sapos encontrados en el momento justo",
            fr: "Deux crapeaux pris en flagrant délit ",
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
    "photo_article119_2.png": {
        caption: {
            en: "A journey in a boat until Iquitos",
            es: "Un viaje en bote hasta Iquitos",
            fr: "Le voyage en bateau jusqu'à Iquitos",
        },
        alt: { en: "A journey in a boat until Iquitos", es: "Un viaje en bote hasta Iquitos", fr: "Le voyage en bateau jusqu'à Iquitos" },
    },
    "photo_article119_3.png": {
        caption: {
            en: "A village accessible by boat only in the Amazonia",
            es: "Un pueblo accesible solo por bote en la Amazonía",
            fr: "Un village uniquement accessible par bateau dans l'Amazonie",
        },
        alt: {
            en: "A village accessible by boat only in the Amazonia",
            es: "Un pueblo accesible solo por bote en la Amazonía",
            fr: "Un village uniquement accessible par bateau dans l'Amazonie",
        },
    },
    "photo_article119_4.png": {
        caption: {
            en: "The Amazon river",
            es: "El gran río Amazonas",
            fr: "Le vaste fleuve Amazon",
        },
        alt: {
            en: "The Amazon river",
            es: "El gran río Amazonas",
            fr: "Le vaste fleuve Amazon",
        },
    },
    "photo_article119_5.png": {
        caption: {
            en: "On the hammock in the boat",
            es: "En hamac en el bote",
            fr: "En Hamac sur le bateau",
        },
        alt: {
            en: "On the hammock in the boat",
            es: "En hamac en el bote",
            fr: "En Hamac sur le bateau",
        },
    },
    "photo_article119_6.png": {
        caption: {
            en: "A selfie on the boat",
            es: "Un selfie en el bote",
            fr: "Selfie sur le bateau",
        },
        alt: {
            en: "A selfie on the boat",
            es: "Un selfie en el bote",
            fr: "Selfie sur le bateau",
        },
    },
    "photo_article120_1.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article120_2.png": {
        caption: {
            en: "The children of the boat keep us company",
            es: "Los niños del bote nos entretienen",
            fr: "Les enfants du bateau nous tiennent compagnie",
        },
        alt: {
            en: "The children of the boat keep us company",
            es: "Los niños del bote nos entretienen",
            fr: "Les enfants du bateau nous tiennent compagnie",
        },
    },
    "photo_article120_3.png": {
        caption: {
            en: "And we keep them company",
            es: "Y se entretienen con nosotros",
            fr: "Et ils s'occupent",
        },
        alt: { en: "And we keep them company", es: "Y se entretienen con nosotros", fr: "Et ils s'occupent" },
    },
    "photo_article120_4.png": {
        caption: {
            en: "A quick look at a very different life",
            es: "Un vistazo a una vida muy diferente",
            fr: "Un aperçu d'une vie très différente",
        },
        alt: {
            en: "A quick look at a very different life",
            es: "Un vistazo a una vida muy diferente",
            fr: "Un aperçu d'une vie très différente",
        },
    },
    "photo_article120_5.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article120_7.png": {
        caption: {
            en: "A big cockroach",
            es: "Una cucaracha grande",
            fr: "Une grosse cucaracha",
        },
        alt: {
            en: "A big cockroach",
            es: "Una cucaracha grande",
            fr: "Une grosse cucaracha",
        },
    },
    "photo_article120_6.png": {
        caption: { en: "Pure Amazonia", es: "La pura Amazonía", fr: "La pure amazonie" },
        alt: { en: "Pure Amazonia", es: "La pura Amazonía", fr: "La pure amazonie" },
    },
    "photo_article121_1.png": {
        caption: {
            en: "Carnival rehearsal",
            es: "Ensayo del carnaval",
            fr: "Répétition du carnaval",
        },
        alt: {
            en: "Carnival rehearsal",
            es: "Ensayo del carnaval",
            fr: "Répétition du carnaval",
        },
    },
    "photo_article124_1.png": {
        caption: {
            en: "An improvised kitchen",
            es: "Una cocina improvisada",
            fr: "Cuisine improvisée",
        },
        alt: {
            en: "An improvised kitchen",
            es: "Una cocina improvisada",
            fr: "Cuisine improvisée",
        },
    },
    "photo_article125_1.png": {
        caption: {
            en: "The beginning of the road to Choquequirao",
            es: "Empieza el camino a Choquequirao",
            fr: "Début de la route vers le Choquequirao",
        },
        alt: {
            en: "The beginning of the road to Choquequirao",
            es: "Empieza el camino a Choquequirao",
            fr: "Début de la route vers le Choquequirao",
        },
    },
    "photo_article125_2.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_3.png": {
        caption: { en: "A long descent awaits us", es: "Una larga bajadanos espera", fr: "Une longue descente nous attend" },
        alt: { en: "A long descent awaits us", es: "Una larga bajadanos espera", fr: "Une longue descente nous attend" },
    },
    "photo_article125_4.png": {
        caption: {
            en: "Finally at the bottom, I cross to go back up on the other side",
            es: "Finalmente llegué abajo, cruzo para volver a subirpor el otro lado",
            fr: "Enfin en bas, je traverse pour remonter de l'autre côté",
        },
        alt: {
            en: "Finally at the bottom, I cross to go back up on the other side",
            es: "Finalmente llegué abajo, cruzo para volver a subir por el otro lado",
            fr: "Enfin en bas, je traverse pour remonter de l'autre côté",
        },
    },
    "photo_article125_5.png": {
        caption: { en: "My evening company", es: "Mi compañía de la noche", fr: "Ma compagnie du soir" },
        alt: { en: "My evening company", es: "Mi compañía de la noche", fr: "Ma compagnie du soir" },
    },
    "photo_article125_6.png": {
        caption: {
            en: "The next day, I arrive at the modern village of Choquequirao",
            es: "Al otro dia, llego al pueblo moderno de Choquequirao",
            fr: "Le lendemain, j'arrive au village moderne de Choquequirao",
        },
        alt: {
            en: "The next day, I arrive at the modern village of Choquequirao",
            es: "Al otro dia, llego al pueblo moderno de Choquequirao",
            fr: "Le lendemain, j'arrive au village moderne de Choquequirao",
        },
    },
    "photo_article125_7.png": {
        caption: {
            en: "The weather is humid and cold",
            es: "El tiempo es húmedo y frío",
            fr: "Le temps est humide et froid",
        },
        alt: {
            en: "The weather is humid and cold",
            es: "El tiempo es húmedo y frío",
            fr: "Le temps est humide et froid",
        },
    },
    "photo_article125_8.png": {
        caption: {
            en: "The lost city stands out at a distance",
            es: "La ciudad perdida aparece en la distancia",
            fr: "La cité perdue se distingue au loin",
        },
        alt: {
            en: "The lost city stands out at a distance",
            es: "La ciudad perdida aparece en la distancia",
            fr: "La cité perdue se distingue au loin",
        },
    },
    "photo_article125_9.png": {
        caption: {
            en: "The entrance to the lost city",
            es: "La entrada a la ciudad perdida",
            fr: "L'entrée de la cité perdue",
        },
        alt: { en: "The entrance to the lost city", es: "La entrada a la ciudad perdida", fr: "L'entrée de la cité perdue" },
    },
    "photo_article125_10.png": {
        caption: {
            en: "The terraced steps above the cliffs",
            es: "Las terrazas arriba los precipicios",
            fr: "Les terrasses à flanc de falaise",
        },
        alt: {
            en: "The terraced steps above the cliffs",
            es: "Las terrazas arriba los precipicios",
            fr: "Les terrasses à flanc de falaise",
        },
    },
    "photo_article125_11.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_12.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_13.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_14.png": {
        caption: { en: "The famous terraced steps", es: "Las famosas terrazas en escalones", fr: "Les fameuses terrasses en escaliers" },
        alt: { en: "The famous terraced steps", es: "Las famosas terrazas en escalones", fr: "Les fameuses terrasses en escaliers" },
    },
    "photo_article125_15.png": {
        caption: {
            en: "Buildings of the past",
            es: "Edificios de epoca",
            fr: "Les constructions de l'époque",
        },
        alt: {
            en: "Buildings of the past",
            es: "Edificios de epoca",
            fr: "Les constructions de l'époque",
        },
    },
    "photo_article125_16.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_17.png": {
        caption: {
            en: "The long steps of the terraces",
            es: "Los escalones largos de las terrazas",
            fr: "De longs escaliers les long des terrasses",
        },
        alt: {
            en: "The long steps of the terraces",
            es: "Los escalones largos de las terrazas",
            fr: "De longs escaliers les long des terrasses",
        },
    },
    "photo_article125_18.png": {
        caption: {
            en: "View from the top of the city",
            es: "Vista desde la cima de la ciudad",
            fr: "Vue depuis le haut de la cité",
        },
        alt: { en: "View from the top of the city", es: "Vista desde la cima de la ciudad", fr: "Vue depuis le haut de la cité" },
    },
    "photo_article125_19.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_20.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_21.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_22.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_23.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_24.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article125_25.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article125_26.png": {
        caption: {
            en: "On the return path",
            es: "En el camino de regreso",
            fr: "Sur le chemin du retour",
        },
        alt: { en: "On the return path", es: "En el camino de regreso", fr: "Sur le chemin du retour" },
    },
    "photo_article125_27.png": {
        caption: {
            en: "The place of observation of the condors",
            es: "Lugar de observación de los condores",
            fr: "Point de vue d'observation des condors",
        },
        alt: {
            en: "The place of observation of the condors",
            es: "Lugar de observación de los condores",
            fr: "Point de vue d'observation des condors",
        },
    },
    "photo_article126_1.png": {
        caption: {
            en: "The Inca buildings",
            es: "Las construcciones incas",
            fr: "Les constructions Incas",
        },
        alt: {
            en: "The Inca buildings",
            es: "Las construcciones incas",
            fr: "Les constructions Incas",
        },
    },
    "photo_article126_2.png": {
        caption: { en: "The ruins of Ollantaytambo", es: "Las ruinas de Ollantaytambo", fr: "Les ruines d’Ollantaytambo" },
        alt: { en: "The ruins of Ollantaytambo", es: "Las ruinas de Ollantaytambo", fr: "Les ruines d’Ollantaytambo" },
    },
    "photo_article126_3.png": {
        caption: {
            en: "The ruins seen from above",
            es: "Las ruinas vistas desde arriba",
            fr: "Les ruines vue d'en haut",
        },
        alt: {
            en: "The ruins seen from above",
            es: "Las ruinas vistas desde arriba",
            fr: "Les ruines vue d'en haut",
        },
    },
    "photo_article126_4.png": {
        caption: { en: "The village seen from the ruins", es: "El pueblo visto desde las ruinas", fr: "Le village vue depuis les ruines" },
        alt: { en: "The village seen from the ruins", es: "El pueblo visto desde las ruinas", fr: "Le village vue depuis les ruines" },
    },
    "photo_article126_5.png": {
        caption: {
            en: "The ascent of the colored mountains",
            es: "La ascensión de las montañas de colores",
            fr: "Ascension des montagnes de couleurs",
        },
        alt: {
            en: "The ascent of the colored mountains",
            es: "La ascensión de las montañas de colores",
            fr: "Ascension des montagnes de couleurs",
        },
    },
    "photo_article126_6.png": {
        caption: { en: "The famous rainbow mountains", es: "Las famosas montañas de colores", fr: "Les fameuses montagnes de couleurs" },
        alt: { en: "The famous rainbow mountains", es: "Las famosas montañas de colores", fr: "Les fameuses montagnes de couleurs" },
    },
    "photo_article126_7.png": {
        caption: {
            en: "On the way down",
            es: "Bajando de las montañas",
            fr: "Sur la redescente",
        },
        alt: {
            en: "On the way down",
            es: "Bajando de las montañas",
            fr: "Sur la redescente",
        },
    },
    "photo_article126_8.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article126_9.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article126_10.png": {
        caption: {
            en: "The plains filled with llamas",
            es: "Los valles llenos de llamas",
            fr: "Les plaines rempli de llamas",
        },
        alt: {
            en: "The plains filled with llamas",
            es: "Los valles llenos de llamas",
            fr: "Les plaines rempli de llamas",
        },
    },
    "photo_article126_13.png": {
        caption: {
            en: "The roofs of Cuzco",
            es: "Las tejas de Cuzco",
            fr: "Les toits de Cuzco",
        },
        alt: {
            en: "The roofs of Cuzco",
            es: "Las tejas de Cuzco",
            fr: "Les toits de Cuzco",
        },
    },
    "photo_article127_1.png": {
        caption: {
            en: "Do not respect the signs",
            es: "No respetar los carteles",
            fr: "Ne surtout pas respecter les panneaux",
        },
        alt: {
            en: "Do not respect the signs",
            es: "No respetar los carteles",
            fr: "Ne surtout pas respecter les panneaux",
        },
    },
    "photo_article127_2.png": {
        caption: { en: "The famous one", es: "El famoso", fr: "Le fameux" },
        alt: { en: "The famous one", es: "El famoso", fr: "Le fameux" },
    },
    "photo_article127_3.png": {
        caption: {
            en: "A little bit of tourism",
            es: "Un poco de turismo",
            fr: "Un peu de tourisme",
        },
        alt: {
            en: "A little bit of tourism",
            es: "Un poco de turismo",
            fr: "Un peu de tourisme",
        },
    },
    "photo_article128_1.png": {
        caption: {
            en: "The gate of Bolivia",
            es: "La puerta de Bolivia",
            fr: "La porte de Bolivie",
        },
        alt: {
            en: "The gate of Bolivia",
            es: "La puerta de Bolivia",
            fr: "La porte de Bolivie",
        },
    },
    "photo_article128_2.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article128_3.png": {
        caption: {
            en: "Copacabana from above",
            es: "Copacabana desde arriba",
            fr: "Copacabana vue d'en haut",
        },
        alt: { en: "Copacabana from above", es: "Copacabana desde arriba", fr: "Copacabana vue d'en haut" },
    },
    "photo_article128_4.png": {
        caption: {
            en: "The Titicaca lake",
            es: "El lago Titicaca",
            fr: "Lac Titicaca",
        },
        alt: { en: "The Titicaca lake", es: "El lago Titicaca", fr: "Lac Titicaca" },
    },
    "photo_article128_5.png": {
        caption: { en: "Copacabana beach", es: "Playa de Copacabana", fr: "Plage de Copacabana" },
        alt: { en: "Copacabana beach", es: "Playa de Copacabana", fr: "Plage de Copacabana" },
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
    "photo_article128_7.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article128_8.png": {
        caption: {
            en: "The unique little village of the island",
            es: "El unico pueblito de la isla",
            fr: "L'unique petit village de l'île",
        },
        alt: {
            en: "The unique little village of the island",
            es: "El unico pueblito de la isla",
            fr: "L'unique petit village de l'île",
        },
    },
    "photo_article128_9.png": {
        caption: { en: "A beautiful connection", es: "Una hermosa conexión", fr: "Une belle connexion" },
        alt: { en: "A beautiful connection", es: "Una hermosa conexión", fr: "Une belle connexion" },
    },
    "photo_article128_10.png": {
        caption: {
            en: " ",
            es: " ",
            fr: " ",
        },
        alt: {
            en: " ",
            es: " ",
            fr: " ",
        },
    },
    "photo_article128_11.png": {
        caption: {
            en: "Traditional boats",
            es: "Botes tradicionales",
            fr: "Bateaux traditionnels",
        },
        alt: {
            en: "Traditional boats",
            es: "Botes tradicionales",
            fr: "Bateaux traditionnels",
        },
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
    "photo_article130_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_1.png": {
        caption: {
            en: "The salt constructions at the Uyuni salt flat",
            es: "Las construcciones de sal en el salar de Uyuni",
            fr: "Constructions de sel au salar d'Uyuni",
        },
        alt: {
            en: "The salt constructions at the Uyuni salt flat",
            es: "Las construcciones de sal en el salar de Uyuni",
            fr: "Constructions de sel au salar d'Uyuni",
        },
    },
    "photo_article131_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_4.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_5.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_6.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_7.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
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
    "photo_article131_9.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article131_10.png": {
        caption: {
            en: "Enjoying the landscape to get nice pics",
            es: "Aprovechamos el paisaje para sacar lindas fotos",
            fr: "On profite bien du paysage pour prendre de belles photos",
        },
        alt: {
            en: "Enjoying the landscape to get nice pics",
            es: "Aprovechamos el paisaje para sacar lindas fotos",
            fr: "On profite bien du paysage pour prendre de belles photos",
        },
    },
    "photo_article131_11.png": {
        caption: { en: "The poncho changes everything", es: "El poncho cambia todo", fr: "Le poncho ça change tout" },
        alt: { en: "The poncho changes everything", es: "El poncho cambia todo", fr: "Le poncho ça change tout" },
    },
    "photo_article131_12.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article132_2.png": {
        caption: {
            en: "Fields filled with llamas on the road to Potosi",
            es: "Planes llenas de llamas en la ruta a Potosi",
            fr: "Plaines rempli de llamas sur la roure vers Potosi",
        },
        alt: {
            en: "Fields filled with llamas on the road to Potosi",
            es: "Planes llenas de llamas en la ruta a Potosi",
            fr: "Plaines rempli de llamas sur la roure vers Potosi",
        },
    },
    "photo_article132_3.png": {
        caption: {
            en: "A little dance in the public square of Potosi",
            es: "Un baile en la plaza pública de Potosi",
            fr: "Petite danse sur la place publique de Potosi",
        },
        alt: {
            en: "A little dance in the public square of Potosi",
            es: "Una baile en la plaza pública de Potosi",
            fr: "Petite danse sur la place publique de Potosi",
        },
    },
    "photo_article133_1.png": {
        caption: {
            en: "Ibiscus flowers in the streets of Sucre",
            es: "Flores de ibís en las calles de Sucre",
            fr: "Fleurs d'Ibiscus dans les rues de Sucre",
        },
        alt: {
            en: "Ibiscus flowers in the streets of Sucre",
            es: "Flores de ibís en las calles de Sucre",
            fr: "Fleurs d'Ibiscus dans les rues de Sucre",
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
    "photo_article134_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article134_4.png": {
        caption: { en: "Vicuña herd", es: "Rebaño de vicuñas", fr: "Troupeau de Vicuñas" },
        alt: { en: "Vicuña herd", es: "Rebaño de vicuñas", fr: "Troupeau de Vicuñas" },
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
    "photo_article135_2.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article135_3.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article136_1.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article137_1.png": {
        caption: { en: "A mate in the amphitheater", es: "Un mate en el anfiteatro", fr: "Un maté en el amphiteatro" },
        alt: { en: "A mate in the amphitheater", es: "Un mate en el anfiteatro", fr: "Un maté en el amphiteatro" },
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
    "photo_article138_1.png": {
        caption: { en: " ", es: " ", fr: " " },
        alt: { en: " ", es: " ", fr: " " },
    },
    "photo_article139_1.png": {
        caption: { en: "Birthday of the little Vitto", es: "Cumpleaños del Vittito", fr: "Anniversaire du petit Vitto" },
        alt: { en: "Birthday of the little Vitto", es: "Cumpleaños del Vittito", fr: "Anniversaire du petit Vitto" },
    },
    "photo_article140_2.png": {
        caption: { en: "An emotional farewell", es: "Una despedida llena de emociones", fr: "Un aurevoir plein d'émotions" },
        alt: { en: "An emotional farewell", es: "Una despedida llena de emociones", fr: "Un aurevoir plein d'émotions" },
    },
};

export function getPhotoMeta(filename: string): { caption: string; alt: string } {
    const lang = (i18n.language || "en").slice(0, 2) as "en" | "es" | "fr";
    const entry = localizedMeta[filename];
    if (entry) {
        const resolve = (text: LocalizedText): string => (typeof text === "string" ? text : (text[lang] ?? text.en ?? text.fr ?? filename));
        return { caption: resolve(entry.caption), alt: resolve(entry.alt) };
    }
    return { caption: filename, alt: filename };
}

export default getPhotoMeta;
