import React from 'react';
import styled from "styled-components"
import logo from "../img/logo.png"
import { useSelector, useDispatch } from "react-redux"
import {loadCountry} from "../Actions/covidActions"
import Box from "./Box"
import Map from "./Map"
import {prettyPrintStat} from "../Utils"
import "leaflet/dist/leaflet.css";

function LeftSection() {
  const dispatch = useDispatch()
  const {countries, all, country, center, zoom} = useSelector((state) => state.covid)
  
  
  const changeCountryInformation = (e) => {
   const targeted = e.target.value;
   console.log(targeted)
   if(targeted === "worldwide"){
    dispatch({type: "CLEAR_COUNTRY"});
    dispatch({type: "CENTER_ZOOM",
              payload: {
                center: [34.80746, -40.4796],
                zoom: 2
              }
  });
    
   }else{
     dispatch(loadCountry(targeted));
  //    dispatch({type: "CENTER_ZOOM",
  //             payload: {
  //               center: [country.countryInfo.lat, country.countryInfo.long],
  //               zoom: 4
  //             }
  // });
   }
  }

  
  
  return (
    <StyledLeftSection>
      <div className="nav">
        <div className="nav__heading">
        <h1>C<span><img src={logo} alt="logo"/></span>vid-19 Tracker</h1>
        </div>
        
        <div className="nav__dropdown">
            <select name="countries" id="countries" onChange={changeCountryInformation}>
              <option value="worldwide">Worldwide</option>
              {countries.map(({country, countryInfo}) => (
                <option key={country} value={countryInfo.iso2}>{country}</option>
              ))}
            </select>
        </div>
      </div>
    
       { country.countryInfo ? 
         <Box 
         Cases="Coronavirus cases"
         todayCases={prettyPrintStat(country.todayCases)}
         cases={prettyPrintStat(country.cases)}
         Recovered="Recovered"
         todayRecovered={prettyPrintStat(country.todayRecovered)}
         recovered={prettyPrintStat(country.recovered)}
         Deaths="Deaths"
         todayDeaths={prettyPrintStat(country.todayDeaths)}
         deaths={prettyPrintStat(country.deaths)}
        
         />
       :
       <Box 
       Cases="Coronavirus cases"
       todayCases={prettyPrintStat(all.todayCases)}
       cases={prettyPrintStat(all.cases)}
       Recovered="Recovered"
       todayRecovered={prettyPrintStat(all.todayRecovered)}
       recovered={prettyPrintStat(all.recovered)}
       Deaths="Deaths"
       todayDeaths={prettyPrintStat(all.todayDeaths)}
       deaths={prettyPrintStat(all.deaths)}
    
       />
       }
      
      <StyledMap>
        <Map 
        center={center}
        zoom={zoom}
        countries={countries} 
         />
      </StyledMap>
   
    </StyledLeftSection>
  );
}

const StyledLeftSection = styled.div`
   .nav{
     display: flex;
     justify-content: space-between;
     align-items: center;

    .nav__heading{
      h1{
        color: red;
        font-weight: bold;
      }
    }

     img{
       width:2rem;
       height: 2rem;
     }

     .nav__dropdown{
       select{
         width: 10rem;
         height: 3rem;
         border-radius: 3px;
         cursor: pointer;
         color: black;
         outline: none;
         padding-left: 0.5rem;
         padding-right: 0.3rem;
         font-size: 1.3rem;
         font-weight: 700;
       }
     }
   }

`

const StyledMap = styled.div`
margin-top: 2rem;
`


export default LeftSection;
