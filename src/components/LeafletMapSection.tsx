import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useTranslation } from "react-i18next";
import { MapPin, Info, Search, Clock, Gauge } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "flag-icons/css/flag-icons.min.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useTheme } from "@/components/ui/use-theme";
import tripData from "../data/trip.json";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

type TripStep = {
    name: string;
    start_time: number;
    end_time: number | null;
    creation_time: number;
    location: {
        name: string;
        coordinates: number[];
    };
    weather_temperature: number;
};

type MapPoint = {
    id: string;
    name: string;
    locationName: string;
    coordinates: [number, number];
    type: string;
    date: string;
    temperature?: number;
};

// Transform trip data to map points
const transformTripDataToMapPoints = (tripData: { all_steps: TripStep[] }): MapPoint[] => {
    return tripData.all_steps
        .filter((step) => step.location && step.location.coordinates && step.location.coordinates.length === 2)
        .map((step, index) => {
            const date = new Date(step.start_time * 1000).toISOString().split("T")[0];
            const isFirst = index === 0;
            const isLast = index === tripData.all_steps.length - 1;

            return {
                id: `step-${index}`,
                name: step.name,
                locationName: step.location.name,
                coordinates: step.location.coordinates as [number, number],
                type: isFirst ? "start" : isLast ? "end" : "stop",
                date: date,
                temperature: step.weather_temperature,
            };
        });
};

const LeafletMapSection = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Array<{ label: string; x: number; y: number }>>([]);
    const [map, setMap] = useState<L.Map | null>(null);

    // Transform trip data to map points
    const mapPoints = useMemo(() => transformTripDataToMapPoints(tripData), []);

    // Create simple custom icons
    const createSimpleIcon = (type: string) => {
        const color = type === "start" ? "#22c55e" : type === "end" ? "#ef4444" : "#3b82f6";
        const size = type === "start" || type === "end" ? 18 : 12;
        const zIndex = type === "start" || type === "end" ? 1000 : 100;

        return L.divIcon({
            className: "simple-marker",
            html: `
                <div style="
                    width: ${size}px;
                    height: ${size}px;
                    background-color: ${color};
                    border: 2px solid white;
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                    z-index: ${zIndex};
                    position: relative;
                "></div>
            `,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
        });
    };

    // Get path coordinates for the polyline
    const pathCoordinates = mapPoints.map((point) => point.coordinates);

    // Determine transportation type based on step index and location
    const getTransportationType = (stepIndex: number, totalSteps: number) => {
        // First 25 steps: Sailing (Mediterranean)
        if (stepIndex < 26) return "sailboat";

        // Steps 25-40: Island exploration (walking)
        if (stepIndex < 40 && stepIndex >= 25) return "walking";

        // Steps 41: Land travel (sailboat)
        if (stepIndex === 40) return "sailboat";

        // Steps : Island exploration (walking)
        if (stepIndex < 44 && stepIndex > 40) return "walking";

        // Steps 44: Land travel (sailboat)
        if (stepIndex >= 44 && stepIndex <= 45) return "sailboat";

        // Steps : Island exploration (walking)
        if (stepIndex > 45 && stepIndex <= 47) return "walking";

        // Steps 48: Land travel (sailboat)
        if (stepIndex >= 48 && stepIndex <= 56) return "sailboat";

        // Steps : Island exploration (walking)
        if (stepIndex > 56 && stepIndex <= 59) return "walking";

        // Steps 60: Land travel (cycling)
        if (stepIndex >= 60 && stepIndex <= 99) return "bicycle";

        // Steps 100: Land travel (bus)
        if (stepIndex === 100) return "bus";

        // Steps 100: Land travel (cycling)
        if (stepIndex > 100 && stepIndex <= 111) return "bicycle";

        // Steps 112: Land travel (bus)
        if (stepIndex >= 112 && stepIndex <= 116) return "bus";

        // Steps 116-120: Ferry travel
        if (stepIndex > 115 && stepIndex <= 118) return "ferry";

        // Steps 112: Land travel (bus)
        if (stepIndex >= 118 && stepIndex <= 122) return "bus";

        // Steps : Island exploration (walking)
        if (stepIndex === 123) return "walking";

        // Steps 123: Land travel (bus)
        if (stepIndex >= 123 && stepIndex <= 136) return "bus";

        // Step 137: Plane travel
        if (stepIndex === 137) return "plane";

        // Step 138: Bus travel
        if (stepIndex === 138) return "bus";

        // Default to arrow for remaining steps
        return "arrow";
    };

    // Create different icons based on transportation type
    const createTransportIcon = (type: string, bearing: number) => {
        const size = 16;

        switch (type) {
            case "sailboat":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg) scaleX(-1);
                            rotate: 90deg;
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">⛵</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            case "bicycle":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            rotate: 90deg;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">🚴</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            case "walking":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            rotate: 90deg;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">🚶</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            case "bus":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            rotate: 90deg;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">🚌</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            case "ferry":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            rotate: 90deg;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">⛴️</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            case "plane":
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: ${size}px;
                            height: ${size}px;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                            display: flex;
                            rotate: 90deg;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                        ">✈️</div>
                    `,
                    iconSize: [size, size],
                    iconAnchor: [size / 2, size / 2],
                });

            default: // arrow
                return L.divIcon({
                    className: "transport-marker",
                    html: `
                        <div style="
                            width: 0;
                            height: 0;
                            border-left: 6px solid transparent;
                            border-right: 6px solid transparent;
                            border-bottom: 10px solid #3b82f6;
                            transform: rotate(${bearing}deg);
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
                        "></div>
                    `,
                    iconSize: [12, 12],
                    iconAnchor: [6, 5],
                });
        }
    };

    // Create transport markers between each consecutive dot
    const createTransportMarkers = (coordinates: [number, number][]) => {
        const markers: JSX.Element[] = [];

        for (let i = 0; i < coordinates.length - 1; i++) {
            const current = coordinates[i];
            const next = coordinates[i + 1];

            if (current && next) {
                // Calculate bearing between points
                const lat1 = (current[0] * Math.PI) / 180;
                const lat2 = (next[0] * Math.PI) / 180;
                const deltaLon = ((next[1] - current[1]) * Math.PI) / 180;

                const y = Math.sin(deltaLon) * Math.cos(lat2);
                const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon);
                const bearing = (Math.atan2(y, x) * 180) / Math.PI;

                // Calculate position for marker (midpoint between current and next)
                const midLat = (current[0] + next[0]) / 2;
                const midLon = (current[1] + next[1]) / 2;

                // Determine transportation type
                const transportType = getTransportationType(i, coordinates.length);

                markers.push(
                    <Marker key={`transport-${i}`} position={[midLat, midLon]} icon={createTransportIcon(transportType, bearing)} />
                );
            }
        }

        return markers;
    };

    // Geocoding functionality
    const provider = useMemo(() => new OpenStreetMapProvider(), []);

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;

        try {
            const results = await provider.search({ query: searchQuery });
            setSearchResults(results);
        } catch (error) {
            console.error("Geocoding error:", error);
        }
    };

    const handleSearchResult = (result: { label: string; x: number; y: number }) => {
        if (map) {
            map.setView([result.y, result.x], 10);
            setSearchQuery(result.label);
            setSearchResults([]);
        }
    };

    return (
        <section className='py-2 bg-gradient-radial from-white/80 via-white/70 to-white/90 dark:from-primary/10 dark:via-primary/5 dark:to-black/95'>
            <div className='w-full max-w-7xl mx-auto px-6'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                        {t("map.heading")}
                    </h2>
                    <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto'>{t("map.subtitle")}</p>
                </div>

                <div className='relative'>
                    {/* Search Input */}
                    <div className='mb-4 flex gap-2 justify-center'>
                        <div className='relative'>
                            <input
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                                placeholder='Search for a location...'
                                className='px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64'
                            />
                            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
                        </div>
                        <button
                            onClick={handleSearch}
                            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
                            Search
                        </button>
                    </div>

                    {/* Search Results */}
                    {searchResults.length > 0 && (
                        <div className='mb-4 max-w-md mx-auto'>
                            <div className='bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-48 overflow-y-auto'>
                                {searchResults.map((result, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSearchResult(result)}
                                        className='w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0'>
                                        <div className='font-medium text-gray-900 dark:text-gray-100'>{result.label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Map Container */}
                    <div className='bg-white dark:bg-gray-900 w-3/4 mx-auto rounded-2xl shadow-2xl overflow-hidden border border-border'>
                        <div className='h-[500px] w-full'>
                            <MapContainer
                                center={[10, -60]}
                                zoom={3}
                                style={{ height: "100%", width: "100%" }}
                                zoomControl={true}
                                scrollWheelZoom={true}
                                doubleClickZoom={true}
                                dragging={true}
                                ref={setMap}>
                                {/* Tile Layer */}
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                />

                                {/* Journey Path */}
                                <Polyline
                                    positions={pathCoordinates}
                                    pathOptions={{
                                        color: "#3b82f6",
                                        weight: 2,
                                        opacity: 0.7,
                                        dashArray: "5, 5",
                                    }}
                                />

                                {/* Transport Markers */}
                                {createTransportMarkers(pathCoordinates)}

                                {/* Map Points */}
                                {mapPoints.map((point) => (
                                    <Marker key={point.id} position={point.coordinates} icon={createSimpleIcon(point.type)}>
                                        <Popup>
                                            <div className='p-1'>
                                                <h3 className='font-bold text-lg'>{point.name}</h3>
                                                <p className='text-sm text-gray-600'>
                                                    <strong>{t("map.details.date")}:</strong> {point.date}
                                                </p>
                                                <p className='text-sm text-gray-500 italic'>
                                                    <strong>{t("map.details.location")}:</strong> {point.locationName}
                                                </p>
                                                <p className='text-sm text-gray-500 italic'>
                                                    <strong>{t("map.details.coordinates")}:</strong>{" "}
                                                    {Math.abs(point.coordinates[0]).toFixed(2)}°{point.coordinates[0] >= 0 ? "N" : "S"},{" "}
                                                    {Math.abs(point.coordinates[1]).toFixed(2)}°{point.coordinates[1] >= 0 ? "E" : "W"}
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className='mt-6 flex flex-wrap justify-center gap-6 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full bg-green-500'></div>
                            <span>{t("map.legend.start")}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full bg-blue-500'></div>
                            <span>{t("map.legend.stops")}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full bg-red-500'></div>
                            <span>{t("map.legend.end")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeafletMapSection;
