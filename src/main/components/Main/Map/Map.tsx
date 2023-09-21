import styled from "styled-components";
import {Map, Marker, NavigationControl} from "react-map-gl";
import {useEffect, useState} from "react";



type Festival = {
    name: string,
    region: string,
    departement: string,
    city: string,
    address: string,
    website: string,
    festivalType: string,
    period: string,
    geocoding: Array<number>
}

const MapWrapper = styled.div`
  height: 600px;
`;

const PersonalMap = (props): JSX.Element => {

    const viewPort = {
        latitude: 48.8590,
        longitude: 2.3039,
        zoom: 4
    }

    const [festivals, setFestivals] = useState<Array<Festival>>([])

    const componentDidMount = async () => {
        const response = await fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100");

        if (response.ok) {
            const responseData = await response.json();

            const temp: Array<Festival> = responseData.results.map(data => {
                const festival: Festival = {
                    name: data.nom_du_festival,
                    region: data.region_principale_de_deroulement,
                    departement: data.departement_principal_de_deroulement,
                    city: data.commune_principale_de_deroulement,
                    address: data.adresse_postale,
                    website: data.site_internet_du_festival,
                    festivalType: data.discipline_dominante,
                    period: data.periode_principale_de_deroulement_du_festival,
                    geocoding: [data.geocodage_xy.lat, data.geocodage_xy.lon]
                }
                return festival;
            });

            setFestivals(temp);
        }
    }

    useEffect(() => {
            componentDidMount();
        },
        []);

    return (
        <>
            <MapWrapper>
                <Map
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN as string}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    initialViewState={{...viewPort}}
                    mapStyle="mapbox://styles/666alvin999/clmsr5gad00ij01qndyoge8rd"
                >
                    {
                        festivals.map(festival => <Marker longitude={festival.geocoding[1]} latitude={festival.geocoding[0]}/>)
                    }
                    <NavigationControl/>
                </Map>
            </MapWrapper>

        </>
    );
}

export default PersonalMap