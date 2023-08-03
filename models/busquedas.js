const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'madrid', 'San Jose'];

    constructor() {
        // TODO: leer DB si es que existe
    }

    get paramsMapbox() {
        return {
            'language': 'es',
            'access_token': 'pk.eyJ1IjoiYnQtMTExIiwiYSI6ImNsa3VlbmcwdDAzYzgzZXBpb3dwd2E2MnIifQ.lCq-219PfuOj0Jn3lVgVew',
            'limit': 5
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
            console.log(resp.data);

            return []
            
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;