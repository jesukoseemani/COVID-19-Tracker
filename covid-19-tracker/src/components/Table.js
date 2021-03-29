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
       
       {tabularCountries.map((country) => 
       <tr className="table_row">
       <td>{country.country}</td>
       <td>{numeral(country.cases).format("0,0")}</td>
       </tr>
       )}
       
      </table>
    </StyledTable>
  );
}

const StyledTable = styled.div`
 width: 100%;
 height: 60vh;
 overflow: scroll;
 display: flex;
 flex-direction:column;

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
