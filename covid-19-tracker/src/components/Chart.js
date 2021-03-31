import React from 'react';
import styled from "styled-components"
import { useSelector } from "react-redux"
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';


function Chart() {
  const { historical, caseType} = useSelector((state) => state.covid)
//  const [data, setData] = useState({})

const chart = () => {
  let chartData = [];
  let lastPoint;
  for(let date in historical[caseType]){
    
     if(lastPoint){
        let obj = {
          x: date,
          y: historical[caseType][date] - lastPoint
        }
          chartData.push(obj)
     }
     lastPoint = historical[caseType][date]
    
  }
  return chartData
 }
 
 const options ={
  legend: {
      display: false,
  },
  elements: {
      point: {
          radius: 0,
      },
  },
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
          label: function (tooltipItem, data) {
              return numeral(tooltipItem.value).format("+0,0");
          },
      },
  },
  scales: {
      xAxes: [
          {
              type: "time",
              time: {
                  format: "MM/DD/YY",
                  tooltipFormat: "ll"
              },
          },
      ],
      yAxes: [
          {
              gridLines: {
                  display: false,
              },
              ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                      return numeral(value).format("0a");
                  },
              },
          },
      ],
  },
};


  return (
    <StyledChart>
      <h4>new daily {caseType} worldwide</h4>
       
  <Line
  className="line"
 options={options}
 data={{
     datasets: [
         {
             backgroundColor: "rgba(204, 16, 52, 0.5)",
             borderColor: "#CC1034",
             data: chart(),
         },
     ],
 }}
/> 
               
    </StyledChart>
  );
}

const StyledChart = styled.div`
 margin-top: 2rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 /* height: 250px; */
 @media (max-width: 1071px){
  height: 500px;
     }
 @media (max-width: 900px){
  padding-top: 8rem;
     }
 @media (max-width: 700px){
    display: none;  
   }
  .line{
    height: 200px;
    flex-grow: 1;
  
  }
`



export default Chart;
