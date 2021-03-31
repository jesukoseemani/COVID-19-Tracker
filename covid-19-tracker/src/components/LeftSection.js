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
  const { countries, all, country, center, zoom} = useSelector((state) => state.covid)
  
  
  const changeCountryInformation = (e) => {
   const targeted = e.target.value;
   console.log(targeted)
   if(targeted === "worldwide"){
    dispatch({type: "CLEAR_COUNTRY",
              payload: {
                country: {},
                center: [34.80746, -40.4796],
                zoom: 3
              }
  }); 
   }else{
     dispatch(loadCountry(targeted));
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
         Cases="Covid-19 cases"
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
       Cases="Covid-19 cases"
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
         />
      </StyledMap>
   
    </StyledLeftSection>
  );
}

const StyledLeftSection = styled.div`
  flex-basis: 75%;
  @media (max-width: 900px){
    width: 100%;
    
     }
   .nav{
     display: flex;
     justify-content: space-between;
     align-items: center;
     @media (max-width: 1071px){
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
     }
     @media (max-width: 900px){
      flex-direction: row;
     justify-content: space-between;
     align-items: center;
     
   }

    .nav__heading{
      h1{
        color: red;
        font-weight: bold;
        @media (max-width: 700px){
          font-size: 2.2rem;  
   }
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
         @media (max-width: 700px){
          font-size: 1rem;
          padding-left: 0.2rem;
         padding-right: 0.1rem;
         width: 7rem;

            }
       }
     }
   }

`

const StyledMap = styled.div`
margin-top: 2rem;
`


export default LeftSection;
