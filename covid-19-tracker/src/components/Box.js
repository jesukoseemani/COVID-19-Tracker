import React from 'react';
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

function Box({Cases, cases, todayCases, Recovered, todayRecovered, recovered, Deaths, todayDeaths, deaths}) {

  const { caseType } = useSelector((state) => state.covid)

const dispatch = useDispatch()
const boxOneHandler = () => {

  dispatch({type: "CASE_TYPE",
  payload: {
    caseType: "cases" 
  }
});
   
}
const boxTwoHandler = () => {

  dispatch({type: "CASE_TYPE",
  payload: {
    caseType: "recovered" 
  }
});

}
const boxThreeHandler = () => {

  dispatch({type: "CASE_TYPE",
  payload: {
    caseType: "deaths" 
  }
});

}

  return (
    <StyledBoxes>
       <div className="box" style={{borderTop: caseType === "cases" ? "7px solid #0b1bf5" : ""}} onClick={boxOneHandler}>
          <h4>{Cases}</h4>
          <p>{todayCases}</p>
          <h6>{cases} Total</h6>
        </div>
        <div className="box" style={{borderTop: caseType === "recovered" ? "7px solid #7dd71d" : ""}} onClick={boxTwoHandler} >
          <h4>{Recovered}</h4>
          <p className="green">{todayRecovered}</p>
          <h6>{recovered} Total</h6>
        </div>
        <div className="box" style={{borderTop: caseType === "deaths" ? "7px solid #ff0000" : ""}} onClick={boxThreeHandler} >
          <h4>{Deaths}</h4>
          <p>{todayDeaths}</p>
          <h6>{deaths} Total</h6>    
    </div>
    </StyledBoxes>
  );
}

const StyledBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  .box{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 1rem;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
    margin: 0rem .5rem;
    cursor: pointer;
    background-color: white;
    h4{
      font-size: 1.3rem;
      padding-top: 1rem;
      
    }
    p{
      font-size: 1.8rem;
      padding-top: .7rem;
      color: red;
    }
    .green{
      color: green;
    }
    h6{
      font-size: 1.3rem;
      padding-top: .5rem;
      padding-bottom: .7rem;
      font-weight: lighter;
    }
  }
`


export default Box;
