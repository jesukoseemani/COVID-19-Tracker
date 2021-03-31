import React from 'react';
import { showDataOnMap } from '../Utils';
import styled from "styled-components"
import { MapContainer, TileLayer } from 'react-leaflet'
import { useSelector } from "react-redux"


function Map({center, zoom}) {

  const { countries, caseType } = useSelector((state) => state.covid)


  const casesTypeColors = {
    cases: {
        hex: "#0b1bf5",
        multiplier: 400,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 800,
    },
    deaths: {
        hex: "#ff0000",
        multiplier: 1600,
    },
}

  
 
  return (
    <StyledMap>
<MapContainer center={center} zoom={zoom}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {showDataOnMap(countries, caseType, casesTypeColors)}
  
</MapContainer>    
   </StyledMap>
  );
}


const StyledMap = styled.div`
    height: 500px;
    background-color: white;
    padding: 1rem;
    border-radius: 20px;
    margin-top: 16px;
    box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
 .leaflet-container {
    height: 100%; /* you need to set the height, otherwise the map won't display */
    }
  /* .leaflet-pane{
    height: 100%;
  } */
.info-flag {
    height: 80px;
    width: 100%;
    background-size: cover;
    border-radius: 8px;
}
.info-flag img {
    width: 100px;
    border-radius: 5px;
}
.info-name {
    font-size: 20px;
    font-weight: bold;
    color: #555;
}
.info-confirmed,
.info-recovered,
.info-deaths {
    font-size: 16px;
    margin-top: 5px;
}
.info-container {
    width: 150px;
}

`


export default Map;
