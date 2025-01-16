import { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoloactionState {
    coordinates: Coordinates | null;
    error: string | null;
    isLoading: boolean;
}

export function useGeolocation() {
    const [locationData, setLocationData] = useState<GeoloactionState>({
        coordinates: null,
        error: null,
        isLoading: true,
    })

    const getLocation = () => {
        setLocationData((prev)=>({...prev, isLoading: true, error: null}))
        if(!navigator.geolocation) {
            setLocationData({coordinates: null, isLoading: false, error: "Geolocation is not supported by your browser"})
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocationData({
                    error:null,
                    isLoading: false,
                    coordinates: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                    }
                })
            },
            (error) => {
                let errorMessage: string;
                switch (error.code){
                    case error.PERMISSION_DENIED:
                        errorMessage = 
                            "Location permission denied. Please enable location access."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "Loaction information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "Location request timeout.";
                        break;
                    default:
                        errorMessage = "An unknown error occured."
                }
                setLocationData({
                    coordinates: null,
                    error: errorMessage,
                    isLoading: false
                })
            },{
                enableHighAccuracy: true,
                timeout:5000,
                maximumAge:0
            }
        )
    }
    useEffect(() => {
        getLocation();
    }, [])

    return {
        ...locationData,
        getLocation
    }
}