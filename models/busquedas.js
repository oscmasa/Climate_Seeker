const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'madrid', 'San Jose'];

    constructor() {
        // TODO: leer DB si es que existe
    }

    get paramsMapbox() {
        return {
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5
        }
    }

    get paramsOpenWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async ciudad( lugar = '' ) {

        try {
            // Lugar de la peticion
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
            
        } catch (error) {
            return [];
        }
    }

    async climaLugar( lat, lon ) {

        try{

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenWeather, lat,lon }
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                temp: main.temp,
                max: main.temp_max,
                min: main.temp_min
            }

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Busquedas;