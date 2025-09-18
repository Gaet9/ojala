import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    fr: {
        translation: {
            hero: {
                title: "OJALÀ",
                tagline:
                    "Découvrez l'histoire d'un voyage à la voile à travers l'Atlantique et les Caraïbes, puis à vélo dans les Andes d'Amérique du Sud.",
                cta: "Obtenez votre exemplaire",
                rating: "Note : 5/5",
                availability: "Disponible maintenant en livre et ebook",
                new: "Nouveauté",
            },
            gallery: {
                heading: "Illustrations",
                defaultTitle: "Illustrations",
                defaultSubtitle: "Photos pour accompagner la lecture du livre",
                pages: {
                    0: { title: "Traversée de l'Atlantique", subtitle: "Du 11/11/22 au 25/12/22. \nPages 1-32" },
                    1: { title: "Guadeloupe", subtitle: "Du 26/12/22 au 08/02/23. \nPages 33-52." },
                    2: { title: "Antigua", subtitle: "Du 19/02/23 au 22/02/23. \nPages 53-58." },
                    3: { title: "Kundalini - Dominique - Martinique", subtitle: "Du 27/02/23 au 24/03/23. \nPages 59-68." },
                    4: { title: "Traversée de la mer des Caraïbes", subtitle: "Du 28/03/23 au 08/04/23. \nPages 69-75." },
                    5: { title: "Finca colombienne", subtitle: "Du 12/04/23 au 17/05/23. \nPages 76-82." },
                    6: { title: "Traversée de la Colombie en Vélo, partie 1", subtitle: "Du 19/05/23 au 25/06/23. \nPages 83-102." },
                    7: { title: "Traversée de la Colombie en Vélo, partie 2", subtitle: "Du 07/07/23 au 27/08/23. \nPages 103-132." },
                    8: { title: "Traversée de l'Équateur en Vélo", subtitle: "Du 28/08/23 au 12/11/23. \nPages 133-152." },
                    9: { title: "Pérou - Amazonie - Cusco", subtitle: "Du 23/11/23 au 05/02/24. \nPages 153-164." },
                    10: { title: "Bolivie", subtitle: "Du 13/02/24 au 25/02/24. \nPages 165-166." },
                    11: { title: "Argentine", subtitle: "Du 03/03/24 au 31/03/24. \nPages 167-168." },
                },
            },
            itinerary: {
                heading: "Itinéraire du voyage",
                subtitle: "Quatre étapes clés pour visualiser le voyage",
            },
            stats: {
                heading: "Approuvé par les lecteurs",
                subheading: "Rejoignez les lecteurs passionnés par les voyages et l'aventure.",
                sold: "Exemplaires vendus",
                rating: "Note moyenne",
                reviews: "Avis",
            },
            footer: {
                ready: "Prêt pour le voyage ?",
                pitch: "Rejoignez les lecteurs aventureux qui ont déjà découvert ce voyage. Votre aventure commence ici !",
                cta: "Obtenez votre exemplaire",
                contact: "Contactez l'auteur",
                rights: "© {{year}} Tous droits réservés.",
            },
            notFound: {
                title: "404",
                message: "Oops! Page non trouvée",
                back: "Retour à la page d'accueil",
            },
        },
    },
    en: {
        translation: {
            hero: {
                title: "OJALÀ",
                tagline:
                    "Discover the story of a journey by sail across the Atlantic and the Caribbean, then by bike in the Andes of South America.",
                cta: "Get your copy",
                rating: "Rating: 5/5",
                availability: "Available now in book and ebook",
                new: "New",
            },
            gallery: {
                heading: "Illustrations",
                defaultTitle: "Illustrations",
                defaultSubtitle: "Photos to accompany the reading of the book",
                pages: {
                    0: { title: "Atlantic crossing", subtitle: "From 11/11/22 to 12/25/22. \nPages 1-32" },
                    1: { title: "Guadeloupe", subtitle: "From 12/26/22 to 02/08/23. \nPages 33-52." },
                    2: { title: "Antigua", subtitle: "From 02/19/23 to 02/22/23. \nPages 53-58." },
                    3: { title: "Kundalini - Dominica - Martinique", subtitle: "From 02/27/23 to 03/24/23. \nPages 59-68." },
                    4: { title: "Caribbean Sea crossing", subtitle: "From 03/28/23 to 04/08/23. \nPages 69-75." },
                    5: { title: "Colombian finca", subtitle: "From 04/12/23 to 05/17/23. \nPages 76-82." },
                    6: { title: "Crossing Colombia by bike, part 1", subtitle: "From 05/19/23 to 06/25/23. \nPages 83-102." },
                    7: { title: "Crossing Colombia by bike, part 2", subtitle: "From 07/07/23 to 08/27/23. \nPages 103-132." },
                    8: { title: "Crossing Ecuador by bike", subtitle: "From 08/28/23 to 11/12/23. \nPages 133-152." },
                    9: { title: "Peru - Amazon - Cusco", subtitle: "From 11/23/23 to 02/05/24. \nPages 153-164." },
                    10: { title: "Bolivia", subtitle: "From 02/13/24 to 02/25/24. \nPages 165-166." },
                    11: { title: "Argentina", subtitle: "From 03/03/24 to 03/31/24. \nPages 167-168." },
                },
            },
            itinerary: {
                heading: "Travel itinerary",
                subtitle: "Four key steps to visualize the journey",
                items: {
                    complete: {
                        caption: "Complete itinerary. \nFrom 11/11/22 to 03/31/24.",
                        alt: "Complete itinerary. \nFrom 11/11/22 to 03/31/24.",
                    },
                    caribbean: {
                        caption: "Caribbean itinerary. \nFrom 12/24/22 to 03/28/23. \nPages 32-74",
                        alt: "Caribbean itinerary. From 12/24/22 to 03/28/23. Pages 32-74",
                    },
                    colombia: {
                        caption: "Itinerary in Colombia and Ecuador. \nFrom 03/28/23 to 11/12/23. \nPages 75-152",
                        alt: "Itinerary in Colombia and Ecuador. From 03/28/23 to 11/12/23. Pages 75-152",
                    },
                    sa: {
                        caption: "Itinerary in Peru, Bolivia and Argentina. \nFrom 11/12/23 to 03/31/24. \nPages 153-169",
                        alt: "Itinerary in Peru, Bolivia and Argentina. From 11/12/23 to 03/31/24. Pages 153-169",
                    },
                },
            },
            stats: {
                heading: "Trusted by readers",
                subheading: "Join readers passionate about travel and adventure.",
                sold: "Copies sold",
                rating: "Average rating",
                reviews: "Reviews",
            },
            footer: {
                ready: "Ready for the journey?",
                pitch: "Join adventurous readers who have already discovered this travelogue. Your adventure starts here!",
                cta: "Get your copy",
                contact: "Contact the author",
                rights: "© {{year}} All rights reserved.",
            },
            notFound: {
                title: "404",
                message: "Oops! Page not found",
                back: "Back to home",
            },
        },
    },
    es: {
        translation: {
            hero: {
                title: "OJALÀ",
                tagline:
                    "Descubre la historia de un viaje a vela por el Atlántico y el Caribe, y luego en bicicleta por los Andes de Sudamérica.",
                cta: "Consigue tu ejemplar",
                rating: "Valoración: 5/5",
                availability: "Disponible ahora en libro y ebook",
                new: "Nuevo",
            },
            gallery: {
                heading: "Ilustraciones",
                defaultTitle: "Ilustraciones",
                defaultSubtitle: "Fotos para acompañar la lectura del libro",
                pages: {
                    0: { title: "Travesía del Atlántico", subtitle: "Del 11/11/22 al 25/12/22. \nPáginas 1-32" },
                    1: { title: "Guadalupe", subtitle: "Del 26/12/22 al 08/02/23. \nPáginas 33-52." },
                    2: { title: "Antigua", subtitle: "Del 19/02/23 al 22/02/23. \nPáginas 53-58." },
                    3: { title: "Kundalini - Dominica - Martinica", subtitle: "Del 27/02/23 al 24/03/23. \nPáginas 59-68." },
                    4: { title: "Travesía del mar Caribe", subtitle: "Del 28/03/23 al 08/04/23. \nPáginas 69-75." },
                    5: { title: "Finca colombiana", subtitle: "Del 12/04/23 al 17/05/23. \nPáginas 76-82." },
                    6: { title: "Cruce de Colombia en bici, parte 1", subtitle: "Del 19/05/23 al 25/06/23. \nPáginas 83-102." },
                    7: { title: "Cruce de Colombia en bici, parte 2", subtitle: "Del 07/07/23 al 27/08/23. \nPáginas 103-132." },
                    8: { title: "Cruce de Ecuador en bici", subtitle: "Del 28/08/23 al 12/11/23. \nPáginas 133-152." },
                    9: { title: "Perú - Amazonía - Cusco", subtitle: "Del 23/11/23 al 05/02/24. \nPáginas 153-164." },
                    10: { title: "Bolivia", subtitle: "Del 13/02/24 al 25/02/24. \nPáginas 165-166." },
                    11: { title: "Argentina", subtitle: "Del 03/03/24 al 31/03/24. \nPáginas 167-168." },
                },
            },
            itinerary: {
                heading: "Itinerario del viaje",
                subtitle: "Cuatro etapas clave para visualizar el recorrido",
                items: {
                    complete: {
                        caption: "Itinerario completo. \nDel 11/11/22 al 31/03/24.",
                        alt: "Itinerario completo. \nDel 11/11/22 al 31/03/24.",
                    },
                    caribbean: {
                        caption: "Itinerario del Caribe. \nDel 24/12/22 al 28/03/23. \nPáginas 32-74",
                        alt: "Itinerario del Caribe. Del 24/12/22 al 28/03/23. Páginas 32-74",
                    },
                    colombia: {
                        caption: "Itinerario en Colombia y Ecuador. \nDel 28/03/23 al 12/11/23. \nPáginas 75-152",
                        alt: "Itinerario en Colombia y Ecuador. Del 28/03/23 al 12/11/23. Páginas 75-152",
                    },
                    sa: {
                        caption: "Itinerario en Perú, Bolivia y Argentina. \nDel 12/11/23 al 31/03/24. \nPáginas 153-169",
                        alt: "Itinerario en Perú, Bolivia y Argentina. Del 12/11/23 al 31/03/24. Páginas 153-169",
                    },
                },
            },
            stats: {
                heading: "Aprobado por los lectores",
                subheading: "Únete a lectores apasionados por los viajes y la aventura.",
                sold: "Ejemplares vendidos",
                rating: "Valoración media",
                reviews: "Reseñas",
            },
            footer: {
                ready: "¿Listo para el viaje?",
                pitch: "Únete a lectores aventureros que ya han descubierto este cuaderno de viaje. ¡Tu aventura comienza aquí!",
                cta: "Consigue tu ejemplar",
                contact: "Contacta al autor",
                rights: "© {{year}} Todos los derechos reservados.",
            },
            notFound: {
                title: "404",
                message: "¡Ups! Página no encontrada",
                back: "Volver al inicio",
            },
        },
    },
} as const;

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "fr",
        supportedLngs: ["en", "es", "fr"],
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            lookupLocalStorage: "i18nextLng",
            caches: ["localStorage"],
        },
        interpolation: { escapeValue: false },
    });

export default i18n;
