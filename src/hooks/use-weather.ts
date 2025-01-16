import type { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEY = {
    weather: (coordinates: Coordinates | null) => ["weather", coordinates] as const,
    forecast: (coordinates: Coordinates | null) => ["forecast", coordinates] as const,
    location: (coordinates: Coordinates | null) => ["location", coordinates] as const,
    search: (query: string) => ["search", query] as const, // Add this line
} as const;


export function useWeatherQuery(coordinates: Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.weather(coordinates ?? {lat:0,lon:0}),
        queryFn: () => coordinates?weatherAPI.getCurrentWeather(coordinates) : null,
        enabled: !!coordinates,
    })
}
export function useForecastQuery(coordinates: Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.forecast(coordinates ?? {lat:0,lon:0}),
        queryFn: () => coordinates?weatherAPI.getForecast(coordinates) : null,
        enabled: !!coordinates,
    })
}
export function useReverseGeocodeQuery(coordinates: Coordinates | null){
    return useQuery({
        queryKey: WEATHER_KEY.location(coordinates ?? {lat:0,lon:0}),
        queryFn: () => coordinates?weatherAPI.reverseGeocode(coordinates) : null,
        enabled: !!coordinates,
    })
}

export function useLocationSearch(query: string) {
    return useQuery({
        queryKey: WEATHER_KEY.search(query), // Now it works
        queryFn: () => weatherAPI.searchLocations(query),
        enabled: query.length >= 3,
    });
}
