import React from 'react';
import LeftSection from "../components/LeftSection"
import RightSection from "../components/RightSection"
import styled from "styled-components"
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { loadData } from "../Actions/covidActions"

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
  
  dispatch(loadData())
  
  }, [dispatch])


  return (
    <StyledHome>
      <LeftSection />
      <RightSection />
    </StyledHome>
  );
}

const StyledHome = styled.div`
   width: 100%;
   padding: 2rem 5rem;
   background-color: #eeeeee;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   @media (max-width: 900px){
     flex-direction: column;
     justify-content: center;
     align-items: center;
   }
   
`

export default Home;
