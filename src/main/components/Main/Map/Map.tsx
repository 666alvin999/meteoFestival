import styled from "styled-components";
import {Map, MapRef, Marker, NavigationControl} from "react-map-gl";
import {useEffect, useState} from "react";
import {SearchBar} from "../SearchBar";
import mapboxgl, {PopupOptions} from "mapbox-gl";

type Festival = {
    name: string,
    departement: string,
    city: string,
    address: string,
    website: string,
    festivalType: string,
    period: string,
    geocoding: {
        lat: number,
        lon: number
    }
    temperature?: number,
    weather?: string
}

const MapWrapper = styled.div`
  background-color: #6b9ac4;
  grid-row: 2/3;
`;

const PersonalMap = (): JSX.Element => {

    const [mapRef, setMapRef] = useState<MapRef | null>(null);
    const [festivals, setFestivals] = useState<Array<Festival>>([]);

    const componentDidMount = async () => {
        const response = await fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=5");

        if (response.ok) {
            const responseData = await response.json();

            const tempArray: Array<Festival> = [];

            console.log(responseData);

            for (let i = 0; i < responseData.results.length; i++) {
                const weatherApiResponse = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${responseData.results[i].geocodage_xy.lat}&lon=${responseData.results[i].geocodage_xy.lon}&lang=fr&key=${process.env.REACT_APP_WEATHER_API_KEY}`)

                if (weatherApiResponse.ok) {
                    const weatherData = await weatherApiResponse.json();
                    const festival = {
                        name: responseData.results[i].nom_du_festival,
                        departement: responseData.results[i].departement_principal_de_deroulement,
                        city: responseData.results[i].commune_principale_de_deroulement,
                        address: responseData.results[i].adresse_postale,
                        website: responseData.results[i].site_internet_du_festival,
                        festivalType: responseData.results[i].discipline_dominante,
                        period: responseData.results[i].periode_principale_de_deroulement_du_festival,
                        geocoding: {
                            lat: responseData.results[i].geocodage_xy.lat,
                            lon: responseData.results[i].geocodage_xy.lon
                        },
                        temperature: weatherData.data[0].temp,
                        weather: weatherData.data[0].weather.description
                    };

                    tempArray.push(festival);
                }
            }
            setFestivals(tempArray);
        }
    }

    const createMarkers = () => {
        return festivals.map(festival => {
            const popup = new mapboxgl.Popup({
                offset: 20
            } as PopupOptions).setHTML(`
             <h2 style="font-size: 16px">${festival.name}</h2>
             <h3 style="font-size: 14px">${festival.festivalType}</h3>
             <p>${festival.city && festival.city}, ${festival.departement && festival.departement}</p>
             <p>${festival.address && festival.address}</p>
            ${festival.period && festival.period}
             <p>${festival.temperature && festival.temperature}°C - ${festival.weather && festival.weather}</p>
            `);

            return (
                <>
                    <Marker
                        style={{height: "2px"}}
                        color={"red"}
                        longitude={festival.geocoding.lon}
                        latitude={festival.geocoding.lat}
                        popup={popup}
                    />
                </>
            )
        })
    }

    useEffect(() => {
        componentDidMount()
    }, []);

    return (
        <>
            <MapWrapper style={{height: "93vh"}}>
                <Map
                    ref={(ref) => setMapRef(ref)}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN as string}
                    initialViewState={{
                        latitude: 42.8590,
                        longitude: 2.7,
                        zoom: 5.5
                    }}
                    mapStyle="mapbox://styles/666alvin999/clmsr5gad00ij01qndyoge8rd"
                >
                    <SearchBar map={mapRef}/>

                    {
                        createMarkers()
                    }

                    <NavigationControl/>
                </Map>
            </MapWrapper>
        </>
    );
}

export default PersonalMap