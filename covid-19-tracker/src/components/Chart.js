import React from 'react';
import styled from "styled-components"
import { useSelector } from "react-redux"
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';


function Chart() {
  const { historical, caseType} = useSelector((state) => state.covid)

  const chartFunction = (data, type) => {
    let chartData = [];

    let lastDataPoint;
    for (let date in data.type) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[type][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[type][date];
    }
    return chartData;

}

const chartSortedData = chartFunction(historical, caseType);

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
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, chartSortedData) {
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
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: "#CC1034",
                                data: chartSortedData,
                            },
                        ],
                    }}
                />
            
    </StyledChart>
  );
}

const StyledChart = styled.div`

`


export default Chart;
