// Metadata for gallery images
const photoMeta: Record<string, { caption: string; alt: string }> = {
    // Maps
    "Map-caraibe.jpg": { caption: "Carte des Caraïbes", alt: "Carte de navigation des Caraïbes" },
    "Map-colombie.jpg": { caption: "Carte de la Colombie", alt: "Carte de la Colombie et ses régions" },
    "Map-SA.jpg": { caption: "Carte de l'Amérique du Sud", alt: "Carte de l'Amérique du Sud" },
    "Map-world.jpg": { caption: "Carte du monde", alt: "Carte du monde montrant le parcours" },

    // First pages gallery
    "Photo_article2_1.jpg": {
        caption: "Jérémy sur le catamaran de Jean-Louis, au départ de l’aventure.",
        alt: "Jérémy sur le catamaran de Jean-Louis, au départ de l’aventure.",
    },
    "Photo_article3_1.jpg": { caption: "Un coucher de soleil dont on se souvient", alt: "Un coucher de soleil dont on se souvient" },
    "Photo_article4_1.jpg": { caption: "Dominique profite du calme avec classe", alt: "Dominique profite du calme avec classe" },
    "Photo_article5_1.jpg": { caption: "Première escale", alt: "Première escale" },
    "Photo_article9_1.jpg": { caption: "Gibraltar", alt: "Gibraltar" },
    "Photo_article10_1.jpg": { caption: "Enfin passé le détroit, l’Atlantique", alt: "Enfin passé le détroit, l’Atlantique" },
    "Photo_article13_1.jpg": { caption: "De grandes voiles bien gonflées", alt: "De grandes voiles bien gonflées" },
    "Photo_article13_2.jpg": { caption: "On ne s’en lasse jamais", alt: "On ne s’en lasse jamais" },
    "Photo_article14_1.jpg": {
        caption: "Un gros grément en pleine manoeuvre au port de Lanzarote",
        alt: "Un gros grément en pleine manoeuvre au port de Lanzarote",
    },
    "Photo_article16_1.jpg": { caption: "La bande du Soho", alt: "La bande du Soho" },
    "Photo_article17_1.jpg": { caption: "Notre objectif en vu chaque soir, l’Ouest", alt: "Notre objectif en vu chaque soir, l’Ouest" },
    "Photo_article18_1.jpg": { caption: "Drôle de nuages", alt: "Drôle de nuages" },
    "Photo_article19_1.jpg": { caption: "Les dauphins nous montrent le chemin", alt: "Les dauphins nous montrent le chemin" },
    "Photo_article22_1.jpg": { caption: "En quête du fameux rayon vert", alt: "En quête du fameux rayon vert" },
    "Photo_article23_1.jpg": { caption: "A l’ombre des voiles", alt: "A l’ombre des voiles" },
    "Photo_article24_1.jpg": {
        caption: "Au mouillage dans une baie de Mindelo, Cap-Vert",
        alt: "Au mouillage dans une baie de Mindelo, Cap-Vert",
    },
    "Photo_article25_1.jpg": { caption: "Notre capitaine fier de sa prise", alt: "Notre capitaine fier de sa prise" },
    "Photo_article26_1.jpg": { caption: "Attentif à l’émergence de l’horizon", alt: "Attentif à l’émergence de l’horizon" },
    "Photo_article27_1.jpg": { caption: "Un dernier pour la route", alt: "Un dernier pour la route" },
    "Photo_article28_2.jpg": { caption: "Ascension du mât au port de Pointe-à-Pitre", alt: "Ascension du mât au port de Pointe-à-Pitre" },
    // Second pages gallery
    "Photo_article30_3.jpg": {
        caption: "Une pluie lointaine à notre spot de surf, Port-Louis",
        alt: "Une pluie lointaine à notre spot de surf, Port-Louis",
    },
    "Photo_article31_3.jpg": { caption: "La nature reprend le dessus rapidement", alt: "La nature reprend le dessus rapidement" },
    "Photo_article33_4.jpg": { caption: "On ne passe pas souvent par ici", alt: "On ne passe pas souvent par ici" },
    "Photo_article34_1.jpg": { caption: "Nous profitons d’une fenêtre avec vue.", alt: "Nous profitons d’une fenêtre avec vue." },
    "Photo_article34_7.jpg": { caption: "l’unique cabane avec vue dégagée", alt: "l’unique cabane avec vue dégagée" },
    "Photo_article35_6.jpg": { caption: "La cabane de Morne-Frébault sous la pluie", alt: "La cabane de Morne-Frébault sous la pluie" },
    "Photo_article37_1.jpg": { caption: "L’observatoire d’oiseaux de la Guadeloupe", alt: "L’observatoire d’oiseaux de la Guadeloupe" },
    "Photo_article38_1.jpg": {
        caption: "Notre phare dans le brouillard au sommet de la soufrière",
        alt: "Notre phare dans le brouillard au sommet de la soufrière",
    },
    "Photo_article39_1.jpg": { caption: "Coucher de soleil sur les saintes", alt: "Coucher de soleil sur les saintes" },
    "Photo_article39_2.jpg": {
        caption: "Lever de soleil sur notre site de campement, Baie de Pompierre",
        alt: "Lever de soleil sur notre site de campement, Baie de Pompierre",
    },
    // Third pages gallery
    "Photo_article40_1.jpg": { caption: "Le ponton de la marina de Bas du Fort", alt: "Le ponton de la marina de Bas du Fort" },
    "Photo_article43_2.jpg": { caption: "Hurah, le bateau de Joe à Antigua", alt: "Hurah, le bateau de Joe à Antigua" },
    "Photo_article44_1.jpg": { caption: "L’incroyable arbre a saucisse", alt: "L’incroyable arbre a saucisse" },
    "Photo_article45_1.jpg": {
        caption: "On est plutôt bien accueilli à Stingray City",
        alt: "On est plutôt bien accueilli à Stingray City",
    },
    "Photo_article45_3.jpg": { caption: "Un beau sport de bivouac à Half moon bay", alt: "Un beau sport de bivouac à Half moon bay" },
    // Fourth pages gallery
    "Photo_article46_1.jpg": { caption: "Coucher de soleil à la réserve Cousteau", alt: "Coucher de soleil à la réserve Cousteau" },
    "Photo_article46_2.jpg": { caption: "le Kundalini toutes voiles dehors", alt: "le Kundalini toutes voiles dehors" },
    "Photo_article47_1.jpg": { caption: "Coucher de soleil depuis la Dominique", alt: "Coucher de soleil depuis la Dominique" },
    "Photo_article48_1.jpg": { caption: "Chargé avec les bananes", alt: "Chargé avec les bananes" },
    "Photo_article49_5.jpg": { caption: "The boiling lake", alt: "The boiling lake" },
    "Photo_article50_1.jpg": {
        caption: "Premier aperçu du volcan martiniquais, la montagne pelée",
        alt: "Premier aperçu du volcan martiniquais, la montagne pelée",
    },
    "Photo_article51_1.jpg": { caption: "La belle vie", alt: "La belle vie" },
    "Photo_article52_1.jpg": {
        caption: "Le meilleur spot de bivouac, proche du prêcheur",
        alt: "Le meilleur spot de bivouac, proche du prêcheur",
    },
    "Photo_article52_3.jpg": { caption: "La caldeira de la montagne pelée", alt: "La caldeira de la montagne pelée" },
    // Fifth pages gallery
    "Photo_article53_2.jpg": {
        caption: "Une nouvelle aventure maritime, Hopen à la marina du bas du fort",
        alt: "Une nouvelle aventure maritime, Hopen à la marina du bas du fort",
    },
    "Photo_article55_1.jpg": {
        caption: "Les voiles d’avant et le fameux tangon en pleine action",
        alt: "Les voiles d’avant et le fameux tangon en pleine action",
    },
    "Photo_article56_2.jpg": { caption: "Une rue charmante de Willemstad, Curaçao", alt: "Une rue charmante de Willemstad, Curaçao" },
    "Photo_article57_1.jpg": { caption: "L’arrivée tant espérée au nouveau continent", alt: "L’arrivée tant espérée au nouveau continent" },
    "Photo_article59_1.jpg": {
        caption: "Photo souvenir de Hopen a Puerto Valero, Colombia",
        alt: "Photo souvenir de Hopen a Puerto Valero, Colombia",
    },
    // Sixth pages gallery
    "Photo_article59_3.jpg": {
        caption: "Une belle citation rencontré au hasard dans une rue de Santa Marta",
        alt: "Une belle citation rencontré au hasard dans une rue de Santa Marta",
    },
    "Photo_article60_2.jpg": {
        caption: "Le travail dans le champ de maïs sous un soleil tropical",
        alt: "Le travail dans le champ de maïs sous un soleil tropical",
    },
    "Photo_article60_4.jpg": { caption: "Le spectacle de chaque soir", alt: "Le spectacle de chaque soir" },
    "Photo_article61_2.jpg": { caption: "Retour des courses", alt: "Retour des courses" },
    "Photo_article62_1.jpg": { caption: "Une satisfaction inespérée", alt: "Une satisfaction inespérée" },
    "Photo_article63_2.jpg": { caption: "Le fameux Guacamaya", alt: "Le fameux Guacamaya" },
    // Seventh pages gallery
    "Photo_article64_1.jpg": {
        caption: "Un vélo bien chargé au départ de Santa Marta",
        alt: "Un vélo bien chargé au départ de Santa Marta",
    },
    "Photo_article65_3.jpg": { caption: "Un bon bain à l’arrivée à Carthagena", alt: "Un bon bain à l’arrivée à Carthagena" },
    "Photo_article66_1.jpg": { caption: "Le club de plongée de Barù", alt: "Le club de plongée de Barù" },
    "Photo_article67_1.jpg": {
        caption: "Mon lieu de repos dans ce paradis à Palenque",
        alt: "Mon lieu de repos dans ce paradis à Palenque",
    },
    "Photo_article69_1.jpg": { caption: "Mes hôtes de Sahagùn", alt: "Mes hôtes de Sahagùn" },
    "Photo_article70_1.jpg": { caption: "Drôle de panneau", alt: "Drôle de panneau" },
    "Photo_article71_3.jpg": { caption: "Pas terrible pour planter la tente", alt: "Pas terrible pour planter la tente" },
    "Photo_article71_4.jpg": { caption: "Pas terrible pour planter la tente", alt: "Pas terrible pour planter la tente" },
    "photo_article73_1.png": { caption: "Les fameuses vaches aux oreilles pendantes", alt: "Les fameuses vaches aux oreilles pendantes" },
    "photo_article73_5.png": { caption: "Mon hôte de Yarumal plein d’amour", alt: "Mon hôte de Yarumal plein d’amour" },
    "photo_article75_1.png": { caption: "Une représentation plutôt ressemblante", alt: "Une représentation plutôt ressemblante" },
    "photo_article76_5.png": { caption: "La vue du haut du peñol", alt: "La vue du haut du peñol" },
    "photo_article78_1.png": { caption: "Un cheval prenant un verre à Jardin", alt: "Un cheval prenant un verre à Jardin" },
    // Eighth pages gallery
    "photo_article81_5.png": { caption: "La zona cafetera", alt: "La zona cafetera" },
    "photo_article81_6.png": { caption: "Les fameux palmiers de Cocora", alt: "Les fameux palmiers de Cocora" },
    "photo_article82_1.png": { caption: "Au col de la Linea, en descente vers Ibagué", alt: "Au col de la Linea, en descente vers Ibagué" },
    "photo_article84_2.png": {
        caption: "Une belle vue sur le nevado del ruiz derrière un cycliste ambitieux",
        alt: "Une belle vue sur le nevado del ruiz derrière un cycliste ambitieux",
    },
    "photo_article85_3.png": { caption: "Photo de famille dans la mine de Falan", alt: "Photo de famille dans la mine de Falan" },
    "photo_article87_3.png": { caption: "Mon hôte et sa meilleure amie", alt: "Mon hôte et sa meilleure amie" },
    "photo_article89_1.png": {
        caption: "Des paysages de films dans le désert de Tatacoa",
        alt: "Des paysages de films dans le désert de Tatacoa",
    },
    "photo_article90_1.png": { caption: "Captivé par le moment présent", alt: "Captivé par le moment présent" },
    "photo_article91_1.png": { caption: "Un moment calme sur la route", alt: "Un moment calme sur la route" },
    "photo_article92_3.png": { caption: "Souvenir de temps anciens", alt: "Souvenir de temps anciens" },
    "photo_article93_1.png": { caption: "Rencontre surprise sur la route", alt: "Rencontre surprise sur la route." },
    "photo_article94_2.png": { caption: "Un temple construit dans la terre", alt: "Un temple construit dans la terre" },
    "photo_article97_1.png": { caption: "Un lieu de picnic parfait", alt: "Un lieu de picnic parfait" },
    "photo_article98_4.png": { caption: "Fleur typique du paramo à haute altitude", alt: "Fleur typique du paramo à haute altitude" },
    "photo_article98_9.png": { caption: "Pour changer, un chemin de terre", alt: "Pour changer, un chemin de terre" },
    "photo_article98_12.png": { caption: "Un beau specimen", alt: "Un beau specimen" },
    "photo_article99_1.png": { caption: "Une bonne équipe", alt: "Une bonne équipe" },
    "photo_article99_5.png": {
        caption: "Une maison dont on ne peut pas douter de l’hospitalité",
        alt: "Une maison dont on ne peut pas douter de l’hospitalité",
    },
    "photo_article100_1.png": { caption: "Sanctuaire de las Lajas", alt: "Sanctuaire de las Lajas" },
    // Ninth pages gallery
    "photo_article101_2.png": { caption: "Vue imprenable sur le Cuicocha et ses îles", alt: "Vue imprenable sur le Cuicocha et ses îles" },
    "photo_article101_8.png": { caption: "Le fameux Taita", alt: "Le fameux Taita" },
    "photo_article102_4.png": {
        caption: "Sans doute l’endroit de Quito que j’ai le plus apprécié",
        alt: "Sans doute l’endroit de Quito que j’ai le plus apprécié",
    },
    "photo_article105_1.png": { caption: "Le garage qui me remet en selle", alt: "Le garage qui me remet en selle" },
    "photo_article106_2.png": { caption: "Je rejoins enfin l’océan Pacifique", alt: "Je rejoins enfin l’océan Pacifique" },
    "photo_article107_1.png": {
        caption: "Le combat quotidien des pécheurs de Puerto Lopez",
        alt: "Le combat quotidien des pécheurs de Puerto Lopez",
    },
    "photo_article108_1.png": { caption: "La première baleine!", alt: "La première baleine!" },
    "photo_article108_2.png": {
        caption: "Les fous à pattes bleus de l’île de la plata",
        alt: "Les fous à pattes bleus de l’île de la plata",
    },
    "photo_article108_8.png": {
        caption: "Statut représentant les origines de Puerto Lopez",
        alt: "Statut représentant les origines de Puerto Lopez",
    },
    "photo_article112_1.png": { caption: "Le dîner du jour manque de variété.", alt: "Le dîner du jour manque de variété." },
    "photo_article113_1.png": {
        caption: "Les derniers coups de pédale ont été donnés",
        alt: "Les derniers coups de pédale ont été donnés",
    },
    "photo_article114_1.png": {
        caption: "Les berges sauvages dans le centre de Cuenca",
        alt: "Les berges sauvages dans le centre de Cuenca",
    },
    "photo_article114_4.png": { caption: "Le parc des Cajas", alt: "Le parc des Cajas" },
    // Tenth pages gallery
    "photo_article116_1.png": { caption: "Toujours le temps d’aller au marché", alt: "Toujours le temps d’aller au marché" },
    "photo_article117_3.png": { caption: "Lieu principal pour passer le temps", alt: "Lieu principal pour passer le temps" },
    "photo_article117_4.png": { caption: "Notre maison a LLucanayacu", alt: "Notre maison a LLucanayacu" },
    "photo_article118_1.png": { caption: "Représentation graphique de l’ayahuasca", alt: "Représentation graphique de l’ayahuasca" },
    "photo_article119_1.png": {
        caption: "Notre arrivée à Iquitos dans une eau pleine de dauphin rose",
        alt: "Notre arrivée à Iquitos dans une eau pleine de dauphin rose",
    },
    "photo_article120_6.png": { caption: "La pure amazonie", alt: "La pure amazonie" },
    "photo_article125_5.png": { caption: "Ma compagnie du soir", alt: "Ma compagnie du soir" },
    "photo_article125_11.png": { caption: "J’arrive enfin à la cité perdue", alt: "J’arrive enfin à la cité perdue" },
    "photo_article125_14.png": { caption: "Les fameuses terrasses en escaliers", alt: "Les fameuses terrasses en escaliers" },
    "photo_article126_2.png": { caption: "Les ruines d’Ollantaytambo", alt: "Les ruines d’Ollantaytambo" },
    "photo_article126_4.png": { caption: "Le village vue depuis les ruines", alt: "Le village vue depuis les ruines" },
    "photo_article126_6.png": { caption: "Les fameuses montagnes de couleurs", alt: "Les fameuses montagnes de couleurs" },
    "photo_article127_1.png": { caption: "Sur le chemin du Macchu Picchu", alt: "Sur le chemin du Macchu Picchu" },
    "photo_article127_2.png": { caption: "Le fameux", alt: "Le fameux" },
    "photo_article128_6.png": { caption: "Un anniversaire sur l’île de la lune", alt: "Un anniversaire sur l’île de la lune" },
    "photo_article128_9.png": { caption: "Une belle connexion", alt: "Une belle connexion" },
    // Eleventh pages gallery
    "photo_article129_1.png": { caption: "Le marché des sorcières", alt: "Le marché des sorcières" },
    "photo_article130_1.png": {
        caption: "Le plateau bolivien à plus de 4000m d’altitude",
        alt: "Le plateau bolivien à plus de 4000m d’altitude",
    },
    "photo_article131_8.png": {
        caption: "On a pas une opportunité comme ça tous les jours...",
        alt: "On a pas une opportunité comme ça tous les jours...",
    },
    "photo_article131_10.png": { caption: "Fuyant les dinosaures du désert", alt: "Fuyant les dinosaures du désert" },
    "photo_article132_1.png": { caption: "Drôle de menace", alt: "Drôle de menace" },
    "photo_article132_4.png": { caption: "Une vespa mexicaine ambitieuse", alt: "Une vespa mexicaine ambitieuse" },
    "photo_article134_1.png": { caption: "Les cactus du farwest", alt: "Les cactus du farwest" },
    // Twelth pages gallery
    "photo_article134_2.png": {
        caption: "Les montagnes de couleurs Argentine, l’Hornocal",
        alt: "Les montagnes de couleurs Argentine, l’Hornocal",
    },
    "photo_article135_1.png": { caption: "Le salar de Jujuy ou Salinas grandes", alt: "Le salar de Jujuy ou Salinas grandes" },
    "photo_article136_1.png": { caption: "La photo représente bien le chapitre", alt: "La photo représente bien le chapitre" },
    "photo_article137_1.png": {
        caption: "Notre campement que nous ne voulions plus quitter",
        alt: "Notre campement que nous ne voulions plus quitter",
    },
    "photo_article137_2.png": { caption: "Un maté en el amphiteatro", alt: "Un maté en el amphiteatro" },
    "photo_article138_1.png": { caption: "Un essai macro", alt: "Un essai macro" },
    "photo_article140_2.png": { caption: "Un aurevoir plein d’émotions", alt: "Un aurevoir plein d’émotions" },
};

export default photoMeta;
