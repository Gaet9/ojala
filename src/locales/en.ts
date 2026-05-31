export default {
    nav: {
        book: "Book",
        stats: "Stats",
        map: "Map",
        photos: "Photos",
        contact: "Contact",
    },
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
    map: {
        heading: "Journey Map",
        subtitle: "Follow the complete route across the Atlantic and South America",
        legend: {
            start: "Start",
            stops: "Stops",
            end: "End",
        },
        stats: {
            stops: "Stops",
            countries: "Countries",
            days: "Days",
            distance: "Km",
        },
        details: {
            date: "Date",
            coordinates: "Coordinates",
            description: "Description",
            location: "Location",
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
        customerReviews: "Customer reviews",
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
} as const;
