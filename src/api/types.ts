
export interface Coordinates {
    lat: number
    lon: number
}

export interface WeatherCondition {
    id: number
    main: string
    description: string
    icon: string
}

export interface WeatherData {
    name: string,
    coord: Coordinates
    weather: WeatherCondition[]
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
}

export interface ForecastData {
    list: Array<{
        dt: number
        main: WeatherData["main"]
        weather: WeatherData["weather"]
        wind: WeatherData["wind"]
        clouds: WeatherData["clouds"]
        dt_txt: string
    }>
    city: {
        name: string
        country: string
        sunrise: number
        sunset: number
    }
}

export interface GeocodingResponse {
    name: string
    local_name?: Record<string, string> 
    lat: number
    lon: number
    country: string
    state?: string
}