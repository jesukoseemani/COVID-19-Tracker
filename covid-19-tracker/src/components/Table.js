import React from 'react';
import styled from "styled-components"
import { useSelector } from "react-redux"
import {sortData } from "../Utils"
import numeral from "numeral";


function Table() {
  
  const {countries} = useSelector((state) => state.covid)
  const tabularCountries = sortData(countries)
  
  return (
    <StyledTable>
      <h4>COVID-19 CASES BY COUNTRY</h4>
      <table className="table">
       <tbody>
       {tabularCountries.map((country) => 
       <tr key={country.country} className="table_row">
       <td>{country.country}</td>
       <td>{numeral(country.cases).format("0,0")}</td>
       </tr>
       )}
       </tbody>
      </table>
    </StyledTable>
  );
}

const StyledTable = styled.div`
 width: 100%;
 height: 435px;
 overflow: scroll;
 display: flex;
 flex-direction:column;
 @media (max-width: 1071px){
  height: 800px;
     }
 @media (max-width: 900px){
       margin-right: 2rem;
    }
    @media (max-width: 500px){
       margin-right: 3rem;
       
    }

 &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: red;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
  h4{
    font-size: 1rem;
    margin-top: 1.5rem;
    color:red;
  }
    .table{
      margin-top: 1.5rem;
      padding-right: 2rem;
        .table_row:nth-child(even){
          background-color: #333;
          color: #fafafa;
          td{
            padding:.2rem
          }
        }
    }
`


export default Table;
