export const checkWeather = async (lat: number, lon: number) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}/?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}${import.meta.env.VITE_WEATHER_API_UNITS}`);
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error("Error fetching weather data: " + error);
        
    }

}