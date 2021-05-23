import React from 'react';
import Table from "./Table"
import Chart from "./Chart"
import styled from "styled-components"

function RightSection() {
  return (
    <StyledRightSection>
     <Table />
     <Chart />
    </StyledRightSection>
  );
}

const StyledRightSection = styled.div`
flex-basis: 25%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-left: 1.5rem;
background-color: #fafafa;
padding: 0rem 1rem;
@media (max-width: 1071px){
  height: 1140px;
     }
   @media (max-width: 900px){
       margin-top: 3rem; 
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: flex-start; 
       height: 440px;
    }
    @media (max-width: 700px){
      margin-left: 0rem;
    }
`

export default RightSection;
