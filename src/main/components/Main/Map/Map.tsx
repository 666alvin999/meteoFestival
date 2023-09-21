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
    geocoding: Array<number>
}

const MapWrapper = styled.div`
  height: 100vw;
`;

const PersonalMap = (props): JSX.Element => {

    const [mapRef, setMapRef] = useState<MapRef | null>(null);
    const [festivals, setFestivals] = useState<Array<Festival>>([]);

    const componentDidMount = async () => {
        const response = await fetch("https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/festivals-global-festivals-_-pl/records?limit=100");

        if (response.ok) {
            const responseData = await response.json();

            const temp: Array<Festival> = responseData.results.map(data => {
                const festival: Festival = {
                    name: data.nom_du_festival,
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
    }, []);

    return (
        <>
            <MapWrapper>
                <Map
                    ref={(ref) => setMapRef(ref)}
                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN as string}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    initialViewState={{
                        latitude: 42.8590,
                        longitude: 2.7,
                        zoom: 5.5
                    }}
                    mapStyle="mapbox://styles/666alvin999/clmsr5gad00ij01qndyoge8rd"
                >
                    <SearchBar map={mapRef}/>
                    {
                        festivals.map(festival => {
                            const popup = new mapboxgl.Popup({
                                offset: 20
                            } as PopupOptions).setHTML(`
                             <h2 style="font-size: 16px">${festival.name}</h2>
                             <h3 style="font-size: 14px">${festival.festivalType}</h3>
                             <p>${festival.city || ""}, ${festival.departement || ""}</p>
                             <p>${festival.address || ""}</p>
                            ${festival.period}
                            `);

                            return (
                                <>
                                    <Marker
                                        style={{height: "2px"}}
                                        color={"red"}
                                        longitude={festival.geocoding[1]}
                                        latitude={festival.geocoding[0]}
                                        popup={popup}
                                    />
                                </>
                            )
                        })
                    }
                    <NavigationControl/>
                </Map>
            </MapWrapper>
        </>
    );
}

export default PersonalMap