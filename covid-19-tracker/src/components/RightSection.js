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
`

export default RightSection;
