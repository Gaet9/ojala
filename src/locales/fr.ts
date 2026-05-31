export default {
    nav: {
        book: "Livre",
        stats: "Chiffres",
        map: "Carte",
        photos: "Photos",
        contact: "Contact",
    },
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
    map: {
        heading: "Carte du voyage",
        subtitle: "Suivez le parcours complet à travers l'Atlantique et l'Amérique du Sud",
        legend: {
            start: "Départ",
            stops: "Étapes",
            end: "Arrivée",
        },
        stats: {
            stops: "Étapes",
            countries: "Pays",
            days: "Jours",
            distance: "Km",
        },
        details: {
            date: "Date",
            coordinates: "Coordonnées",
            description: "Description",
            location: "Lieu",
        },
    },
    itinerary: {
        heading: "Itinéraire du voyage",
        subtitle: "Quatre étapes clés pour visualiser le voyage",
        items: {
            complete: {
                caption: "Itinéraire complet. \nDu 11/11/22 au 31/03/24.",
                alt: "Itinéraire complet. Du 11/11/22 au 31/03/24.",
            },
            caribbean: {
                caption: "Itinéraire des Caraïbes. \nDu 24/12/22 au 28/03/23. \nPages 32-74",
                alt: "Itinéraire des Caraïbes. Du 24/12/22 au 28/03/23. Pages 32-74",
            },
            colombia: {
                caption: "Itinéraire en Colombie et Équateur. \nDu 28/03/23 au 12/11/23. \nPages 75-152",
                alt: "Itinéraire en Colombie et Équateur. Du 28/03/23 au 12/11/23. Pages 75-152",
            },
            sa: {
                caption: "Itinéraire au Pérou, Bolivie et Argentine. \nDu 12/11/23 au 31/03/24. \nPages 153-169",
                alt: "Itinéraire au Pérou, Bolivie et Argentine. Du 12/11/23 au 31/03/24. Pages 153-169",
            },
        },
    },
    stats: {
        heading: "Approuvé par les lecteurs",
        subheading: "Rejoignez les lecteurs passionnés par les voyages et l'aventure.",
        sold: "Exemplaires vendus",
        rating: "Note moyenne",
        reviews: "Avis",
        customerReviews: "Avis des lecteurs",
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
} as const;
