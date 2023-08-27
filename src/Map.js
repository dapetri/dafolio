import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styled from "styled-components";

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFwZXRyaSIsImEiOiJjbGxyd2JiOHQwOXphM2pvaHFuM2thMDY2In0.z70kqY7Uv2rcnKvzJClqUQ';

export const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    // const [lng, setLng] = useState(-70.9);
    // const [lat, setLat] = useState(42.35);
    // const [zoom, setZoom] = useState(9);

    const [lng,] = useState(8.4037);
    const [lat,] = useState(49.0069);
    const [zoom,] = useState(12.5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <MapContainer ref={mapContainer} />
        </>
    );
}

const MapContainer = styled.div`
    height: 100vh;
    overflow: hidden;
`
