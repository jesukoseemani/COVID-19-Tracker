import React from "react";
import numeral from "numeral"; // to format numbers in a certain way
import { Circle, Popup } from "react-leaflet";






// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data, caseType, casesTypeColors) => 
    
    data.map((country) => (
        <Circle 
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            pathOptions={{
                color: casesTypeColors[caseType].hex,
                fillColor: casesTypeColors[caseType].hex
            }}
            radius={Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier}
            key={country.country}
            
        >
            <Popup>
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <div className="info-name">{country.country}</div>
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")}</div>
                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle>
       
    ));

export const sortData = (data) => {
      const sortedData = [...data];
      return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  }
  
  export const prettyPrintStat = (stat) => 
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

 