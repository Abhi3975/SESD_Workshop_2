"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class WeatherCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("weather <city>")
            .description("Gets the current weather for a specified city")
            .action(async (city) => {
            try {
                // 1. Get coordinates for the city using OpenStreetMap's Nominatim
                const geoResponse = await axios_1.default.get(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`, {
                    headers: { 'User-Agent': 'mycli-weather-command' }
                });
                if (!geoResponse.data || geoResponse.data.length === 0) {
                    console.error(`\nCould not find coordinates for '${city}'.\n`);
                    return;
                }
                const lat = geoResponse.data[0].lat;
                const lon = geoResponse.data[0].lon;
                const displayName = geoResponse.data[0].display_name.split(',')[0]; // Get just the main city name
                // 2. Fetch the weather from Open-Meteo
                const weatherResponse = await axios_1.default.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=celsius`);
                const temp = weatherResponse.data.current.temperature_2m;
                const code = weatherResponse.data.current.weather_code;
                // Basic weather code mapping (WMO weather interpretation codes)
                let conditions = "Clear";
                if (code >= 1 && code <= 3)
                    conditions = "Partly Cloudy";
                else if (code >= 45 && code <= 48)
                    conditions = "Foggy";
                else if (code >= 51 && code <= 67)
                    conditions = "Rainy";
                else if (code >= 71 && code <= 77)
                    conditions = "Snowy";
                else if (code >= 95)
                    conditions = "Thunderstorm";
                console.log(`\nWeather in ${displayName}:`);
                console.log(`Temperature: ${temp}°C`);
                console.log(`Conditions:  ${conditions}\n`);
            }
            catch (error) {
                console.error(`\nCould not fetch weather for '${city}'.\n`);
            }
        });
    }
}
module.exports = WeatherCommand;
