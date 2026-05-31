export default {
    nav: {
        book: "Libro",
        stats: "Números",
        map: "Mapa",
        photos: "Fotos",
        contact: "Contacto",
    },
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
    map: {
        heading: "Mapa del viaje",
        subtitle: "Sigue la ruta completa a través del Atlántico y Sudamérica",
        legend: {
            start: "Inicio",
            stops: "Paradas",
            end: "Final",
        },
        stats: {
            stops: "Paradas",
            countries: "Países",
            days: "Días",
            distance: "Km",
        },
        details: {
            date: "Fecha",
            coordinates: "Coordenadas",
            description: "Descripción",
            location: "Ubicación",
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
        customerReviews: "Reseñas de los lectores",
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
} as const;
